#!/bin/bash
# Define que o script será interpretado pelo bash

LOG_DIR="monitoramento_sistema"
# Cria uma variável para armazenar o diretório onde ficarão os logs

mkdir -p $LOG_DIR
# Cria o diretório de logs, caso ele não exista

# -------------------------------
# Função para monitorar logs do sistema e de autenticação
function monitorar_logs() {
    # Procura por falhas, erros e acessos negados no syslog e salva em arquivo
    grep -E "fail(ed)?|error|denied|unauthorized" /var/log/syslog | awk '{print $1, $2, $3, $5, $6, $7}' > $LOG_DIR/monitoramento_logs_sistema.txt
    
    # Procura por falhas, erros e acessos negados no auth.log e salva em arquivo
    grep -E "fail(ed)?|error|denied|unauthorized" /var/log/auth.log | awk '{print $1, $2, $3, $5, $6, $7}' > $LOG_DIR/monitoramento_logs_auth.txt
}

# -------------------------------
# Função para monitorar conectividade de rede
function monitorar_rede() {
    # Testa conexão com a internet via ping no DNS do Google
    if ping -c 1 8.8.8.8 > /dev/null; then
        echo "$(date): Conectividade ativa." >> $LOG_DIR/monitoramento_rede.txt
    else
        echo "$(date): Sem conexao com a internet." >> $LOG_DIR/monitoramento_rede.txt
    fi

    # Testa conexão com o site da Alura
    if curl -s --head https://www.alura.com.br/ | grep "HTTP/2 200" > /dev/null; then
        echo "$(date): Conexao com a Alura bem-sucedida." >> $LOG_DIR/monitoramento_rede.txt
    else
        echo "$(date): Falha ao conectar com a Alura." >> $LOG_DIR/monitoramento_rede.txt
    fi
}

# -------------------------------
# Função para monitorar uso de disco
function monitorar_disco() {
    # Registra a data da verificação
    echo "$(date)" >> $LOG_DIR/monitoramento_disco.txt
    
    # Lista partições com uso acima de 70%, ignorando snapfuse
    df -h | grep -v "snapfuse" | awk '$5+0 > 70 {print $1 " esta com " $5 " de uso."}' >> $LOG_DIR/monitoramento_disco.txt
    
    # Registra uso do diretório principal
    echo "Uso de disco no diretorio principal:" >> $LOG_DIR/monitoramento_disco.txt
    du -sh /home/gabi >> $LOG_DIR/monitoramento_disco.txt
}

# -------------------------------
# Função para monitorar hardware (RAM, CPU e disco)
function monitorar_hardware() {
    # Registra a data da verificação
    echo "$(date)" >> $LOG_DIR/monitoramento_hardware.txt
    
    # Exibe memória RAM total, usada e livre
    free -h | grep Mem | awk '{print "Memoria RAM Total: " $2 ", Usada: " $3 ", Livre: " $4}' >> $LOG_DIR/monitoramento_hardware.txt
    
    # Calcula uso da CPU subtraindo o tempo ocioso
    top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print "Uso da CPU: " 100 - $1 "%"}' >> $LOG_DIR/monitoramento_hardware.txt
    
    # Registra operações de leitura e escrita em dispositivos de armazenamento
    echo "Operacoes de leitura e escrita:" >> $LOG_DIR/monitoramento_hardware.txt
    iostat | grep -E "Device|^sda|^sdb|^sdc" | awk '{print $1, $2, $3, $4}' >> $LOG_DIR/monitoramento_hardware.txt
}

# -------------------------------
# Função principal que executa todas as verificações
function executar_monitoramento() {
    monitorar_logs
    monitorar_rede
    monitorar_disco
    monitorar_hardware
}

# -------------------------------
# Chamada da função principal
executar_monitoramento
