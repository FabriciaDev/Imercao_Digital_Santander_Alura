# Analisando informações de arquivos

## 📊 Comando `wc` – Contagem de conteúdo

- `wc -l nome_do_arquivo.log` → Conta o número de **linhas**.
- `wc -w nome_do_arquivo.log` → Conta o número de **palavras**.
- `wc -c nome_do_arquivo.log` → Conta o número de **caracteres**.

## 📁 Comando `cat` – Concatenar arquivos

- `cat arquivo1.log arquivo2.log > todos_os_logs.log` → Junta o conteúdo de dois arquivos em um novo.

## 🕒 Comando `date` – Manipulação de datas e horários

- `date +"%Y-%m-%d %H:%M:%S"` → Exibe a **data e hora atual** formatada.
- `date +%s` → Exibe o **timestamp atual** (segundos desde 01/01/1970).
- `sudo date -s "2024-12-01 10:30:00"` → Define **manualmente** a data e hora.
- `date -d "+1 day"` → Exibe a **data de amanhã**.
- `date -d "yesterday"` → Exibe a **data de ontem**.
- `date -d "next Friday"` → Exibe a **próxima sexta-feira**.
- `date +"%A"` → Exibe o **dia da semana**.
- `date +"%B"` → Exibe o **mês por extenso**.
- `date -u` → Exibe o horário em **UTC**.
- `date -u +"%Y-%m-%d %H:%M:%S UTC"` → Exibe data e hora em **formato UTC completo**.

## 🔍 Comando `grep` – Filtragem de conteúdo

- `grep "ERROR" nome_do_arquivo.log` → Filtra linhas que contenham a palavra **ERROR**.

## 🛠️ Comando `sed` – Substituição de texto em arquivos

O comando `sed` é usado para buscar e substituir trechos de texto em arquivos. Ele é muito útil para automatizar alterações em scripts, especialmente quando lidamos com arquivos de log.

### ✏️ Exemplo básico de substituição

bash

sed -i 's/antigo/novo/' arquivo.txt

Esse comando substitui a palavra antigo por novo no arquivo arquivo.txt. A opção -i faz a alteração diretamente no arquivo.

### 📁 Aplicação prática em logs
Na aula, usamos sed para substituir o nome do arquivo log_stats.txt por um nome dinâmico com data, salvando no diretório correto:

sed -i 's/log_stats.txt/"${ARQUIVO_DIR}\/log_stats_$(date +%F).txt"/' monitoramento-logs.sh

### 🔍 Explicando o comando:

's/antigo/novo/' → padrão de substituição.

${ARQUIVO_DIR} → variável com o caminho do diretório.

$(date +%F) → insere a data atual no formato YYYY-MM-DD.

\/ → contrabarra usada como caractere de escape para que o / seja interpretado corretamente.
## 🧩 Outros comandos importantes da aula

### 📥 Redirecionamento de entrada com `<`

Permite enviar o conteúdo de um arquivo como entrada para um comando, sem precisar usar `cat`.

wc -l < arquivo.log

### 🔎 Isso conta as linhas do arquivo arquivo.log usando redirecionamento de entrada.

### 🧪 Captura de saída com $(comando)
Usado para armazenar o resultado de um comando em uma variável.

DATA=$(date +"%Y-%m-%d")
echo "Análise feita em $DATA"

📌 Aqui, a variável DATA recebe a data atual, e o echo imprime uma frase com essa data.

### 🧾 Extração de nome de arquivo com basename
Remove o caminho e retorna apenas o nome do arquivo.

nome=$(basename /caminho/para/arquivo.log)
echo "Nome do arquivo: $nome"

📌 Isso é útil para organizar arquivos ou gerar relatórios com nomes limpos.

### 📂 Criação de diretórios com mkdir -p
Cria diretórios, inclusive múltiplos níveis, sem erro se já existirem.

mkdir -p logs/$(date +%F)

📌 Cria uma pasta logs/AAAA-MM-DD com a data atual, ideal para salvar logs organizados por dia.

### 🔀 Estruturas condicionais: if, elif, else
Permitem executar comandos diferentes dependendo de uma condição.

if [ -f "arquivo.log" ]; then

  echo "Arquivo encontrado"
  
elif [ -d "logs" ]; then

  echo "Diretório existe"
else

  echo "Arquivo ou diretório não encontrado"
  
fi

📌 Esse bloco verifica se o arquivo existe, se o diretório existe, ou exibe uma mensagem de erro.

