# 🖥️  Monitorando o Hardware do Sistema
## 💾 Verificando o uso de memória RAM com `free`

O comando `free` é utilizado para exibir informações sobre o uso da memória RAM e da área de swap. Ele mostra quanto de memória está sendo usada, quanto está livre e quanto está disponível para novos processos. Essa análise é essencial para identificar gargalos de desempenho relacionados ao consumo de memória.

### 📌 Uso básico do comando

```
free -h
````
-h → exibe os valores em formato legível (KB, MB, GB).

A saída apresenta duas linhas principais:

* Mem: memória RAM total, usada, livre, compartilhada, buffers/cache e disponível.
* Swap: espaço em disco reservado para uso quando a RAM está cheia.

#### Exemplo de saída:

````
              total        used        free      shared  buff/cache   available
Mem:           9.6Gi       2.8Gi       5.9Gi        14Mi       949Mi       6.5Gi
Swap:          3.0Gi          0B       3.0Gi
````

### 🔎 Filtrando apenas a linha da memória RAM
````
free -h | grep Mem
````
Exibe somente a linha referente à memória RAM, ignorando a área de swap.

Exemplo de saída:
````
Código
Mem:           9.6Gi       2.8Gi       5.9Gi        14Mi       949Mi       6.5Gi
````
### 🧮 Formatando a saída com awk
````
free -h | grep Mem | awk '{print "Total: " $2 ", Usada: " $3 ", Livre: " $4}'
````
Exibe apenas as colunas de interesse (total, usada e livre).

Saída formatada para facilitar leitura ou registro em relatório.

Exemplo de saída:

````
Total: 9.6Gi, Usada: 2.8Gi, Livre: 5.9Gi
````
`## 📂 Outros casos de uso do comando free

free -m → mostra os valores em megabytes.

free -g → mostra os valores em gigabytes.

free -t → adiciona uma linha com o total de memória (RAM + swap).

free -s 5 → atualiza a saída a cada 5 segundos, útil para monitoramento em tempo real.

free --mega → força a exibição em MB, mesmo que o valor seja maior.

Essas variações permitem adaptar o comando free a diferentes cenários de análise, seja para relatórios rápidos ou para monitoramento contínuo.

> ⚠️ **Atenção: Gigabit x Gigabyte**
>
> - **Gigabit (Gb):** unidade de medida usada em velocidade de transmissão de dados (ex.: internet).  
>   1 Gigabit = 1.000.000.000 bits.  
>   Normalmente aparece em conexões como "100 Mb/s" ou "1 Gb/s".
>
> - **Gigabyte (GB):** unidade de medida usada em armazenamento de dados (ex.: HD, SSD, pendrive).  
>   1 Gigabyte = 1.000.000.000 bytes (decimal) ou 1.073.741.824 bytes (binário, chamado GiB).  
>   Normalmente aparece em tamanhos de arquivos ou capacidade de discos.
>
> 👉 Resumindo: **Gb (bit)** mede velocidade, enquanto **GB (byte)** mede espaço de armazenamento.

## ⚙️ Obtendo o uso da CPU com `top`

O comando `top` é utilizado para monitorar em tempo real os processos que estão sendo executados no sistema. Além de listar os processos, ele mostra informações sobre o uso da CPU, memória e outras métricas importantes. Esse comando é essencial para identificar gargalos de desempenho e verificar se há sobrecarga no processamento.

### 📌 Uso básico do comando

```
top
````
Exibe em tempo real os processos ativos e o consumo de recursos.

Para sair da tela do top, pressione a tecla Q.

🧾 Saída única em modo batch
bash
top -bn1
-b → executa em modo batch (sem interface interativa).

-n1 → gera apenas uma saída única, sem atualização contínua.

Exemplo de saída (trecho da linha da CPU):

Código
%Cpu(s):  0.0 us,  0.0 sy,  0.0 ni, 100.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
🔎 Filtrar apenas a linha da CPU
bash
top -bn1 | grep "Cpu(s)"
Exibe somente a linha com os dados de uso da CPU.

Principais indicadores:

us → uso da CPU por processos do usuário.

sy → uso da CPU pelo sistema operacional.

id → tempo em que a CPU ficou ociosa (idle).

🧮 Extrair apenas o valor de ociosidade com sed
bash
top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/"
Captura apenas o valor da porcentagem de ociosidade da CPU.

Exemplo de saída:

Código
99.0
📊 Calcular o uso da CPU com awk
bash
top -bn1 | grep "Cpu(s)" | sed "s/.*, *\([0-9.]*\)%* id.*/\1/" | awk '{print "Uso da CPU: " 100 - $1 "%"}'
Subtrai o valor de ociosidade de 100% para obter o uso real da CPU.

Exemplo de saída:

Código
Uso da CPU: 1.1%
Esses comandos permitem monitorar a CPU de forma detalhada, filtrando apenas as informações relevantes e formatando a saída para relatórios ou análises rápidas.

Código

---

👉 Assim, seguimos o mesmo padrão do `free`, mas agora com foco no **uso da CPU**. Quer que eu já prepare a próxima parte da aula (Análise de desempenho da CPU) no mesmo estilo para manter a sequência?




Editar em uma página
Tem alguma coisa para colocr na seção de outros casos de uso?
Sim, Fabricia! Dá pra enriquecer bastante a seção “Outros casos de uso” do comando top. Além do que já vimos na aula (uso básico, modo batch, filtragem com grep, extração com sed e cálculo com awk), o top tem várias opções úteis que podem entrar como variações práticas. Aqui vai uma sugestão para complementar o .md:

markdown
## 📂 Outros casos de uso do comando `top`

- `top -n 5` → executa 5 atualizações e depois encerra automaticamente.  
- `top -u usuario` → mostra apenas os processos de um usuário específico.  
- `top -p 1234` → monitora apenas o processo com PID 1234.  
- `top -o %MEM` → ordena a lista de processos pelo uso de memória.  
- `top -o %CPU` → ordena a lista de processos pelo uso da CPU.  
- `top -d 2` → define o intervalo de atualização para 2 segundos.  
- `top -bn1 | head -20` → mostra apenas as 20 primeiras linhas da saída em modo batch.  
- `top -bn1 | grep firefox` → filtra a saída para visualizar apenas processos relacionados ao Firefox.  

Essas variações permitem adaptar o `top` a diferentes cenários: monitorar usuários específicos, acompanhar apenas um processo, ordenar por consumo de recursos ou limitar a quantidade de informações exibidas.
