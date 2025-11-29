# 💡 Comandos PowerShell para Cibersegurança

Todo mundo ama falar dos comandos **Linux**… mas e o **Windows**, gente??  
Mais da metade dos incidentes que você investiga, 90% dos usuários que você atende e 99,9% dos prints que aparecem no WhatsApp são de **Microsoft Windows**.  

Então bora pro kit de sobrevivência **PowerShell Edition**!!!  
Vamos montar a bíblia azul do Windows na cibersegurança! 🚀

---

## 1️⃣ Eventos de segurança (onde tudo começa)
Pra caçar logon suspeito, alteração de grupo, falha de senha, etc:

```powershell
Get-WinEvent -LogName Security -MaxEvents 50
Get-WinEvent -FilterHashtable @{LogName="Security"; ID=4625}
Get-WinEvent -FilterHashtable @{LogName="Security"; ID=4720}
```
2️⃣ Processos estranhos
```powershell
Get-Process | Sort-Object CPU -Descending
Get-Process | Where-Object {$_.Name -like "*chrome*"}
Stop-Process -Name "suspeito" -Force
```
3️⃣ Conexões de rede
```powershell
Get-NetTCPConnection
Get-NetTCPConnection | Where-Object {$_.RemoteAddress -notlike "192.*"}
Resolve-DnsName google.com
Test-NetConnection google.com -Port 443
```
4️⃣ Firewall, o porteiro da balada
```powershell
Get-NetFirewallRule
New-NetFirewallRule -DisplayName "BLOCKMALWARE" -RemoteAddress 1.2.3.4 -Action Block
Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True
```
5️⃣ Usuários & grupos
```powershell
Get-LocalUser
Get-LocalGroupMember -Group "Administrators"
Get-ADUser -Filter * | Select Name,Enabled
Get-ADGroupMember "Domain Admins"
```
6️⃣ Serviços (quem devia estar rodando?)
```powershell
Get-Service | Sort-Object Status
Get-Service -Name "*Defender*"
Stop-Service -Name "suspeito" -Force
```
7️⃣ Windows Defender (o fiel escudeiro)
```powershell
Get-MpComputerStatus
Start-MpScan -ScanType QuickScan
Start-MpScan -ScanType FullScan
Get-MpThreat
```
8️⃣ Hash de arquivo (IOC check)
```powershell
Get-FileHash arquivo.exe -Algorithm SHA256
```
9️⃣ Ler logs sem travar o mundo
```powershell
Get-Content .\log.txt -Tail 50
Select-String -Path .\log.txt -Pattern "error"
```
🔟 Persistência (onde malware ama morar)
```powershell
Get-ItemProperty "HKLM:\...\Run"
Get-ScheduledTask
Get-ScheduledTask | Where-Object {$_.TaskName -like "*update*"}
```
1️⃣1️⃣ Exportar evidências pra CSV
```powershell
Get-NetTCPConnection | Export-Csv conexoes.csv -NoTypeInformation
Get-LocalUser | Export-Csv usuarios.csv
```
1️⃣2️⃣ Inventário rápido
```powershell
Get-ComputerInfo
Get-WmiObject Win32_ComputerSystem
Get-WmiObject Win32_LogicalDisk
```
1️⃣3️⃣ DLL hijacking / módulos carregados
DLL é um arquivo com funções usadas pelos programas do Windows. DLL Hijacking acontece quando o app carrega uma DLL falsa colocada pelo atacante, fazendo o malware rodar disfarçado dentro do processo legítimo:

```powershell
(Get-Process notepad).Modules
```
⚠️ Be Safe!!!
