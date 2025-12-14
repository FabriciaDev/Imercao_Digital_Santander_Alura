# DevOps: trabalhando com tráfego seguro em comunicações web
## 1. Montando o laboratório:

Ao longo do curso, vamos desenvolver atividades práticas relacionadas ao projeto de aplicação web **All Books**.  
Para aproveitar bem essa jornada, recomendamos instalar o projeto em seu computador seguindo estas etapas:

---

### 1. Instalando o Node.js
O Node.js é um ambiente de execução JavaScript fora do navegador, permitindo rodar código no lado do servidor.  
Vamos utilizá-lo para executar o projeto **All Books**.

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

3. Baixando o frontend
Em outro terminal:
````bash
git clone https://github.com/alura-cursos/curso-react-alurabooks.git
cd curso-react-alurabooks
git checkout aula-5
npm install
npm start
````
O frontend ficará disponível em http://localhost:3000


> ## 📝 Dicas para nomes de domínio
>
> - **Seja claro e fácil de lembrar:** escolha nomes curtos e intuitivos, que reflitam o propósito do site.  
> - **Evite caracteres confusos:** não use hífens, números ou combinações difíceis de digitar.  
> - **Prefira palavras locais:** se o público é brasileiro, use termos em português; se internacional, use inglês.  
> - **Consistência com a marca:** o domínio deve estar alinhado ao nome da empresa ou projeto.  
> - **Extensões adequadas:** `.com` é a mais comum, mas `.org`, `.net` ou regionais como `.com.br` podem ser úteis.  
> - **SEO amigável:** incluir palavras-chave relacionadas ao conteúdo ajuda na indexação.  
> - **Evite nomes genéricos demais:** quanto mais específico, mais fácil de se destacar.

> ## 🔎 Dicas para identificar URLs suspeitas
> 
> Verifique sempre o **domínio principal** (ex.: `banco-online-seguro.com.br`).  
> Desconfie de **subdomínios excessivos** ou estranhos (ex.: `.login.conta.suporte.cn`).  
> Atenção a **extensões incomuns** para o serviço (ex.: `.cn` em bancos brasileiros).  
> Evite clicar em URLs com **parâmetros estranhos** ou muito longos.  
> Prefira acessar sites digitando o endereço oficial diretamente no navegador.  
---

## Ferramentas de diagnóstico e análise de rede
### Testar conectividade com ping
Descrição: Verifica se o host responde e mede latência (tempo de ida e volta).

Windows/macOS/Linux:
````bash
ping www.youtube.com.br
````
Dicas: Compare resultados com sites em regiões diferentes para observar variação de latência.

Sugestão do curso: execute ping em múltiplos sites e compare tempos de resposta, considerando servidores em diferentes regiões.

### Ver rota até o destino com traceroute/tracert
Descrição: Mostra por quais roteadores (hops) os pacotes passam até chegar ao destino.

Windows:

````powershell
tracert www.youtube.com.br
````
macOS/Linux:

````bash
traceroute www.youtube.com.br
````
No curso, é recomendada a execução de traceroute/tracert para entender o caminho e onde podem ocorrer atrasos.

### Consultar DNS com nslookup ou dig
Descrição: Verifica como o nome de domínio é resolvido para IP e quais servidores respondem.

Windows/macOS/Linux (nslookup):

````bash
nslookup alura.com.br
````
macOS/Linux (dig):

````bash
dig alura.com.br +trace
````
Dicas: Use +trace no dig para ver cada etapa da resolução (root → TLD → autoritativo).

### Ver seu DNS e IP local
Descrição: Identifica configurações de rede (IP, DNS, gateway).

Windows:

````powershell
ipconfig /all
````
macOS:

````bash
scutil --dns
ifconfig
````
Linux:

````bash
resolvectl status
ip addr
````
### Checar portas e conexões ativas
Descrição: Vê conexões de rede e portas em uso (útil para troubleshooting).

Windows:

````powershell
netstat -ano
````
macOS/Linux:

````bash
sudo lsof -i -P -n
````
### Dicas práticas
* Comparação de latência: Teste com domínios em países diferentes para perceber impacto geográfico.

* Diagnóstico de falhas: Se ping falhar, teste traceroute/tracert para localizar o hop problemático.

* DNS lento: Use nslookup/dig em servidores diferentes (ex.: 1.1.1.1, 8.8.8.8) para comparar tempos.

## Métodos HTTP: Guia de Uso

Ao trabalhar com APIs REST, os métodos HTTP definem a intenção da requisição.  
Eles indicam se você quer **consultar**, **criar**, **atualizar** ou **remover** informações no servidor.  
Lembre-se: escolher o método correto garante clareza e consistência na comunicação entre cliente e servidor.

### Principais métodos

- **GET** → usado para **consultar dados**.  
  Exemplo: buscar lista de músicas ou detalhes de um usuário.

- **POST** → usado para **criar novos recursos**.  
  Exemplo: enviar uma avaliação de música ou cadastrar um novo usuário.

- **PUT** → usado para **atualizar completamente** um recurso existente.  
  Exemplo: substituir todos os dados de uma avaliação já feita.

- **PATCH** → usado para **atualizar parcialmente** um recurso.  
  Exemplo: alterar apenas a nota de uma avaliação sem mexer no comentário.

- **DELETE** → usado para **remover recursos**.  
  Exemplo: excluir uma avaliação ou apagar uma playlist.

---

📌 **Dica para lembrar:**  
- GET → “me mostra”  
- POST → “cria algo novo”  
- PUT → “troca tudo”  
- PATCH → “ajusta só um pedaço”  
- DELETE → “remove do mapa”
### Exemplo de uso de métodos HTTP

Imagine que você precisa enviar uma avaliação de música para o servidor.  
Nesse caso, usamos o método **POST**, pois estamos criando um novo recurso:
````
POST /api/v1/musicas/{id}/avaliacoes
Content-Type: application/json
````

````
{
  "usuario_id": 123,
  "nota": 5,
  "comentario": "Essa música é incrível!"
}
````
> 🔐 **Lembrete: Implantar HTTPS**
> O protocolo HTTP não oferece criptografia, o que significa que dados sensíveis (como senhas, tokens e informações pessoais) podem ser interceptados durante o tráfego.  
> Implantar HTTPS garante que a comunicação entre cliente e servidor seja cifrada, protegendo contra espionagem e adulteração de informações.
>
> ⚠️ Exemplo de risco: em um ataque *Man-in-the-Middle*, um invasor intercepta a conexão entre usuário e servidor, podendo ler ou modificar os dados transmitidos.  
> Com HTTPS, mesmo que o tráfego seja capturado, o conteúdo permanece criptografado e ilegível para terceiros.
