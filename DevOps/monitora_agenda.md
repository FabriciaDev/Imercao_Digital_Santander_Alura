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
**>**

Redireciona a saída de um comando para um arquivo ou dispositivo.

````bash
pgrep nginx > resultado.txt
````
**/dev/null**
Local de descarte no Linux, útil para suprimir saídas desnecessárias.

bash
pgrep nginx > /dev/null
&>
Redireciona tanto a saída padrão quanto a de erro.

bash
pgrep nginx &> /dev/null
📝 Criação de um script de monitoramento
Abrir o editor
bash
nano monitoramento.sh
Escrever o script
bash
#!/bin/bash
# Script para verificar status do Nginx

if pgrep nginx &> /dev/null; then
  echo "✅ Nginx está operando $(date +'%Y-%m-%d %H:%M:%S')"
else
  echo "❌ Nginx fora de operação $(date +'%Y-%m-%d %H:%M:%S')"
fi
Tornar o script executável
bash
chmod +x monitoramento.sh
Executar o script
bash
./monitoramento.sh
💡 Comandos usados no script
if, then, else, fi → Criam a lógica de verificação.

pgrep nginx &> /dev/null → Verifica se o Nginx está em execução sem exibir saída.

echo → Exibe mensagens informativas ao usuário.

date → Inclui data e hora da verificação.

chmod +x → Torna o script executável.

📌 Conclusão Com esses comandos e o script, conseguimos monitorar se o Nginx está ativo, registrar data e hora da verificação e dar feedback claro ao usuário. Esse é o primeiro passo para evoluir em direção ao agendamento automático e ao monitoramento contínuo.
