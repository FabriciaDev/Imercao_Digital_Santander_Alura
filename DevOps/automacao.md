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

### 🤖 Automatizando o monitoramento do Nginx

Em ambientes de produção, é essencial garantir que o servidor web esteja sempre ativo.  
Podemos criar um script simples que verifica o status do Nginx e reinicia o serviço automaticamente se ele parar.

```bash
#!/bin/bash
# Script de monitoramento do Nginx

# Verifica se o Nginx está ativo
if systemctl is-active --quiet nginx; then
  echo "✅ Nginx está rodando normalmente."
else
  echo "⚠️ Nginx não está ativo. Tentando reiniciar..."
  sudo systemctl restart nginx

  # Verifica novamente após reiniciar
  if systemctl is-active --quiet nginx; then
    echo "🚀 Nginx reiniciado com sucesso!"
  else
    echo "❌ Falha ao reiniciar o Nginx. Verifique manualmente."
  fi
fi
````
### 📌 Conclusão

Agora temos um servidor web instalado e sabemos como ligar, desligar e monitorar o Nginx. Esse é o primeiro passo para hospedar páginas e serviços, e abre caminho para pensar em monitoramento automático e automação de deploys

## 🤖 Automatizando o gerenciamento do Nginx com case/esac

Em ambientes de produção, não basta instalar o servidor web — é preciso **gerenciar e monitorar** o serviço constantemente.  
O `case/esac` é ideal nesses cenários porque permite criar um **menu de escolhas** para o usuário, deixando o script mais limpo e fácil de expandir.  
Além disso, podemos tratar **operações inválidas** com o `*`, garantindo que o script não quebre se o usuário digitar algo errado.

---
### 📝 Exemplo prático

```bash
#!/bin/bash
# Script de gerenciamento e monitoramento do Nginx usando case/esac

read -p "Digite a operação (status/start/stop/restart/monitorar): " operacao

case "$operacao" in
  "status")
    systemctl status nginx
    ;;
  
  "start")
    sudo systemctl start nginx
    echo "🚀 Nginx iniciado com sucesso."
    ;;
  
  "stop")
    sudo systemctl stop nginx
    echo "🛑 Nginx parado."
    ;;
  
  "restart")
    sudo systemctl restart nginx
    echo "🔄 Nginx reiniciado."
    ;;
  
  "monitorar")
    if systemctl is-active --quiet nginx; then
      echo "✅ Nginx está rodando normalmente."
    else
      echo "⚠️ Nginx não está ativo. Tentando reiniciar..."
      sudo systemctl restart nginx

      if systemctl is-active --quiet nginx; then
        echo "🚀 Nginx reiniciado com sucesso!"
      else
        echo "❌ Falha ao reiniciar o Nginx. Verifique manualmente."
      fi
    fi
    ;;
  
  *)
    echo "❌ Operação inválida."
    echo "Uso correto: $0 (status|start|stop|restart|monitorar)"
    exit 1
    ;;
esac

````
> ### 💡 Por que usar case/esac aqui?
> Menus de escolha: o usuário pode selecionar a ação desejada sem precisar lembrar todos os comandos.
>
> Código limpo: evita uma sequência longa de if/elif/else.
>
> Tratamento de erros: o * captura qualquer entrada inesperada.
>
> Escalabilidade: fácil adicionar novas opções (ex.: “monitorar” ou “enable/disable”).

### 📌 Conclusão 

Agora temos um servidor web instalado e sabemos como ligar, desligar, reiniciar e monitorar o Nginx usando um script interativo. Esse é o primeiro passo para hospedar páginas e serviços, e abre caminho para pensar em monitoramento automático e automação de deploys.

## 📊 Apache vs Nginx: quando usar cada um

| Critério | Apache | Nginx |
|----------|--------|-------|
| **Arquitetura** | Baseado em processos/threads. Cada requisição abre um processo, consumindo mais memória. | Baseado em eventos assíncronos. Um processo gerencia várias conexões simultâneas com baixo consumo. |
| **Desempenho em conteúdo estático** | Bom, mas pode sofrer em cenários de alto tráfego devido ao modelo de processos. | Excelente. Projetado para servir conteúdo estático de forma rápida e eficiente. |
| **Desempenho em conteúdo dinâmico** | Forte integração com módulos como PHP, Perl, Python. Muito flexível. | Precisa de integração com outros serviços (ex.: FastCGI, PHP-FPM). Não tão nativo quanto Apache. |
| **Configuração** | Suporta `.htaccess`, permitindo configurações por diretório. Útil em hospedagens compartilhadas. | Não suporta `.htaccess`. Configuração centralizada, mais segura e performática. |
| **Escalabilidade** | Pode enfrentar limitações em cenários de milhares de conexões simultâneas. | Escala melhor em alto volume de tráfego (resolveu o “C10k problem”). |
| **Consumo de recursos** | Maior consumo de memória e CPU em tráfego intenso. | Mais leve, eficiente e econômico em recursos. |
| **Casos de uso ideais** | Sites dinâmicos, aplicações que dependem de muitos módulos e flexibilidade de configuração. | Sites com conteúdo estático, aplicações que precisam lidar com alto tráfego e escalabilidade. |

### 📌 Resumo:

* Use Apache → quando precisa de flexibilidade, suporte a módulos e conteúdo dinâmico.

* Use Nginx → quando o foco é conteúdo estático e alto desempenho em tráfego intenso.
