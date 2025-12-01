# 👁️‍🗨️ NMAP para #Cibersegurança

Se vc trabalha com segurança e nunca rodou um nmap -sV, será q vc realmente viveu a vida #Blue #Team?

O Nmap é o amigo curioso q bate de porta em porta pra saber quem tá vivo, quem tá vulnerável e quem deixou a porta 3389 aberta pro universo. Às vezes ele ainda encontra um Tomcat 7 rodando só pq “funciona até hoje” kkkkkk

## >>> Pra q serve?
 Pra mapear hosts, achar serviços suspeitos, descobrir versões e revelar aquela aplicação esquecida no servidor. É quase uma terapia familiar da rede.

Segurança começa com visibilidade. #Nmap é um scanner de rede (opera na camada de #rede e #transporte) que te dá inventário, baseline, exposição, portas suspeitas e munição pra provar pq aquele servidor precisa MUITO de atenção!!!

## >>>Comandos q vc TEM q saber

➡️  Descobrir hosts ativos
````
 nmap - sn ip
 Ping scan. Pergunta “tá aí?” pra cada IP. Perfeito pra inventário rápido.
````

➡️ Scan básico de portas
````
 nmap ip
 Dá um panorama geral do host. Checkup simples.
````
➡️ Versões dos serviços
````
 nmap - sV ip
````
 Modo fofoqueiro. Diz qual versão está rodando e denuncia Apache pré-histórico :p 

➡️ Detecção de SO
````
nmap -O ip
````
Analisa a pilha TCP/IP pra descobrir se é Windows, Linux ou um servidor Frankenstein.

➡️ Scripts poderosos (NSE)
````
nmap --script vuln ip
````
Investiga vulnerabilidades, misconfigs e protocolos fracos. Momento CSI.

➡️ Scan agressivo
````
nmap -A ip
````
Tudo junto: versões, SO, traceroute e scripts. Barulhento, mas completo.

➡️ Portas específicas
````
nmap -p 22,80,443 ip
````
Foco no q importa. Rápido e direto.

➡️ Scan de portas comuns
````
nmap -F ip
````
Só as portas mais frequentes. Ideal pra pressa.

➡️ Fragmentação (evasão)
````
nmap -f ip
````
Fragmenta pacotes pra tentar confundir firewalls antigos.

➡️ Decoy scan
````
nmap -D RND:10 ip
````
Cria scanners falsos pra confundir logs. Nível ninja hahaha

➡️ Idle Scan
````
 nmap -sI zombie_host ip
````
Vc escaneia usando um “zumbi”. O alvo acha q é outra máquina.
➡️ UDP Scan
````
 nmap -sU ip
```
 Mais lento, mas encontra DNS, NTP, SNMP e outras portas q passam batido.

➡️ Scan de todas as portas (1–65535)
````
nmap -p- ip
````

Acha tudo, inclusive coisas q vc preferia não ver.

_____
## >>Rodar Nmap é igual arrumar o quarto. Vc acha coisas q nem sabia q existiam e outras q causam pânico instantâneo. E porta 21 aberta em produção é basicamente susto garantido 🤣 
