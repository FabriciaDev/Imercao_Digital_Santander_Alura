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

```bash
* * * * * comando
│ │ │ │ │
│ │ │ │ └─ dia da semana (0–7)
│ │ │ └─── mês (1–12)
│ │ └───── dia do mês (1–31)
│ └─────── hora (0–23)
└───────── minuto (0–59)

```

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

### 🕒 Agendamento único com o comando `at`

Nem toda tarefa precisa ser executada regularmente. Para agendar uma execução única, usamos o comando `at`.

### 🔧 Verificando o serviço `atd`

O `at` depende do serviço `atd`. Verifique se ele está ativo:

systemctl status atd

Se não estiver ativo, inicie com:

bash
sudo systemctl start atd
Se aparecer o erro Unit atd.service could not be found., instale o at:

bash
sudo apt update
sudo apt install at
Depois de instalar, habilite e inicie o serviço:

bash
sudo systemctl enable atd
sudo systemctl start atd
Verifique novamente o status:

bash
systemctl status atd

### 📅 Agendando uma execução única
Para agendar seu script para rodar daqui a 3 minutos:

echo "/caminho/para/seu/script/monitoramento-logs.sh" | at now + 3 minutes

📌 Substitua /caminho/para/seu/script/ pelo caminho real do seu script.

### 📋 Verificar tarefas agendadas
Use o comando abaixo para listar as tarefas agendadas com at:

atq

### ✅ Verificar se o script foi executado

Após o tempo agendado, verifique se houve modificações nos arquivos da pasta:

myapp/logs-processados

### 💡 Vantagens do at
* Ideal para tarefas que precisam ser executadas uma única vez.

* Permite agendar comandos para horários exatos, como:

“daqui a 5 minutos”

“amanhã às 14:00”

* Simples e direto, sem necessidade de editar arquivos de configuração.

* Ótimo para scripts de manutenção, backups ou relatórios pontuais.

* Ajuda a organizar tarefas e recursos do sistema com eficiência.
