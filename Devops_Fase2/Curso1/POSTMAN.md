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

## Métodos HTTP: Significados

| Método  | Significado                                                                 |
|---------|------------------------------------------------------------------------------|
| GET     | Recupera informações do servidor sem alterar os dados                        |
| POST    | Cria um novo recurso no servidor (envio de dados para serem armazenados)     |
| PUT     | Atualiza completamente um recurso existente (substitui todos os dados)       |
| PATCH   | Atualiza parcialmente um recurso existente (modifica apenas alguns campos)   |
| DELETE  | Remove um recurso existente do servidor                                      |

## Aula: Como funciona um servidor HTTP

Nesta aula entendemos o papel do servidor HTTP e como ele responde às requisições enviadas pelos clientes.  
O servidor recebe uma solicitação (request), processa os dados e retorna uma resposta (response) com informações sobre o resultado da operação.

### Procedimentos realizados no Postman

1. **Requisição sem autenticação**
   - Endpoint: `http://localhost:8000/pedidos`
   - Método: `GET`
   - Resposta:
     ```json
     {
       "status": 401,
       "message": "Token inválido"
     }
     ```
   - 🔎 Inferência: o servidor exige autenticação para acessar esse recurso.

2. **Login para obter token**
   - Endpoint: `http://localhost:8000/public/login`
   - Método: `POST`
   - Corpo da requisição:
     ```json
     {
       "email": "lcs@alura.com",
       "senha": "123"
     }
     ```
   - Resposta: retorna dados de autenticação (token válido).

3. **Requisição autenticada**
   - Endpoint: `http://localhost:8000/pedidos`
   - Método: `GET`
   - Cabeçalho:
     ```
     Authorization: Bearer <token>
     Connection: Keep-alive
     ```
   - Resposta: dados do usuário e permissões.
     ```json
     {
       "status": "success",
       "data": {
         "user": "devops_user",
         "permissions": ["read", "write"]
       }
     }
     ```

### Conclusão
- O servidor HTTP responde com **códigos de status** (200, 401 etc.) que indicam sucesso ou erro.  
- O Postman foi usado para **simular requisições** e observar como o servidor lida com autenticação e autorização.  
- Esse fluxo mostra a importância de enviar tokens válidos para acessar recursos protegidos.

> 📌 **Saiba mais sobre Cookies**
> Cookies são arquivos de texto que o navegador guarda para manter informações entre requisições HTTP. Eles permitem que o servidor reconheça o usuário e mantenha a continuidade da navegação, já que o protocolo HTTP por si só não guarda estado.
>
> Na prática, são usados para autenticação, personalização e persistência de sessões. Quando você faz login, por exemplo, o servidor envia um cookie que identifica sua sessão; em cada nova requisição, o navegador devolve esse cookie, garantindo que você continue logado e que sua experiência seja consistente.

