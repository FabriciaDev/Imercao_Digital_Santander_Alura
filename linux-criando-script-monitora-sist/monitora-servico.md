# ⚙️ Monitorando Serviços no Linux

O `systemd` é o sistema de inicialização e gerenciamento de serviços mais utilizado nas distribuições modernas do Linux. Ele permite controlar serviços, timers e unidades de forma centralizada, garantindo que processos essenciais sejam iniciados, monitorados e reiniciados automaticamente quando necessário.

## 📌 Uso básico do `systemctl`

### ▶️ Iniciar um serviço
```
sudo systemctl start nome-do-servico
```
Inicia o serviço imediatamente, sem alterar sua configuração de inicialização.

⏹️ Parar um serviço
bash
sudo systemctl stop nome-do-servico
Interrompe o serviço em execução.

🔄 Reiniciar um serviço
bash
sudo systemctl restart nome-do-servico
Para e inicia novamente o serviço, útil após alterações de configuração.

✅ Verificar status de um serviço
bash
sudo systemctl status nome-do-servico
Mostra se o serviço está ativo, inativo ou falhou, além de logs recentes.

🔒 Habilitar serviço na inicialização
bash
sudo systemctl enable nome-do-servico
Configura o serviço para iniciar automaticamente junto com o sistema.

🚫 Desabilitar serviço na inicialização
bash
sudo systemctl disable nome-do-servico
Remove o serviço da inicialização automática.

📂 Outros casos de uso do systemctl
systemctl list-units --type=service → lista todos os serviços ativos.

systemctl is-enabled nome-do-servico → verifica se o serviço está habilitado na inicialização.

systemctl daemon-reload → recarrega as configurações do systemd após alterações em arquivos de unidade.

systemctl list-timers → mostra timers configurados no systemd.

journalctl -u nome-do-servico → exibe os logs de um serviço específico.

🧾 O que aprendemos
O systemd é responsável por gerenciar serviços e processos no Linux.

O comando systemctl permite iniciar, parar, reiniciar e verificar o status de serviços.

É possível configurar serviços para iniciar automaticamente com o sistema.

O systemd também suporta timers e unidades customizadas, ampliando o controle sobre processos.

Código
