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

### 🔍 Explicando o comando:

's/antigo/novo/' → padrão de substituição.

${ARQUIVO_DIR} → variável com o caminho do diretório.

$(date +%F) → insere a data atual no formato YYYY-MM-DD.

\/ → contrabarra usada como caractere de escape para que o / seja interpretado corretamente.

## 🧠 Aprendizados da aula

- 📏 Contar linhas, palavras e caracteres em arquivos de log:
  ```bash
  wc -l nome_do_arquivo.log     # Linhas
  wc -w nome_do_arquivo.log     # Palavras
  wc -c nome_do_arquivo.log     # Caracteres
📎 Unir arquivos com cat:

bash
cat arquivo1.log arquivo2.log > todos_os_logs.log
🕒 Trabalhar com datas usando date:

bash
date +"%Y-%m-%d %H:%M:%S"     # Data e hora atual
date -d "yesterday"           # Data de ontem
date -d "+1 day"              # Amanhã
date -u +"%Y-%m-%d %H:%M:%S UTC"  # Data e hora em UTC
🔍 Filtrar informações específicas com grep:

bash
grep "ERROR" nome_do_arquivo.log
🔗 Combinar comandos com pipes (|) para análises avançadas:

bash
cat todos_os_logs.log | grep "ERROR" | wc -l
💡 Dica extra
Você pode usar esses comandos em scripts .sh para automatizar tarefas de análise de logs e manutenção de sistemas.
