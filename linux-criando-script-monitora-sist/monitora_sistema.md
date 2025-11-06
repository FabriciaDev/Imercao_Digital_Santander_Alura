# Manipular e analisar logs do sistema
No começo foi definido que seriam nescessários arquivos de log para a execução do curso. Para a criação de arquivos de log foi dado o comando:
## 🛠 Criando o lab e visualizando 
Esse comkando cria os arquivos de log.
````
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=error msg=\"error: Falha ao iniciar o serviço Apache\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=warning msg=\"failed: Serviço Nginx não conseguiu se reiniciar\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=info msg=\"access denied: Tentativa de acesso ao banco de dados falhou\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=error msg=\"unauthorized: Tentativa de login SSH falhou\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=info msg=\"Sistema funcionando corretamente\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=warning msg=\"fail: Erro no driver de rede\""
````

No caso dos arquivos de log que podem ser gigantescos fica difícil com o comando cat. Com o comando less, a resposta do comando é paginada com o enter. Para navegar entre as páginas se usa as setas e para sair a tecla q

````
less /var/log/syslog
````
também dá para ver as informações do arquivo de log em tempo real com o comando tail. Cada nova atualização aparece na tela. Para sair "Ctrl + C".
````
tail -f /var/log/syslog
````
## 🧰 Principais opções do comando tails
| Opção     | Descrição                                                                                     |
|-----------|-----------------------------------------------------------------------------------------------|
| -f        | Exibe novas linhas adicionadas ao arquivo em tempo real (seguimento contínuo). Ideal para logs. |
| -n NUM    | Mostra as últimas NUM linhas do arquivo. Ex: `tail -n 20 arquivo.log`                         |
| -c NUM    | Mostra os últimos NUM bytes do arquivo. Ex: `tail -c 100 arquivo.log`                         |
| -q        | Suprime o cabeçalho com o nome do arquivo quando múltiplos arquivos são usados.              |
| -v        | Sempre mostra o cabeçalho com o nome do arquivo, mesmo se houver apenas um.                  |
| --pid=PID | Combinado com -f, encerra o tail quando o processo com o PID especificado termina.           |
| --retry   | Tenta reabrir o arquivo se ele estiver temporariamente indisponível.                         |

### 💡 Exemplos práticos
#### Monitorar log em tempo real:
````
tail -f /var/log/syslog
````
#### Ver as últimas 50 linhas de um arquivo:
````
tail -n 50 arquivo.log
````
#### Ver os últimos 200 bytes de um arquivo:
````
tail -c 200 arquivo.log
````
Monitorar log até que um processo termine:
````
tail -f /var/log/syslog --pid=1234
````
## 🧠 Expressões Regulares com grep

Regex (expressão regular) é uma sequência de símbolos usada para identificar padrões específicos em textos, como erros, datas ou acessos não autorizados em arquivos de log; ela permite filtrar rapidamente informações relevantes usando comandos como grep, tornando a análise de grandes volumes de dados mais eficiente e precisa.
### 📄 Tabela de opções do comando grep

| Opção     | Descrição                                                                 |
|-----------|---------------------------------------------------------------------------|
| `-E`      | Usa expressões regulares estendidas (permite `+`, `?`, `|`, etc.)         |
| `-o`      | Exibe apenas a parte da linha que corresponde à expressão                 |
| `-i`      | Ignora diferenças entre maiúsculas e minúsculas                           |
| `-v`      | Inverte o filtro: mostra linhas que **não** correspondem à expressão      |
| `-r` ou `-R` | Busca recursiva em diretórios                                           |
| `-n`      | Mostra o número da linha onde houve correspondência                       |
| `-c`      | Conta quantas linhas correspondem à expressão                             |
| `-l`      | Lista apenas os nomes dos arquivos que têm correspondência                |
| `-L`      | Lista arquivos que **não** têm correspondência                            |
| `--color` | Destaca visualmente os trechos que correspondem à expressão               |


### Componentes básicos

* Caracteres literais: correspondem exatamente aos caracteres no texto. Exemplo: abc corresponde à string "abc" no texto.
* Metacaracteres: caracteres especiais que possuem significados específicos.

### 🔣 Tabela de Metacaracteres Comuns em Regex
| Símbolo   | Significado                                 | Exemplo                   |
|-----------|---------------------------------------------|---------------------------|
| `.`       | Qualquer caractere (exceto quebra de linha) | `a.b` → "aab", "acb"      |
| `*`       | Zero ou mais repetições                     | `a*` → "", "a", "aa"      |
| `+`       | Uma ou mais repetições                      | `a+` → "a", "aa"          |
| `?`       | Zero ou uma repetição                       | `a?` → "", "a"            |
| `{n,m}`   | Entre n e m repetições                      | `a{2,4}` → "aa", "aaa"    |
| `^`       | Início da linha                             | `^abc` → só se começar com "abc" |
| `$`       | Fim da linha                                | `abc$` → só se terminar com "abc" |
| `[]`      | Conjunto de caracteres                      | `[aeiou]` → qualquer vogal |
| `[^]`     | Negação do conjunto                         | `[^a-z]` → não-letra minúscula |
| `()`      | Agrupamento                                 | `(abc)+` → "abcabc"       |
| `|`       | Alternativa (ou)                            | `gato|cachorro` → "gato" ou "cachorro" |

### 🔍 Tabela de Classes de Caracteres

| Classe    | Significado                                 | Exemplo                   |
|-----------|---------------------------------------------|---------------------------|
| `\d`      | Dígito (0–9)                                | `\d\d\d\d` → "2025"       |
| `\w`      | Alfanumérico + sublinhado (`_`)             | `\w+` → "joao_123"        |
| `\s`      | Espaço em branco                            | `\s` → " " ou tabulação   |
| `\D`      | Não é dígito                                | `\D` → "a", "-"           |
| `\W`      | Não é alfanumérico                          | `\W` → "!", "@"           |
| `\S`      | Não é espaço em branco                      | `\S` → "a", "1"           |

### 🛠️ Tabela de Ferramentas Linux que Aceitam Regex

| Ferramenta | Uso Principal               | Exemplo de Comando                                      |
|------------|-----------------------------|----------------------------------------------------------|
| `grep`     | Buscar padrões em arquivos  | `grep -Eo 'https?://[^\s]+' /var/log/syslog`            |
| `awk`      | Processar texto por campos  | `awk '{for(i=1;i<=NF;i++) if ($i ~ /https?:\/\/[^\s]+/) print $i}' /var/log/syslog` |
| `sed`      | Substituir ou extrair texto | `sed -nE 's/.*(https?:\/\/[^ ]+).*/\1/p' /var/log/syslog` |
| `perl`     | Regex avançada e flexível   | `perl -nle 'print $& if m{https?://[^\s]+}' /var/log/syslog` |
| `rg`       | Busca rápida com regex      | `rg -o 'https?://[^\s]+' /var/log/syslog`               |

#### Regex101, que oferece um editor interativo com explicações detalhadas de cada parte da regex;
https://regex101.com/
#### RegExr, que permite testar e salvar expressões regulares enquanto exibe dicas e exemplos;
https://regexr.com/
#### RegexPal, ideal para testar padrões simples rapidamente.
https://www.regexpal.com/

##🧾Análise de logs com awk
awk é uma ferramenta de linha de comando usada para processar e analisar textos estruturados, especialmente útil em arquivos de log. Ela permite filtrar linhas, extrair colunas específicas e aplicar condições lógicas com base em padrões, facilitando a identificação de eventos como erros, acessos negados ou falhas no sistema. Com awk, é possível automatizar a leitura de grandes volumes de dados e gerar relatórios precisos com comandos simples e eficientes.

| Comando `awk`                          | O que faz                                                  | Exemplo de uso                                               |
|---------------------------------------|-------------------------------------------------------------|--------------------------------------------------------------|
| `awk '{print $0}'`                    | Imprime a linha inteira                                     | Visualizar o conteúdo completo de cada linha do log         |
| `awk '{print $1, $2, $3}'`            | Imprime as 3 primeiras colunas                              | Mostrar data e hora do log                                   |
| `awk '/error/'`                       | Filtra linhas que contêm "error"                            | Ver apenas mensagens de erro                                 |
| `awk '$3 == "sshd"'`                  | Filtra linhas onde a 3ª coluna é "sshd"                     | Ver logs do serviço SSH                                      |
| `awk '{print NR, $0}'`                | Mostra número da linha junto com o conteúdo                 | Numerar os logs para referência                              |
| `awk '{count++} END {print count}'`   | Conta o número total de linhas                              | Saber quantas entradas existem no log                        |
| `awk '{if ($5 == "unauthorized") print $0}'` | Filtra linhas com "unauthorized" na 5ª coluna        | Ver tentativas de acesso não autorizado                      |


### 📂 Exemplo de log típico (/var/log/syslog)
````
Nov  5 22:14:01 meteora CRON[1234]: (root) CMD (run-parts /etc/cron.daily)
Nov  5 22:15:02 meteora sshd[5678]: Failed password for invalid user admin from 192.168.0.1 port 22 ssh2
Nov  5 22:16:03 meteora kernel: [12345.678901] error: unable to allocate memory
````
### 🔍 Extraindo colunas específicas
````
awk '{print $1, $2, $3, $5}' /var/log/syslog
````
Resultado: mostra data, hora, hostname e serviço.

### 🚨 Filtrando mensagens de erro
````
awk '/fail|error|denied|unauthorized/' /var/log/syslog
````
Resultado: mostra apenas linhas com falhas ou acessos negados.

### 🧠 Combinando filtro e formatação
````
awk '/fail|error|denied|unauthorized/ {print $1, $2, $3, $5, $6, $0}' /var/log/syslog
````
Resultado: exibe data, hora, serviço, tipo de log e a linha completa para contexto.

### 📊 Contando ocorrências
````
awk '/fail|error|denied|unauthorized/ {count++} END {print "Total:", count}' /var/log/syslog
````
Resultado: mostra quantas linhas com problemas foram encontradas.

### 📁 Salvando em arquivo
````
awk '/fail|error|denied|unauthorized/' /var/log/syslog > logs_filtrados.txt
````
Resultado: cria um arquivo com os logs relevantes para investigação.

## 🧩 Script de monitoramento
Esse script cria uma pasta chamada monitoramento-sistema, filtra do arquivo syslog apenas os logs com erros e acessos negados usando grep, formata a saída com awk para mostrar data, hora e serviço, e salva tudo no arquivo monitoramento_logs_sistema.txt.
````
#!/bin/bash

LOG_DIR="monitoramento-sistema"
mkdir -p $LOG_DIR

grep -E "(fail(ed)?|error|denied|unauthorized)" /var/log/syslog | awk '{print $1, $2, $3, $5, $6, $7}' > monitoramento_logs_sistema.txt
````
