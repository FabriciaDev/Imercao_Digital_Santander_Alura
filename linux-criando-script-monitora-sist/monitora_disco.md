# 💾 Monitoramento de Disco e Armazenamento no Linux
O monitoramento do disco é fundamental para garantir a estabilidade e o desempenho do sistema. A falta de espaço pode impedir a criação de arquivos, comprometer a execução de processos e causar falhas em aplicações. A análise periódica do uso de armazenamento permite identificar gargalos e tomar decisões como limpeza de dados ou expansão de capacidade.

Além do espaço físico, é necessário acompanhar o uso de inodes. Inodes são estruturas que armazenam metadados de arquivos e diretórios, como permissões, proprietário, tamanho e localização dos blocos de dados. Cada novo arquivo ou diretório consome um inode. Mesmo com espaço livre em disco, o sistema não consegue criar novos arquivos se os inodes estiverem esgotados.
## 🧪 Casos de uso com o comando df
### 📌 Ver uso básico do disco
Mostra o uso de espaço para todos os sistemas de arquivos montados.
````
df
````
### 📏 Exibir em formato legível (com unidades como MB/GB)
Apresenta os dados com unidades mais fáceis de interpretar, como MB ou GB.
````
df -h
````
### 📐 Exibir com unidades SI (base 1000)
Semelhante ao -h, mas usa potências de 1000 (ex: 1 GB = 1000 MB).
````
df -H
````
### 🧩 Mostrar todos os sistemas de arquivos, incluindo os especiais
Inclui sistemas de arquivos virtuais como proc, sysfs, entre outros.
````
df -a
````
### 🧬 Mostrar tipo de sistema de arquivos
Exibe o tipo de cada sistema de arquivos (ex: ext4, tmpfs).
````
df -T
````
### 📦 Ver uso de inodes
Mostra a quantidade de inodes usados e disponíveis.
````
df -i
````
### 🧾 Relatório completo com tipo e unidades legíveis
Combina tipo de sistema de arquivos com unidades legíveis.
````
df -hT
````
### 🏠 Mostrar apenas sistemas de arquivos locais
Ignora sistemas de arquivos remotos como NFS ou CIFS.
````
df -l -h
````
### 🚫 Excluir tipos de sistemas de arquivos
Filtra e oculta tipos específicos (ex: tmpfs).
````
df -x tmpfs -h
````
### ✅ Mostrar apenas tipos específicos de sistemas de arquivos
Exibe apenas sistemas de arquivos de um tipo definido (ex: ext4).
````
df -t ext4 -h
````
### ➕ Incluir linha total com somatório
Adiciona uma linha ao final com o total de espaço usado e disponível.
````
df -h --total
````
### 🧮 Personalizar colunas de saída
Permite escolher quais colunas exibir no relatório.
````
df --output=source,fstype,size,used,avail,pcent,target -h
````
### 📏 Definir tamanho de bloco
Força o uso de uma unidade específica (ex: MB).
````
df -B M
````
🖨️ Outro exemplo com formatação:
bash
awk '$5+0 > 70 {print $1 " esta com " $5 " de uso."}'
Se a condição for verdadeira, ele imprime:

$1: nome da partição

$5: porcentagem de uso

Com uma mensagem formatada.

Se quiser, posso te mostrar como usar awk pra extrair outras colunas ou montar relatórios mais completos. Quer explorar mais?

Quer saber vamos colocar os comandos utilizados em uma nova parte chamada usos combvinados de df. Coloque emogi em tudo e organize para ficar bonitinho e combinandinho com o arquivo aí do lado
Perfeito, Fabricia! Aqui está a nova seção “🧰 Usos Combinados do comando df”, formatada em Markdown (.md), com explicações claras, emojis e estilo combinando com o restante do seu arquivo:

markdown
## 🧰 Usos Combinados do comando `df`

Nesta seção, reunimos os comandos utilizados na aula para monitorar o uso de disco de forma mais refinada. A ideia é filtrar partições com uso elevado, ignorar sistemas irrelevantes e formatar a saída para facilitar a leitura e o registro em relatórios.

### 🔎 Filtrar partições com uso acima de 70%

```
df -h | awk '$5+0 > 70'
````
Exibe apenas as partições cujo uso de disco ultrapassa 70%.

O +0 remove o símbolo % para permitir a comparação numérica.

### 🚫 Ignorar partições do Snap (snapfuse)
````
df -h | grep -v "snapfuse" | awk '$5+0 > 70'
````
Remove da análise as partições do Snap, que costumam aparecer com 100% de uso mas não representam risco real.
### 🖨️ Formatar a saída com mensagem personalizada
````
df -h | grep -v "snapfuse" | awk '$5+0 > 70 {print $1 " esta com " $5 " de uso."}'
````
Exibe mensagens no formato: /dev/sda1 esta com 85% de uso.
### 📝 Salvar o resultado em um arquivo de log
````
>> $LOG_DIR/monitoramento_disco.txt
````
Redireciona a saída formatada para um arquivo de relatório no diretório de logs.

#### 🧩 Função no script
````
function monitorar_disco() {
  df -h | grep -v "snapfuse" | awk '$5+0 > 70 {print $1 " esta com " $5 " de uso."}' >> $LOG_DIR/monitoramento_disco.txt
````
Encapsula o monitoramento em uma função reutilizável dentro do script.

````
#!/bin/bash

LOG_DIR="monitoramento_sistema"
mkdir -p $LOG_DIR

function monitorar_logs() {
        grep -E "fail(ed)?|error|denied|unauthorized" /var/log/syslog | awk '{print $1, $2, $3, $5, $6, $7}' > $LOG_DIR/monitoramento_logs_sistema.txt
        grep -E "fail(ed)?|error|denied|unauthorized" /var/log/auth.log | awk '{print $1, $2, $3, $5, $6, $7}' > $LOG_DIR/monitoramento_logs_auth.txt
}

function monitorar_rede() {
        if ping -c 1 8.8.8.8 > /dev/null; then
                echo "$(date): Conectividade ativa." >> $LOG_DIR/monitoramento_rede.txt
        else
                echo "$(date): Sem conexao com a internet." >> $LOG_DIR/monitoramento_rede.txt
        fi

        if curl -s --head https://www.alura.com.br/ | grep "HTTP/2 200" > /dev/null; then
                echo "$(date): Conexao com a Alura bem-sucedida." >> $LOG_DIR/monitoramento_rede.txt
        else
                echo "$(date): Falha ao conectar com a Alura." >> $LOG_DIR/monitoramento_rede.txt
        fi
}

function monitorar_disco() {
        echo "$(date)" >> $LOG_DIR/monitoramento_disco.txt
        df -h | grep -v "snapfuse" | awk '$5+0 > 70 {print $1 " esta com " $5 " de uso."}' >> $LOG_DIR/monitoramento_disco.txt
        echo "Uso de disco no diretorio principal:" >> $LOG_DIR/monitoramento_disco.txt
        du -sh /home/gabi >> $LOG_DIR/monitoramento_disco.txt
}

function executar_monitoramento() {
        monitorar_logs
        monitorar_rede
        monitorar_disco
}

executar_monitoramento
````
