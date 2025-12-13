# 📬 Postman

O **Postman** é uma ferramenta popular para desenvolvedores e profissionais de TI que facilita o trabalho com **APIs**. Ele permite enviar requisições HTTP, analisar respostas e organizar coleções de testes de forma prática.

---

## 🎯 Para que serve?

- Testar **endpoints de APIs** (GET, POST, PUT, DELETE, etc.).
- Simular requisições com **headers, parâmetros e corpo** personalizados.
- Automatizar testes de integração.
- Documentar APIs e compartilhar coleções com a equipe.
- Depurar problemas de comunicação entre cliente e servidor.

---

## ⚙️ Instalação no Linux

Existem duas formas principais de instalar o Postman no Linux:

### 🔹 Método 1: via Snap (se disponível)
```bash
sudo apt update
sudo apt install snapd -y
sudo systemctl enable --now snapd.socket
sudo snap install postman
````
🔹 Método 2: via tar.gz (mais confiável em distros como Kali)
````bash
wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz
tar -xzf postman.tar.gz
sudo mv Postman /opt/
sudo ln -s /opt/Postman/Postman /usr/bin/postman
````
Depois, basta rodar:

````bash
postman
````
## 🛠️ Ajustando o PATH para o Postman no Debian

Após instalar o Postman via Snap, pode ser necessário adicionar o diretório `/snap/bin` ao PATH para que o comando `postman` seja reconhecido:

```bash
echo 'export PATH=$PATH:/snap/bin' >> ~/.bashrc
source ~/.bashrc
````
Depois disso, basta abrir um novo terminal e executar:

````bash
postman
````
## 🚀 Como usar
Abrir o Postman Execute postman no terminal ou abra pelo menu de aplicativos.

Criar uma requisição

Clique em New → Request.

Escolha o método HTTP (GET, POST, PUT, DELETE).

Digite a URL da API.

Configure headers e body se necessário.

Enviar e analisar resposta

Clique em Send.

Veja o status code, tempo de resposta e corpo retornado.

Organizar em coleções

Salve suas requisições em Collections para reutilizar e compartilhar.

## 📌 Exemplo rápido
### Requisição GET
````http
GET https://jsonplaceholder.typicode.com/posts/1
````
Resposta esperada
````json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati",
  "body": "quia et suscipit..."
}
````
✅ Conclusão
O Postman é essencial para quem trabalha com APIs, pois simplifica testes, documentação e colaboração. No Linux, pode ser instalado via snap ou tar.gz, garantindo flexibilidade em diferentes distribuições.
