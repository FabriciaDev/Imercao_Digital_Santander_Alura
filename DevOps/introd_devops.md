# 🐧 Linux e DevOps – Aula 1

## 📌 Introdução
Nesta primeira aula, exploramos a importância do Linux no contexto DevOps e entendemos como o sistema operacional é estruturado.  
O Linux é um projeto **open source**, licenciado sob GPL, e seu núcleo é o **kernel**, responsável por gerenciar recursos e permitir que diferentes distribuições sejam criadas.

---

## 🔎 Conceitos principais

- **Kernel** → núcleo do sistema operacional, responsável por controlar hardware e processos.  
- **Distribuições (distros)** → versões do Linux adaptadas para diferentes usos (ex.: Ubuntu, CentOS, Debian).  
- **Open Source** → código aberto, permitindo colaboração e evolução contínua.  
- **Infraestrutura da internet** → grande parte dos servidores e dispositivos de rede utilizam Linux.  

---

## 🌐 Acesso remoto via SSH

O **SSH (Secure Shell)** é um protocolo que permite acessar e administrar máquinas remotamente.  
Isso é essencial em DevOps, já que muitas vezes o servidor não está fisicamente acessível.

### ▶️ Exemplo de uso
```bash
ssh usuario@192.168.40.36
````
ssh → comando para iniciar a conexão.

usuario → nome de usuário configurado na máquina remota.

192.168.40.36 → endereço IP da máquina alvo.

Após inserir a senha, você terá acesso ao terminal da máquina remota.

> ⚠️ **Alerta: Escalabilidade de Recursos**
>
> A escalabilidade de recursos é uma característica essencial para um servidor que precisa lidar com grandes volumes de dados.  
> Ela permite que o sistema utilize mais recursos em função do aumento na demanda, garantindo um desempenho consistente.


