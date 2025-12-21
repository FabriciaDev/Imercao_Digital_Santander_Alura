# DevOps: trabalhando com tráfego seguro em comunicações web
## 1. Montando o laboratório:

Ao longo do curso, vamos desenvolver atividades práticas relacionadas ao projeto de aplicação web **All Books**.  
Para aproveitar bem essa jornada, recomendamos instalar o projeto em seu computador seguindo estas etapas:

---

### 1. Instalando o Node.js

O laboratório utiliza **Node.js** para rodar a aplicação web **All Books**.  
Ele funciona como o servidor responsável por manter o backend ativo dentro da máquina virtual (VM), permitindo que o frontend em React se conecte e ofereça todas as funcionalidades do sistema.

---

## 2. Baixando o backend
Em um terminal:
```bash
git clone https://github.com/alura-cursos/api-alurabooks.git
cd api-alurabooks
npm install
npm run start-auth
````
O backend ficará disponível em http://localhost:8000

## 3. Baixando o frontend
Em outro terminal:
````bash
git clone https://github.com/alura-cursos/curso-react-alurabooks.git
cd curso-react-alurabooks
git checkout aula-5
npm install
npm start
````
O frontend ficará disponível em http://localhost:3000

## 4. Gerenciamento da VM e processos Node.js

Durante o uso do laboratório, é importante observar o ciclo de vida da máquina virtual (VM) e dos processos que estão rodando:

### Encerrando a VM
- Antes de desligar a VM, **encerre manualmente o processo Node.js** que está rodando o backend (`npm run start-auth`).
- Isso evita problemas de travamento ou corrupção de serviços (como acontece com o Zeek, que pode "quebrar" se não for encerrado corretamente).
- Para encerrar, utilize:
 ```bash
  Ctrl + C
````
no terminal onde o backend está rodando.

### Reiniciando a VM
Ao iniciar novamente a VM, os processos não são retomados automaticamente.

É necessário startar novamente o backend e o frontend:

#### Backend:

````bash
cd api-alurabooks
npm run start-auth
````

#### Frontend:

````bash
cd curso-react-alurabooks
npm start
````

> ###Boas práticas
> * Sempre finalize os processos Node.js antes de desligar a VM.
> * Após reiniciar, lembre-se de subir novamente os serviços para garantir que o laboratório esteja funcional.
> * Essa rotina garante consistência e evita falhas inesperadas durante os exercícios.
