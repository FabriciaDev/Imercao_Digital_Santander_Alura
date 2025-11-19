# ⚙️ Monitorando Serviços no Linux

O `systemd` é o sistema de inicialização e gerenciamento de serviços mais utilizado nas distribuições modernas do Linux. Ele permite controlar serviços, timers e unidades de forma centralizada, garantindo que processos essenciais sejam iniciados, monitorados e reiniciados automaticamente quando necessário.

O systemd é responsável por gerenciar serviços e processos no Linux.

O comando systemctl permite iniciar, parar, reiniciar e verificar o status de serviços.

É possível configurar serviços para iniciar automaticamente com o sistema.

O systemd também suporta timers e unidades customizadas, ampliando o controle sobre processos.

## 📌 Uso básico do `systemctl`

### ▶️ Iniciar um serviço
```
sudo systemctl start nome-do-servico
```
Inicia o serviço imediatamente, sem alterar sua configuração de inicialização.

### ⏹️ Parar um serviço
````
sudo systemctl stop nome-do-servico
````
Interrompe o serviço em execução.

### 🔄 Reiniciar um serviço
````
sudo systemctl restart nome-do-servico
````
Para e inicia novamente o serviço, útil após alterações de configuração.

### ✅ Verificar status de um serviço
````
sudo systemctl status nome-do-servico
````
Mostra se o serviço está ativo, inativo ou falhou, além de logs recentes.

### 🔒 Habilitar serviço na inicialização
````
sudo systemctl enable nome-do-servico
````
Configura o serviço para iniciar automaticamente junto com o sistema.

### 🚫 Desabilitar serviço na inicialização
````
sudo systemctl disable nome-do-servico
````
Remove o serviço da inicialização automática.

### 📂 Outros casos de uso do systemctl

systemctl list-units --type=service → lista todos os serviços ativos.

systemctl is-enabled nome-do-servico → verifica se o serviço está habilitado na inicialização.

systemctl daemon-reload → recarrega as configurações do systemd após alterações em arquivos de unidade.

systemctl list-timers → mostra timers configurados no systemd.

journalctl -u nome-do-servico → exibe os logs de um serviço específico.

## ⏱️ Usando Timers no systemd

Os **timers** do systemd permitem agendar a execução de serviços em intervalos regulares ou em horários específicos, substituindo (ou complementando) o uso do `cron`. Eles são úteis para automatizar scripts de monitoramento, backups e outras tarefas recorrentes.

### 📌 Estrutura básica de um arquivo de timer

Um arquivo de timer é criado em `/etc/systemd/system/` com extensão `.timer`.  
Exemplo: `monitoramento-sistema.timer`

```ini
[Unit]
Description=Timer para executar o script de monitoramento

[Timer]
OnCalendar=*:0/15
Persistent=true

[Install]
WantedBy=timers.target
````
#### 🧾 Explicando os parâmetros
OnCalendar=:0/15* Executa o serviço a cada 15 minutos.

* → qualquer hora.

0/15 → minutos múltiplos de 15 (0, 15, 30, 45).

Persistent=true Garante que, se o sistema estiver desligado durante o horário agendado, o serviço será executado assim que o sistema for ligado novamente (compensa execuções perdidas).

WantedBy=timers.target Define que o timer será iniciado junto com o alvo padrão de timers do systemd.

### ▶️ Comandos úteis para timers
````
sudo systemctl daemon-reload        # Recarrega as configurações do systemd
sudo systemctl enable monitoramento-sistema.timer   # Habilita o timer na inicialização
sudo systemctl start monitoramento-sistema.timer    # Inicia o timer imediatamente
sudo systemctl status monitoramento-sistema.timer   # Verifica se o timer está ativo
sudo systemctl list-timers                         # Lista todos os timers ativos
`````
### 📂 Outros casos de uso de timers
OnCalendar=hourly → executa a cada hora.

OnCalendar=daily → executa uma vez por dia.

OnCalendar=weekly → executa uma vez por semana.

OnCalendar=Mon *-*-* 08:00:00 → executa toda segunda-feira às 8h.

OnBootSec=10min → executa 10 minutos após a inicialização do sistema.

OnUnitActiveSec=30min → executa 30 minutos após a última execução.

👉 Com timers, garantimos que o script de monitoramento rode automaticamente e de forma confiável, sem depender de intervenção manual.

## 📜 Verificando logs com `journalctl`

O `journalctl` é o comando utilizado para consultar os registros de log do `systemd`. Ele permite acompanhar a execução de serviços, identificar erros e confirmar se os timers foram disparados corretamente.

### 📌 Consultar logs de um serviço específico

```bash
sudo journalctl -u monitoramento-sistema.service
````
Exibe o histórico de execução do serviço monitoramento-sistema.service.

Mostra início, término e possíveis mensagens de erro.

Para sair da visualização, pressione Q.

🔎 Consultar logs de um timer
````bash
sudo journalctl -u monitoramento-sistema.timer
````
Exibe os registros relacionados ao timer.

Útil para confirmar se o agendamento foi disparado nos intervalos corretos.

###  🧮 Limitar a quantidade de registros
 ````
sudo journalctl -u monitoramento-sistema.service -n 20
````
Mostra apenas os 20 últimos registros do serviço.

Ideal para verificar rapidamente as execuções mais recentes.

### 📂 Outros casos de uso do journalctl
journalctl -f → acompanha os logs em tempo real (similar ao tail -f).

journalctl --since "1 hour ago" → mostra apenas os registros da última hora.

journalctl --since "2025-11-18 08:00:00" --until "2025-11-18 12:00:00" → filtra por intervalo de tempo.

journalctl -p err → mostra apenas mensagens de erro.

👉 Com o journalctl, garantimos que o monitoramento seja confiável, pois conseguimos validar se os serviços e timers estão funcionando corretamente e diagnosticar problemas rapidamente.
