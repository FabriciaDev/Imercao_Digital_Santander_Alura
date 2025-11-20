# 🐚 Shell Scripting

## 📌 O que é Shell Scripting?
Shell Scripting é a prática de criar **roteiros de comandos** que automatizam tarefas no sistema operacional Linux.  
Em vez de executar manualmente cada comando no terminal, podemos escrever um arquivo `.sh` que descreve passo a passo o que deve ser feito.  
Isso garante **agilidade, repetibilidade e eficiência** em atividades como monitoramento, backup e manutenção de servidores.

---

## 📝 Exemplo de Script de Monitoramento

Abaixo está um script completo que realiza monitoramento de **logs, rede, disco e hardware**.  
Cada linha está comentada para facilitar o entendimento:

```bash
#!/bin/bash
# Define que o interpretador será o Bash

diretorio_backup="/home/lucasrm/devops"
# Variável que guarda o caminho do diretório a ser salvo

nome_arquivo="backup_$(date +%Y%m%d_%H%M%S).tar.gz"
# Variável que define o nome do arquivo de backup com data e hora
# O comando 'date' gera a data/hora no formato AAAAMMDD_HHMMSS

tar -czf "$nome_arquivo" "$diretorio_backup"
# Compacta o diretório informado em um arquivo .tar.gz
# -c → cria novo arquivo
# -z → aplica compressão gzip
# -f → define o nome do arquivo de saída

echo "Backup concluído em $nome_arquivo"
# Exibe mensagem no terminal confirmando o backup e mostrando o nome do arquivo gerado

