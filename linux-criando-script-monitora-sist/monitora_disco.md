# 💾 Monitoramento de Disco e Armazenamento no Linux
O monitoramento do disco é fundamental para garantir a estabilidade e o desempenho do sistema. A falta de espaço pode impedir a criação de arquivos, comprometer a execução de processos e causar falhas em aplicações. A análise periódica do uso de armazenamento permite identificar gargalos e tomar decisões como limpeza de dados ou expansão de capacidade.

Além do espaço físico, é necessário acompanhar o uso de inodes. Inodes são estruturas que armazenam metadados de arquivos e diretórios, como permissões, proprietário, tamanho e localização dos blocos de dados. Cada novo arquivo ou diretório consome um inode. Mesmo com espaço livre em disco, o sistema não consegue criar novos arquivos se os inodes estiverem esgotados.
## 🧪 Casos de uso com o comando df
### 📌 Ver uso básico do disco
Mostra o uso de espaço para todos os sistemas de arquivos montados.
````
df
````
### 📏 Exibir em formato legível (com unidades como MB/GB)
Apresenta os dados com unidades mais fáceis de interpretar, como MB ou GB.
````
df -h
````
### 📐 Exibir com unidades SI (base 1000)
Semelhante ao -h, mas usa potências de 1000 (ex: 1 GB = 1000 MB).
````
df -H
````
### 🧩 Mostrar todos os sistemas de arquivos, incluindo os especiais
Inclui sistemas de arquivos virtuais como proc, sysfs, entre outros.
````
df -a
````
### 🧬 Mostrar tipo de sistema de arquivos
Exibe o tipo de cada sistema de arquivos (ex: ext4, tmpfs).
````
df -T
````
### 📦 Ver uso de inodes
Mostra a quantidade de inodes usados e disponíveis.
````
df -i
````
### 🧾 Relatório completo com tipo e unidades legíveis
Combina tipo de sistema de arquivos com unidades legíveis.
````
df -hT
````
### 🏠 Mostrar apenas sistemas de arquivos locais
Ignora sistemas de arquivos remotos como NFS ou CIFS.
````
df -l -h
````
### 🚫 Excluir tipos de sistemas de arquivos
Filtra e oculta tipos específicos (ex: tmpfs).
````
df -x tmpfs -h
````
### ✅ Mostrar apenas tipos específicos de sistemas de arquivos
Exibe apenas sistemas de arquivos de um tipo definido (ex: ext4).
````
df -t ext4 -h
````
### ➕ Incluir linha total com somatório
Adiciona uma linha ao final com o total de espaço usado e disponível.
````
df -h --total
````
### 🧮 Personalizar colunas de saída
Permite escolher quais colunas exibir no relatório.
````
df --output=source,fstype,size,used,avail,pcent,target -h
````
### 📏 Definir tamanho de bloco
Força o uso de uma unidade específica (ex: MB).
````
df -B M
