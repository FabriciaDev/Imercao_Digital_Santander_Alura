# 🖥️ Monitoramento de Recursos e Agendamento de Scripts

## ✨ Introdução

Em ambientes de tecnologia, não basta apenas instalar serviços ou rodar scripts manualmente.  

Para garantir **confiabilidade, segurança e eficiência**, precisamos de duas práticas fundamentais:

- **Monitoramento** → acompanhar o funcionamento de serviços e recursos (CPU, memória, processos, status de servidores).  

- **Agendamento** → automatizar execuções recorrentes (como backups, atualizações e verificações) sem depender da intervenção manual.

Essas práticas são pilares do **DevOps**, pois permitem que sistemas funcionem de forma contínua e previsível, mesmo em cenários de alto tráfego ou complexidade.

## 📊 Monitorando recursos

### 🛠️ Principais comandos

#### top  
Exibe uma lista geral dos processos em execução, mostrando uso de CPU, memória e tempo de execução.  
```bash
top
````
#### ps aux
Lista detalhada de todos os processos.

````bash
ps aux
````
#### grep
Permite pesquisar processos específicos, como os do Nginx.

````bash
ps aux | grep nginx
grep -v
````
#### Inverte a pesquisa, excluindo processos que correspondam ao padrão.

```` bash
ps aux | grep -v grep | grep nginx
pgrep
````
#### Filtra diretamente os processos relacionados a um nome.

````bash
pgrep nginx
````
## 🔀 Redirecionamento de saída
#### >

Redireciona a saída de um comando para um arquivo ou dispositivo.

````bash
pgrep nginx > resultado.txt
````
#### /dev/null

Local de descarte no Linux, útil para suprimir saídas desnecessárias.

````bash
pgrep nginx > /dev/null
````
#### &>
Redireciona tanto a saída padrão quanto a de erro.

````bash
pgrep nginx &> /dev/null
````
📝 Criação de um script de monitoramento
````bash
#!/bin/bash
# Script para verificar status do Nginx

if pgrep nginx &> /dev/null; then
  echo "✅ Nginx está operando $(date +'%Y-%m-%d %H:%M:%S')"
else
  echo "❌ Nginx fora de operação $(date +'%Y-%m-%d %H:%M:%S')"
fi

````
> ### 💡 Comandos usados no script
> if, then, else, fi → Criam a lógica de verificação.
>
> pgrep nginx &> /dev/null → Verifica se o Nginx está em execução sem exibir saída.
> 
> echo → Exibe mensagens informativas ao usuário.
> 
> date → Inclui data e hora da verificação.
> 
> chmod +x → Torna o script executável.

📌 Conclusão Com esses comandos e o script, conseguimos monitorar se o Nginx está ativo, registrar data e hora da verificação e dar feedback claro ao usuário. Esse é o primeiro passo para evoluir em direção ao agendamento automático e ao monitoramento contínuo.

## 📊 Coletando métricas do Nginx

Além de verificar se o Nginx está ativo, também é importante monitorar **métricas de desempenho**, como conexões ativas e requisições por segundo.  
Essas informações ajudam a identificar se o servidor está operando dentro da capacidade ou se está sobrecarregado.

---

### 📝 Script de coleta de métricas

```bash
#!/bin/bash

get_nginx() {
  local metrics=$(curl -s "http://localhost/nginx_status")
  if [[ -n "$metrics" ]]; then
    local active_connections=$(awk 'NR==1 {print $3}' <<< "$metrics")
    local requests_per_second=$(awk 'NR==3 {print $2}' <<< "$metrics")
    echo "Active connections: $active_connections"
    echo "Requests per second: $requests_per_second"
  else
    echo "❌ Falha na coleta das métricas do Nginx."
  fi
}

get_nginx
````
### 💡 Pontos importantes
> curl -s → coleta silenciosamente o conteúdo da URL.
>
> awk → processa o texto retornado e extrai apenas os valores desejados.
>
> Validação → o if [[ -n "$metrics" ]] garante que só processamos se houver resposta.
>
> Feedback → mensagens claras informam sucesso ou falha na coleta.

📌 Conclusão Esse script permite acompanhar métricas essenciais do Nginx em tempo real. Com ele, conseguimos identificar se o servidor está sobrecarregado e tomar ações preventivas antes que o serviço fique indisponível.

## 📑 Processando textos para coleta de dados
Nem sempre os dados que precisamos monitorar vêm em formato numérico.  
Muitas vezes eles estão em **arquivos de texto** ou em **saídas de comandos**.  
O Linux oferece ferramentas poderosas para filtrar e manipular essas informações, permitindo que criemos scripts que coletam exatamente o que precisamos.

### 🛠️ Comandos úteis

### grep  
Busca padrões em arquivos ou fluxos de entrada.  
```bash
grep "erro" /var/log/nginx/error.log
````
#### Eencontra todas as linhas que contêm a palavra erro.

```bash
grep -i
````
#### Ignora maiúsculas e minúsculas na busca.
````bash
grep -i "warning" /var/log/nginx/error.log
grep -c
````
#### Conta quantas vezes um padrão aparece.
````bash
grep -c "200 OK" access.log
````
### pipe (|)
Encadeia comandos, direcionando a saída de um para a entrada de outro.
````bash
cat novo.txt | grep "padrão"
````
Mostra apenas as linhas do arquivo novo.txt que contêm o padrão especificado.

## 📝 Exemplo prático
````bash
#!/bin/bash
# Script para contar requisições 200 OK no log do Nginx

arquivo="/var/log/nginx/access.log"

if [ -f "$arquivo" ]; then
  total=$(grep -c "200" "$arquivo")
  echo "✅ Total de requisições bem-sucedidas: $total"
else
  echo "❌ Arquivo de log não encontrado: $arquivo"
fi
````
### 💡 Por que isso é útil?
> * Permite filtrar informações relevantes em grandes volumes de texto.
> 
> * Facilita a criação de relatórios automatizados.
> 
> * Ajuda a identificar erros, padrões e métricas sem precisar analisar manualmente arquivos extensos.
