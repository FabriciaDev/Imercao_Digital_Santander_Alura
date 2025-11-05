# 📁 Arquivos de Log do Linux e suas Funções

| Arquivo de Log           | Descrição                                                                                          |
|--------------------------|----------------------------------------------------------------------------------------------------|
| /var/log/syslog          | Registra eventos gerais do sistema, incluindo mensagens de serviços, kernel e processos.          |
| /var/log/auth.log        | Focado em autenticação e segurança. Registra logins, sudo, falhas de autenticação e acessos SSH.  |
| /var/log/kern.log        | Contém mensagens do kernel, úteis para diagnosticar problemas com hardware e drivers.             |
| /var/log/dmesg           | Armazena mensagens do kernel durante a inicialização. Ajuda a verificar o carregamento de módulos.|
| /var/log/boot.log        | Detalha os eventos do processo de boot, incluindo execução de serviços e scripts de inicialização.|
| /var/log/faillog         | Registra tentativas de login falhas. Útil para detectar ataques de força bruta.                   |
| /var/log/lastlog         | Mostra o último login de cada usuário. Pode ser consultado com o comando `lastlog`.               |
| /var/log/apt/            | Pasta com logs do gerenciador de pacotes APT. Inclui `history.log` e `term.log` para rastrear ações.|
| /var/log/mail.log        | Registra atividades de envio e recebimento de e-mails em servidores de correio.                   |
| /var/log/mail.err        | Registra erros relacionados ao serviço de e-mail.                                                  |
| /var/log/messages        | Similar ao syslog, presente em algumas distros. Registra mensagens gerais do sistema.             |
| /var/log/cron            | Registra execuções de tarefas agendadas com `cron`. Verifica se scripts estão rodando corretamente.|
| /var/log/utmp            | Arquivo binário que rastreia sessões de login ativas.                                              |
| /var/log/wtmp            | Registra logins e logouts de usuários. Pode ser lido com o comando `last`.                        |
| /var/log/btmp            | Armazena tentativas de login inválidas. Pode ser lido com o comando `lastb`.                      |
