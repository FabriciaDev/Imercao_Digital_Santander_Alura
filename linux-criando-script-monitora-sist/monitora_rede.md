# 📡 Monitorando a rede

## 📶 O uso do ping
O comando ping é uma ferramenta essencial para verificar a conectividade de rede entre o servidor e a internet. Ele envia pacotes de teste para um endereço IP ou domínio e aguarda uma resposta, indicando se há comunicação ativa.

No contexto de monitoramento, o ping é usado para detectar rapidamente se o servidor está online e se consegue acessar serviços externos. Ao integrá-lo em scripts automatizados, é possível registrar falhas de conexão e agir preventivamente para garantir a disponibilidade do sistema.
````
ping 8.8.8.8
````
## 🧪 O uso do curl

### 🌐 Usos do curl para monitoramento e conectividade

| Comando `curl`                                              | Descrição                                                                 |
|-------------------------------------------------------------|---------------------------------------------------------------------------|
| `curl https://site.com`                                     | Faz uma requisição completa e exibe o HTML da página                      |
| `curl --head https://site.com`                              | Mostra apenas o cabeçalho da resposta HTTP                                |
| `curl -s --head https://site.com`                           | Suprime mensagens extras, exibindo só o cabeçalho                         |
| `curl -s --head https://site.com | grep "HTTP/2 200"`       | Filtra a resposta para mostrar apenas o status HTTP 200                   |
| `curl -w "%{http_code}" -s -o /dev/null https://site.com`   | Exibe apenas o código de status HTTP da resposta                          |
| `curl -I https://site.com`                                  | Alternativa ao `--head`, também mostra o cabeçalho                        |
| `curl -L https://site.com`                                  | Segue redirecionamentos até o destino final                              |
| `curl -s https://site.com`                                  | Requisição silenciosa, sem barra de progresso                             |
| `curl -v https://site.com`                                  | Mostra detalhes da conexão (modo verboso)                                 |

🛠️ Usos avançados do curl para APIs, uploads e automações

| Caso de uso                                      | Comando `curl`                                               | Descrição                                                                 |
|--------------------------------------------------|---------------------------------------------------------------|---------------------------------------------------------------------------|
| 🔐 Autenticação básica                           | `curl -u usuario:senha https://api.site.com`                  | Envia usuário e senha via HTTP Basic Auth                                |
| 🔐 Autenticação via token                        | `curl -H "Authorization: Bearer TOKEN" https://api.site.com` | Envia token de acesso em cabeçalho                                       |
| 📥 Download de arquivo                          | `curl -O https://site.com/arquivo.zip`                       | Baixa o arquivo com o nome original                                      |
| 📁 Upload de arquivo via formulário             | `curl -F "arquivo=@dados.txt" https://site.com/upload`        | Envia um arquivo usando `multipart/form-data`                            |
| 🧾 Enviar dados JSON para API                   | `curl -X POST -H "Content-Type: application/json" -d '{"chave":"valor"}' https://api.site.com` | Envia dados JSON para uma API REST                                       |
| 🔄 Requisições com outros métodos HTTP          | `curl -X PUT https://api.site.com/recurso`                    | Envia requisição com método PUT, DELETE, etc.                            |
| 📊 Medir tempo de resposta                      | `curl -w "%{time_total}" -o /dev/null -s https://site.com`    | Mostra quanto tempo levou para obter a resposta                          |
| 🧪 Testar cabeçalhos personalizados             | `curl -H "X-Test: valor" https://site.com`                    | Envia cabeçalhos customizados                                            |
| 🧵 Enviar múltiplos dados em formulário         | `curl -d "campo1=valor1&campo2=valor2" https://site.com`      | Envia dados como se fossem de um formulário HTML                         |
| 🧮 Salvar resposta em arquivo                   | `curl https://site.com -o resposta.html`                      | Salva o conteúdo da resposta em um arquivo local                         |

