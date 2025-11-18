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


