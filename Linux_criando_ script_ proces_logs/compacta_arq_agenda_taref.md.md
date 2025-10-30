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
