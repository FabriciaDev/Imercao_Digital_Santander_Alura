# 🌐 Sistema de Nomes de Domínio (DNS)

O DNS (Domain Name System) é um dos pilares da internet. Ele funciona como uma "agenda telefônica" que traduz nomes de domínio legíveis por humanos (como `alura.com.br`) em endereços IP compreensíveis por máquinas (como `172.67.72.232`).

## 🧭 Como funciona uma consulta DNS?

Quando você digita um endereço no navegador, uma série de etapas acontece nos bastidores para localizar o servidor correto. A imagem abaixo ilustra esse processo de resolução de nomes:

## 🖥️ Tipos de Servidores DNS

Durante a resolução de nomes, diferentes servidores participam do processo. Cada um tem uma função específica:

### 🔹 Servidor DNS Local (Resolver)
- **O que é:** É o servidor configurado na sua máquina ou rede (geralmente fornecido pelo provedor de internet).
- **Para que serve:** Recebe a requisição inicial do cliente e tenta resolver o domínio. Se não souber a resposta, consulta outros servidores (raiz, TLD, autoritativo).

### 🔹 Servidor Raiz
- **O que é:** É o primeiro nível da hierarquia DNS. Existem poucos servidores raiz distribuídos globalmente.
- **Para que serve:** Indica qual servidor TLD deve ser consultado para continuar a busca. Ele não fornece o IP final, apenas aponta o caminho.

### 🔹 Servidor TLD (Top-Level Domain)
- **O que é:** Responsável por domínios de topo, como `.com`, `.org`, `.br`.
- **Para que serve:** Informa qual servidor autoritativo deve ser consultado para obter informações detalhadas sobre o domínio solicitado.

### 🔹 Servidor Autoritativo
- **O que é:** É o servidor que contém os registros oficiais de um domínio específico (como `alura.com.br`).
- **Para que serve:** Fornece a resposta final, retornando o endereço IP associado ao domínio.

---

### 🔄 Etapas da resolução DNS
![Processo de resolução DNS](https://github.com/FabriciaDev/Imercao_Digital_Santander_Alura/raw/main/Devops_Fase2/Curso1/cli_ser.PNG)

1. **Cliente → Servidor DNS local**  
   O navegador solicita ao servidor DNS configurado na máquina ou rede que resolva o nome `alura.com.br`.

2. **Servidor DNS → Servidor Raiz**  
   O servidor DNS local não sabe a resposta, então pergunta ao servidor raiz onde encontrar informações sobre o domínio `.br`.

3. **Servidor Raiz → Servidor DNS**  
   O servidor raiz responde com o endereço do servidor TLD (Top-Level Domain) responsável pelo `.br`.

4. **Servidor DNS → Servidor TLD**  
   O servidor DNS local então pergunta ao servidor TLD onde encontrar o domínio `com.br`.

5. **Servidor TLD → Servidor DNS**  
   O servidor TLD responde com o endereço do servidor autoritativo para `alura.com.br`.

6. **Servidor DNS → Servidor Autoritativo**  
   O servidor DNS local consulta o servidor autoritativo para obter o IP de `alura.com.br`.

7. **Servidor Autoritativo → Servidor DNS**  
   O servidor autoritativo responde com o IP: `172.67.72.232`.

8. **Servidor DNS → Cliente**  
   O servidor DNS local envia o IP de volta ao cliente.

9. **Cliente → alura.com.br**  
   Com o IP em mãos, o cliente faz a requisição diretamente ao servidor da Alura.

10. **alura.com.br → Cliente**  
    O servidor da Alura responde com o conteúdo solicitado.

---

## 🧠 Analogia simples

Imagine que você quer ligar para a Alura, mas só tem o nome dela. Você:

- Pergunta à operadora (DNS local) se ela sabe o número.
- Ela consulta a lista internacional (servidor raiz).
- A lista internacional indica a lista brasileira (TLD).
- A lista brasileira aponta para a lista da Alura (autoritativo).
- Finalmente, você recebe o número (IP) e faz a ligação (requisição HTTP).

---
## 🗂️ Resolução DNS com e sem Cache

Quando acessamos um site, o servidor DNS configurado na rede pode já ter o endereço IP armazenado em seu **cache**. Isso torna o processo muito mais rápido. Mas e se o endereço não estiver no cache?

### 🔹 Com Cache
- O servidor DNS local já possui o IP armazenado.
- Ele responde imediatamente ao cliente sem precisar consultar outros servidores.
- Resultado: acesso rápido ao site.

### 🔹 Sem Cache
- O servidor DNS local não encontra o IP solicitado.
- Ele inicia o processo de **resolução recursiva**, consultando:
  1. **Servidor Raiz** → indica o TLD correto.
  2. **Servidor TLD** → aponta para o servidor autoritativo.
  3. **Servidor Autoritativo** → fornece o IP final.
- O servidor DNS local guarda essa resposta em cache (respeitando o tempo definido pelo **TTL – Time To Live**).
- Resultado: acesso ao site, mas com mais etapas envolvidas.

---

📌 **Resumo:**  
- **Cache presente:** resposta imediata.  
- **Cache ausente:** o DNS precisa “perguntar” a outros servidores até encontrar o IP.  

## ✅ Conclusão

O DNS é essencial para tornar a navegação na web intuitiva e eficiente. Sem ele, teríamos que memorizar longas sequências de números em vez de nomes amigáveis.


