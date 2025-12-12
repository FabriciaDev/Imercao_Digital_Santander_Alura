Localizando recursos na web
🌐 Contexto
Nossa equipe está preparando a aplicação web do projeto AllBooks, adotando integração contínua com GitHub Actions e realizando testes de carga e desempenho. A solução pode ser colocada em produção e disponibilizada aos usuários. Mas surge a pergunta: como os usuários conseguirão acessar esse recurso na web?

📖 Analogia
No dia a dia, acessamos páginas web digitando endereços no navegador, como google.com.br. O que permite esse acesso é um mecanismo de localização universal: a URL (Uniform Resource Locator).

🔎 URL
Exemplo:

https://www.google.com.br

http://localhost:3000/

A URL é composta por três partes:

Protocolo → http, https, ftp, ssh.

Servidor + Porta → localhost:3000.

Caminho do recurso → / (raiz, Home).

Ela permite localizar scripts, páginas, serviços e mensagens na web.

🔒 Porta
A porta é o mecanismo que conecta cliente e servidor.

Exemplo:

Backend → http://localhost:8000

Frontend → http://localhost:3000

📌 Intervalo de portas:

0–1022 → portas padrão (HTTP = 80, HTTPS = 443).

1023–65535 → portas livres, usadas em desenvolvimento (ex.: 3000, 8000).

Quando acessamos o Google, não digitamos a porta porque o navegador já usa a porta padrão (443 para HTTPS).

❓ Endereço IP
Um servidor não tem “nome” por si só, mas sim um endereço IP único. Para facilitar, usamos nomes amigáveis (como google.com) que são mapeados para IPs. Esse mapeamento é feito por sistemas de nomes de domínio (DNS), que veremos na sequência da aula.

✅ Resumo da Atividade
URLs são os “endereços” que localizam recursos na web.

Estrutura: protocolo + servidor/porta + caminho.

Portas permitem múltiplos serviços no mesmo servidor.

Portas padrão (80, 443) não precisam ser digitadas.

Nomes de domínio são traduzidos para IPs via DNS.
