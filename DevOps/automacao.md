# 🤖Automação de Tarefas

## ✨ Introdução: Porque automatizar?
Você já parou pra pensar em quantas vezes repete as mesmas tarefas no servidor?  
Fazer backup, mover arquivos, compactar, descompactar… tudo isso pode virar uma rotina cansativa se feito manualmente.  

Automatizar é como ter um **assistente invisível** que faz o trabalho por você enquanto você foca em coisas mais importantes.  
Além de economizar tempo, você evita erros humanos e garante que tudo seja feito sempre do mesmo jeito.  
Ou seja: menos dor de cabeça e mais eficiência 🚀.

## 📝 Exemplo prático: Compactar ou Descompactar arquivos

```bash
#!/bin/bash
# Script que permite escolher entre compactar ou descompactar arquivos

read -p "Entre com a operação desejada: 'compactar' ou 'descompactar' " operacao

case "$operacao" in
  "compactar")
    read -p "Nome do arquivo final (.tar.gz): " arquivo_saida
    read -p "Lista de arquivos separados por espaço: " arquivos
    tar -czf "$arquivo_saida" $arquivos
    echo "✅ Compactados com sucesso em $arquivo_saida"
    ;;
  
  "descompactar")
    read -p "Nome do arquivo a descompactar (.tar.gz): " arquivo
    read -p "Diretório de destino: " diretorio
    tar -xzf "$arquivo" -C "$diretorio"
    echo "📂 Descompactado com sucesso em $diretorio"
    ;;
  
  *)
    echo "❌ Operação inválida!"
    echo "Selecione 'compactar' ou 'descompactar'."
    exit 1
    ;;
esac
````
> 🚨⚡ **ATENÇÃO IMPORTANTE!** ⚡🚨  
> Sempre lembre de tornar o script **executável** antes de rodar:  
> ```bash
> chmod +x nome_do_script.sh
> ```  
> Sem isso, o script não vai funcionar! 🔒

## 🌐 Instalando um Servidor Web (Nginx)

### ✨ Introdução: Por que instalar um servidor web?
Quando acessamos um site, como o da Alura ou qualquer serviço de streaming, não estamos pegando os arquivos direto do computador da empresa.  
Esses conteúdos ficam hospedados em **servidores web**, que são máquinas configuradas para responder às requisições dos usuários de forma rápida e confiável.  

O **Nginx** é um dos servidores web mais usados no mundo, conhecido por sua **performance** e eficiência em lidar com conteúdos estáticos.  
Já o **Apache** é outra opção popular, com muitos módulos e flexibilidade.  
Aqui vamos instalar o **Nginx** para praticar.

---

### 📝 Passo a passo da instalação

```bash
# 1. Atualizar pacotes do servidor
sudo apt update
sudo apt-get update

# 2. Instalar o Nginx
sudo apt install nginx

# 3. Verificar se o serviço está rodando
sudo systemctl status nginx
````
### ⚙️ Gerenciando o serviço Nginx
Depois de instalado, você pode controlar o servidor web com o systemctl:

````bash
# Parar o serviço
sudo systemctl stop nginx

# Iniciar o serviço
sudo systemctl start nginx

# Reiniciar o serviço (útil após mudanças de configuração)
sudo systemctl restart nginx

# Verificar se está ativo
sudo systemctl status nginx

# Habilitar para iniciar automaticamente junto com o sistema
sudo systemctl enable nginx

# Desabilitar para não iniciar automaticamente
sudo systemctl disable nginx
````
### 🔎 Monitoramento

systemctl status nginx → mostra se o servidor está ativo.

systemctl stop nginx → desliga o serviço.

systemctl start nginx → liga o serviço.

systemctl restart nginx → reinicia, aplicando mudanças.

systemctl enable/disable nginx → controla se o serviço sobe junto com o sistema.

### 📌 Conclusão
Agora temos um servidor web instalado e sabemos como ligar, desligar e monitorar o Nginx. Esse é o primeiro passo para hospedar páginas e serviços, e abre caminho para pensar em monitoramento automático e automação de deploys
