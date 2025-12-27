# DevOps: trabalhando com tráfego seguro em comunicações web
## 1. Montando o laboratório:

Ao longo do curso, vamos desenvolver atividades práticas relacionadas ao projeto de aplicação web **All Books**.  
Para aproveitar bem essa jornada, recomendamos instalar o projeto em seu computador seguindo estas etapas:

---

### 1. Instalando o Node.js

O laboratório utiliza **Node.js** para rodar a aplicação web **All Books**.  
Ele funciona como o servidor responsável por manter o backend ativo dentro da máquina virtual (VM), permitindo que o frontend em React se conecte e ofereça todas as funcionalidades do sistema.

---

## 2. Baixando o backend
Em um terminal:
```bash
git clone https://github.com/alura-cursos/api-alurabooks.git
cd api-alurabooks
npm install
npm run start-auth
````
O backend ficará disponível em http://localhost:8000

## 3. Baixando o frontend
Em outro terminal:
````bash
git clone https://github.com/alura-cursos/curso-react-alurabooks.git
cd curso-react-alurabooks
git checkout aula-5
npm install
npm start
````
O frontend ficará disponível em http://localhost:3000

## 4. Gerenciamento da VM e processos Node.js

Durante o uso do laboratório, é importante observar o ciclo de vida da máquina virtual (VM) e dos processos que estão rodando:

### Encerrando a VM
- Antes de desligar a VM, **encerre manualmente o processo Node.js** que está rodando o backend (`npm run start-auth`).
- Isso evita problemas de travamento ou corrupção de serviços (como acontece com o Zeek, que pode "quebrar" se não for encerrado corretamente).
- Para encerrar, utilize:
 ```bash
  Ctrl + C
````
no terminal onde o backend está rodando.

### Reiniciando a VM
Ao iniciar novamente a VM, os processos não são retomados automaticamente.

É necessário startar novamente o backend e o frontend:

#### Backend:

````bash
cd api-alurabooks
npm run start-auth
````

#### Frontend:

````bash
cd curso-react-alurabooks
npm start
````

> ### Boas práticas
> * Sempre finalize os processos Node.js antes de desligar a VM.
> * Após reiniciar, lembre-se de subir novamente os serviços para garantir que o laboratório esteja funcional.
> * Essa rotina garante consistência e evita falhas inesperadas durante os exercícios.

---

## 5. Explorando requisições HTTP com o navegador
### Atividade 1

Siga o passo a passo abaixo para observar, na prática, como o modelo cliente-servidor e o protocolo HTTP funcionam durante o carregamento de uma página web.

Passo 1 — Abrir um navegador: Escolha um navegador (Chrome, Firefox, Edge, etc.).

Passo 2 — Acessar um site: Entre em um endereço de sua preferência (por exemplo, alura.com.br ou google.com.br).

Passo 3 — Abrir as ferramentas de desenvolvedor: Pressione F12 ou clique com o botão direito na página e selecione Inspecionar.

Passo 4 — Ir para a guia Network (Rede): Localize e selecione a guia Network para monitorar as requisições.

Passo 5 — Recarregar a página: Pressione Ctrl+R ou clique com o botão direito e escolha Recarregar.

Passo 6 — Listar as requisições HTTP: Observe os itens que aparecem na guia Network (HTML, CSS, JS, imagens, fontes, etc.).

Passo 7 — Inspecionar uma requisição: Clique em uma requisição e examine Headers (cabeçalhos), Payload/Body (corpo), Response (resposta) e Timing (tempo).

Passo 8 — Interagir com a página: Execute ações como login, cadastro ou busca e acompanhe novas requisições em tempo real.

#### O que observar
Método HTTP: Veja a coluna Method (GET, POST, etc.).

Status da resposta: Note o código (200, 404, 500) e o significado.

URLs e rotas: Observe o caminho solicitado, parâmetros e query strings.

Cabeçalhos: Analise request/response headers (Content-Type, Authorization, Cache-Control).

Corpo da requisição/resposta: Em APIs, confira o JSON enviado/recebido.

Tempo de carregamento: Use Timing para entender latências e gargalos.

---
## Mapeamento de recursos na web
O acesso e disponibilização de recursos na web é facilitado pelo uso de soluções como DNS (Domain Name System) e URLs (Uniform Resource Locators). O DNS atua na conversão e mapeamento de nomes de domínio em endereços IP, permitindo a localização de servidores na internet. Por outro lado, as URLs são uma forma padronizada de especificar a localização precisa de recursos na web, possibilitando o acesso às informações e serviços de maneira organizada e intuitiva.

Para reforçar o que aprendemos sobre mapeamento de recursos na web, propomos uma lista de atividades (não obrigatórias). Bora explorar um pouco mais sobre o assunto!?

### Atividade 1

ping youtube.com

O comando ping é usado para testar a conectividade com um servidor. Neste caso, ao pingar "youtube.com", você obterá o endereço IP associado à plataforma Youtube.

### Atividade 2

tracert alura.com.br

O comando tracert rastreia a rota que os pacotes de dados percorrem até alcançar o destino, revelando as direções que as mensagens enviadas do seu computador para a plataforma da Alura seguem.

### Atividade 3

nslookup www.google.com

O comando nslookup é utilizado para realizar a resolução de DNS, fornecendo informações sobre o endereço IP associado ao domínio.

### Atividade 4

tracert www.utwente.nl

Compare o tempo e a rota de encaminhamento obtidos nessa atividade com os resultados observados na atividade 2.

### Atividade 5

nslookup www.usp.br

Este comando fornece informações sobre o endereço IP associado ao domínio "www.usp.br" por meio da resolução DNS.

---
