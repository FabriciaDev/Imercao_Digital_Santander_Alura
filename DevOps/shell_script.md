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
````
# 📚 Saber mais: condicionais no Shell Scripting

Condições permitem que seu script tome decisões.  
A estrutura básica é **if**, **elif**, **else** e o fechamento com **fi**.  
Abaixo estão casos de uso essenciais com exemplos comentados.

---

## 🔎 Estrutura básica com if, elif, else e fi

```bash
valor=75

if [[ $valor -gt 80 ]]; then
  echo "🔥 Alto desempenho"
elif [[ $valor -ge 60 ]]; then
  echo "⚖️ Desempenho adequado"
else
  echo "⚠️ Desempenho abaixo do esperado"
fi
````
## 🌐 Verificando sucesso ou falha de comandos
````bash
# Cria diretório e checa se deu certo
mkdir -p /tmp/meu_dir
if [[ $? -eq 0 ]]; then
  echo "✅ Diretório criado com sucesso"
else
  echo "❌ Falha ao criar diretório"
fi

# Forma idiomática: usa diretamente o comando no if
if ping -c 1 8.8.8.8 > /dev/null; then
  echo "🌍 Conectividade OK"
else
  echo "🚫 Sem internet"
fi
````
## 🔢 Comparações numéricas e de strings
````bash
cpu_uso=42
if [[ $cpu_uso -gt 70 ]]; then
  echo "⚠️ CPU acima do limite"
fi

ambiente="producao"
if [[ $ambiente = "producao" ]]; then
  echo "🏭 Configurações de produção aplicadas"
elif [[ -z $ambiente ]]; then
  echo "❓ Ambiente não definido"
fi
````
📂 Testes de arquivos e diretórios
````bash
arquivo="/etc/hosts"
pasta="/var/log"

if [[ -e $arquivo && -r $arquivo ]]; then
  echo "📄 Arquivo existe e é legível"
fi

if [[ -d $pasta && -w $pasta ]]; then
  echo "📁 Diretório existe e é gravável"
else
  echo "🚫 Diretório ausente ou sem permissão de escrita"
fi

🔗 Combinando condições com && e ||
bash
usuario="deploy"
perfil="prod"

if [[ $usuario = "deploy" && $perfil = "prod" ]]; then
  echo "🔒 Permissões elevadas concedidas"
fi

if [[ $usuario = "admin" || $usuario = "deploy" ]]; then
  echo "✅ Usuário autorizado"
else
  echo "🚫 Usuário sem autorização"
fi
````
> ## 💡 Dica prática
> Use [[ ... ]] em vez de [ ... ] para comparações mais seguras.
>
> Sempre coloque variáveis entre aspas: "$var" evita erros com espaços ou valores vazios.
>
 Prefira checar sucesso de comandos diretamente no if:
 
````bash
if comando; then ... fi
É mais claro e idiomático.
````
