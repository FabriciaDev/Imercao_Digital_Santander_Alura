# Manipular e analisar logs do sistema
No começo foi definido que seriam nescessários arquivos de log para a execução do curso. Para a criação de arquivos de log foi dado o comando:
````
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=error msg=\"error: Falha ao iniciar o serviço Apache\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=warning msg=\"failed: Serviço Nginx não conseguiu se reiniciar\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=info msg=\"access denied: Tentativa de acesso ao banco de dados falhou\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=error msg=\"unauthorized: Tentativa de login SSH falhou\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=info msg=\"Sistema funcionando corretamente\""
logger -p local0.info "time=\"$(date +'%Y-%m-%dT%H:%M:%S')\" level=warning msg=\"fail: Erro no driver de rede\""
````
Esse comkando cria os arquivos de log.
