# Manipular e analisar logs do sistema
No começo foi definido que seriam nescessários arquivos de log para a execução do curso. Para a criação de arquivos de log foi dado o comando:
## 🛠 Esse comkando cria os arquivos de log.
````
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=error msg=\"error: Falha ao iniciar o serviço Apache\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=warning msg=\"failed: Serviço Nginx não conseguiu se reiniciar\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=info msg=\"access denied: Tentativa de acesso ao banco de dados falhou\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=error msg=\"unauthorized: Tentativa de login SSH falhou\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=info msg=\"Sistema funcionando corretamente\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=warning msg=\"fail: Erro no driver de rede\""
````

No caso dos arquivos de log que podem ser gigantescos fica difícil com o comando cat. Com o comando less, a resposta do comando é paginada com o enter. Para navegar entre as páginas se usa as setas e para sair a tecla q

````
less /var/log/syslog
````
também dá para ver as informações do arquivo de log em tempo real com o comando tail. Cada nova atualização aparece na tela. Para sair "Ctrl + C".
````
tail -f /var/log/syslog
````
## 🧰 Principais opções do comando tails
| Opção 	| Descrição                                                                                     |
|---------------------------------------------------------------------------------------------------------|
|-f	      |Exibe novas linhas adicionadas ao arquivo em tempo real (seguimento contínuo). Ideal para logs.|
|-n       |NUM	Mostra as últimas NUM linhas do arquivo. Ex: tail -n 20 arquivo.log                       |

-c        NUM	Mostra os últimos NUM bytes do arquivo. Ex: tail -c 100 arquivo.log

-q	      Suprime o cabeçalho com o nome do arquivo quando múltiplos arquivos são usados.
-v	      Sempre mostra o cabeçalho com o nome do arquivo, mesmo se houver apenas um.

--pid=PID	Combinado com -f, encerra o tail quando o processo com o PID especificado termina.

--retry	  Tenta reabrir o arquivo se ele estiver temporariamente indisponível.

### 💡 Exemplos práticos
#### Monitorar log em tempo real:

tail -f /var/log/syslog

#### Ver as últimas 50 linhas de um arquivo:

tail -n 50 arquivo.log

#### Ver os últimos 200 bytes de um arquivo:

tail -c 200 arquivo.log
Monitorar log até que um processo termine:

bash
tail -f /var/log/syslog --pid=1234
