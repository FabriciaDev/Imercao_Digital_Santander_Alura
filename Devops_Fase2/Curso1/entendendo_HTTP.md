# Entendendo o HTTP

## O que é HTTP?
O **HTTP (HyperText Transfer Protocol)** é o protocolo de comunicação usado para transferir informações entre cliente e servidor na web.  
Ele define como as mensagens são formatadas e transmitidas, garantindo que diferentes sistemas consigam se comunicar.

---

## Como funciona?
1. O navegador (cliente) envia uma **requisição HTTP** ao servidor.
2. O servidor processa essa requisição e responde com uma **mensagem HTTP**.
3. A resposta pode conter páginas HTML, dados JSON, imagens ou outros recursos.

Esse processo é a base da comunicação web: uma troca de mensagens padronizadas.

---

## Estrutura de uma requisição HTTP
- **Método:** indica a ação desejada (ex.: `GET`, `POST`, `PUT`, `DELETE`).  
- **URL:** identifica o recurso solicitado.  
- **Cabeçalhos:** trazem informações adicionais (ex.: tipo de conteúdo, autenticação).  
- **Corpo:** usado em métodos como `POST` para enviar dados ao servidor.  

---

## Estrutura de uma resposta HTTP
- **Código de status:** indica o resultado da requisição (ex.: `200 OK`, `404 Not Found`, `500 Internal Server Error`).  
- **Cabeçalhos:** informações sobre o servidor e o conteúdo retornado.  
- **Corpo:** contém os dados enviados de volta (HTML, JSON, etc.).  

---

## Segurança no HTTP
- O uso de **HTTPS** adiciona criptografia via TLS/SSL, garantindo **confidencialidade e integridade** dos dados.  
- Cabeçalhos de segurança como:
  - `Content-Security-Policy`  
  - `Strict-Transport-Security`  
  ajudam a proteger contra ataques comuns (XSS, hijacking, etc.).

---

## Resumo da Aula
- O HTTP é um protocolo de **requisição e resposta**.  
- O cliente (navegador) pede recursos → o servidor responde.  
- Estrutura clara de mensagens (método, cabeçalhos, corpo).  
- Segurança reforçada com HTTPS e cabeçalhos específicos.  

---
