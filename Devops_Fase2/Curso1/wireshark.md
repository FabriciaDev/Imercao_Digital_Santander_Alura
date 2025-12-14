# 🦈 Wireshark: Análise de tráfego do backend

Este guia mostra como usar o Wireshark para observar e depurar o tráfego HTTP/HTTPS do backend local.  
Serve como lembrete prático para capturar, filtrar e interpretar requisições e respostas entre cliente e servidor.

---

## ⚙️ Preparação do ambiente
- 📥 **Instalar e abrir:** Tenha o Wireshark instalado e rodando.  
- 🌐 **Escolher a interface:** Se o backend roda em localhost, selecione a interface de loopback.  
- ▶️ **Iniciar captura:** Clique na interface para começar a capturar pacotes.

---

## 🔎 Filtro para tráfego HTTP do backend
- 🔧 **Definir porta do backend:** Ex.: 8000.  
- 📝 **Aplicar filtro HTTP:**  
 ````text
  tcp.port == 8000 && http
````
💤 Validar silêncio inicial: Se não há requisições, a tela fica vazia.

📡 Disparar requisições e observar pacotes
💻 Enviar requisição do cliente: Use Postman ou outro cliente para chamar o backend.

👀 Ver pacotes em tempo real: Observe requisições (HTTP Request) e respostas (HTTP Response).

📂 Inspecionar detalhes: Expanda camadas (TCP, HTTP) para ver headers e corpo JSON.

🛡️ O que analisar em HTTP
🔑 Credenciais e tokens: Verifique se trafegam em claro.

✅ Códigos de status: 200, 401, 403, 404.

📑 Headers críticos: Authorization, Cookie, Content-Type.

📦 Corpo da resposta: Confirme se dados sensíveis não estão expostos.

🔐 Migrando a análise para HTTPS
🌍 Trocar para HTTPS no backend: Conteúdo fica cifrado.

📝 Filtro TLS:

````text
tcp.port == 8000 && tls
````
🔒 Interpretar tráfego cifrado: Você verá handshakes TLS, mas não o conteúdo.

🪪 Checar certificados: Valide cadeia e validade.

💡 Dicas de depuração com Wireshark
📌 Perfis de filtros: Salve filtros frequentes.

⭐ Marcar pacotes relevantes: Use bookmarks para correlacionar com logs.

⏱️ Sincronizar com logs: Compare timestamps com o backend.

🔄 Isolar sessões: Siga o stream TCP para ver a conversa completa.
Isolar sessões:

Label: Fluxos TCP

Descrição: Siga o stream TCP para acompanhar a conversa completa entre cliente e servidor.
