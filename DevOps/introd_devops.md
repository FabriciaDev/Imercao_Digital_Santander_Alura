# 🐧 Linux e DevOps 

## 📌 Introdução
Nesta primeira aula, exploramos a importância do Linux no contexto DevOps e entendemos como o sistema operacional é estruturado.  
O Linux é um projeto **open source**, licenciado sob GPL, e seu núcleo é o **kernel**, responsável por gerenciar recursos e permitir que diferentes distribuições sejam criadas.

---

## 🔎 Conceitos principais

- **Kernel** → núcleo do sistema operacional, responsável por controlar hardware e processos.  
- **Distribuições (distros)** → versões do Linux adaptadas para diferentes usos (ex.: Ubuntu, CentOS, Debian).  
- **Open Source** → código aberto, permitindo colaboração e evolução contínua.  
- **Infraestrutura da internet** → grande parte dos servidores e dispositivos de rede utilizam Linux.  

---

## 🌐 Acesso remoto via SSH

O **SSH (Secure Shell)** é um protocolo que permite acessar e administrar máquinas remotamente.  
Isso é essencial em DevOps, já que muitas vezes o servidor não está fisicamente acessível.

### ▶️ Exemplo de uso
```bash
ssh usuario@192.168.40.36
````
ssh → comando para iniciar a conexão.

usuario → nome de usuário configurado na máquina remota.

192.168.40.36 → endereço IP da máquina alvo.

Após inserir a senha, você terá acesso ao terminal da máquina remota.

> ⚠️ **Alerta: Escalabilidade de Recursos**
>
> A escalabilidade de recursos é uma característica essencial para um servidor que precisa lidar com grandes volumes de dados.  
> Ela permite que o sistema utilize mais recursos em função do aumento na demanda, garantindo um desempenho consistente.

## 📂 Comandos básicos explorados

### ▶️ Criar arquivos
```bash
touch notas.txt
````
Cria um arquivo vazio chamado notas.txt.

### 📝 Preencher arquivos
````bash
cat > notas.txt
````
Permite digitar conteúdo diretamente no arquivo. Para sair, pressione Ctrl + D.

### 📢 Exibir mensagens
````bash
echo "Hello world"
````
Mostra a mensagem no terminal. Também pode escrever em arquivos:

````bash
echo "hello world" > notas.txt
````
### ✏️ Editar arquivos com nano
````bash
sudo apt-get install nano
nano arquivo_2.txt
````
Abre o editor de texto nano. Para sair, pressione Ctrl + X e confirme com Y.

### 📦 Compactar arquivos
````bash
tar -czf compactado.tar.gz arquivo_2.txt notas.txt
````
Cria um arquivo compactado com os arquivos listados.

### 📂 Mover arquivos
````bash
mv compactado.tar.gz /home/usuario/devops
````
Move o arquivo compactado para o diretório devops.

### 🗑️ Deletar arquivos
````bash
rm notas.txt
````
Remove o arquivo especificado.

### 📂 Outros casos de uso

ls -l → lista arquivos com detalhes.

cat arquivo.txt → mostra o conteúdo do arquivo.

mv *.txt /home/usuario/devops → move todos os arquivos .txt de uma vez.

rm -r pasta → remove uma pasta e seu conteúdo.

> 💡 **Dica sobre uso de curingas no Linux**
>
> O comando `ls file*` lista arquivos iniciados por **file** com qualquer sequência de caracteres adicionais, inclusive nada.  
> Sendo assim, você conseguirá listar todos os arquivos que precisa analisar de forma prática.

