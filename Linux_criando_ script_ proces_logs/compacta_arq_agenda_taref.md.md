# Compactando arquivos e agendando tarefas

📦 Nesta aula, aprendemos a compactar arquivos no Linux usando os comandos `tar` e `gzip`, com foco em facilitar a transferência e organização de arquivos de log. Também vimos como integrar esse processo em um script automatizado.

## 🗜️ Comando `tar` – Agrupar e compactar arquivos

O comando `tar` é usado para agrupar vários arquivos em um único arquivo `.tar`, e pode ser combinado com `gzip` para gerar um `.tar.gz`.

### 🔧 Sintaxe básica

tar -czf nome_arquivo.tar.gz pasta/

### 📌 Explicação das opções:

-c → Cria um novo arquivo.

-z → Compacta com gzip.

-f → Define o nome do arquivo de saída.

### 📁 Exemplo prático

tar -czf logs-compactados.tar.gz logs-processados/

Esse comando compacta a pasta logs-processados em um único arquivo .tar.gz.

### 📦 Compactação com tar
tar -czf → compactar diretórios

tar -tzf → listar conteúdo

tar -xzf → descompactar

tar -xzvf -C → extrair em diretório específico

### 🗜️ Compactação com gzip e gunzip
gzip → compactar arquivos individuais

gzip -c → compactar sem apagar o original

gunzip → descompactar

gunzip -c → descompactar sem apagar o .gz

## 📂 Listar conteúdo de um arquivo `.tar.gz`

Antes de extrair, é possível verificar o que está dentro do arquivo compactado:

tar -tzf logs-compactados.tar.gz

📌 Lista os arquivos contidos no .tar.gz sem extrair nada.

## 📤 Descompactar arquivos com tar
Para extrair o conteúdo de um arquivo .tar.gz:

tar -xzf logs-compactados.tar.gz

📌 Extrai os arquivos no diretório atual.

## 📁 Descompactar em um diretório específico

Se quiser extrair os arquivos em uma pasta específica:

tar -xzf logs-compactados.tar.gz -C pasta_destino/

📌 A opção -C define o diretório de destino para os arquivos extraídos.

## 🗜️ Compactar arquivos individuais com gzip

Para compactar um único arquivo:

gzip arquivo.txt

📌 Gera arquivo.txt.gz e remove o original.

## 🧷 Compactar sem apagar o original
Use -c para manter o arquivo original:

gzip -c arquivo.txt > arquivo.txt.gz

📌 Cria o arquivo compactado sem apagar o original.

## 📤 Descompactar com gunzip
Para restaurar o arquivo original:

gunzip arquivo.txt.gz

📌 Remove o .gz e recupera o arquivo original.

## 🧾 Descompactar sem apagar o .gz
Use -c para manter o arquivo compactado:

gunzip -c arquivo.txt.gz > arquivo.txt

📌 Restaura o conteúdo sem apagar o .gz.

## ⏰ Agendamento de tarefas com cron
O cron permite agendar a execução automática de scripts.

### 📝 Abrir o editor de agendamento
crontab -e

📌 Abre o editor para configurar tarefas agendadas.
### 🧭 Estrutura da sintaxe do cron

* * * * * comando
          
│ │ │ │ │

│ │ │ │ └─ dia da semana (0–7)

│ │ │ └─── mês (1–12)

│ │ └───── dia do mês (1–31)

│ └─────── hora (0–23)

└───────── minuto (0–59)

📌 Cada campo define quando o comando será executado.

#### ⏳ Exemplo prático

0 8 * * * /caminho/para/monitoramento-logs.sh

📌 Executa o script todos os dias às 8h da manhã.

### 📋 Listar tarefas agendadas

crontab -l

📌 Mostra todas as tarefas agendadas para o usuário atual.

### ❌ Remover todas as tarefas agendadas

crontab -r

📌 Remove todas as tarefas do cron para o usuário atual.


