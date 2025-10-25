# 🔎 Comandos de Busca e Filtros no Linux — Aula 2

---

## 📁 `find` — Localiza arquivos por padrão de nome

| Comando                          | Função                                                                 |
|----------------------------------|------------------------------------------------------------------------|
| `find caminho/ -name "*.log"`   | Busca arquivos com extensão `.log` no diretório especificado          |
| `find . -name "*.log"`          | Busca arquivos `.log` no diretório atual e subdiretórios              |

💡 **Dica de script**:
```bash
find ../logs -name "*.log"
```

---

## 🔗 Pipe `|` — Encadeia comandos

| Comando                                | Função                                                                 |
|----------------------------------------|------------------------------------------------------------------------|
| `find . -name "*.log" \| while ...`   | Encadeia a saída do `find` para ser processada por um laço `while`    |

---

## 🔁 `while` com `read` e `IFS` — Itera sobre arquivos

| Comando                                | Função                                                                 |
|----------------------------------------|------------------------------------------------------------------------|
| `while IFS= read -r linha; do ...`    | Lê cada linha preservando espaços e caracteres especiais               |

💡 **Dica de script**:
```bash
while IFS= read -r arquivo; do
  echo "$arquivo"
done
```

---

## 🔍 `grep` — Filtra linhas por padrão

| Comando                          | Função                                                                 |
|----------------------------------|------------------------------------------------------------------------|
| `grep "ERROR" arquivo.log`      | Exibe apenas as linhas que contêm o texto "ERROR"                     |
| `grep "SENSITIVE" arquivo.log`  | Filtra dados sensíveis para tratamento posterior                      |

---

## 📤 Redirecionamento `>` e `>>` — Salva saídas em arquivos

| Operador | Função                                                                 |
|----------|------------------------------------------------------------------------|
| `>`      | Redireciona a saída, **sobrescrevendo** o arquivo destino              |
| `>>`     | Redireciona a saída, **acrescentando** ao final do arquivo destino     |

💡 **Exemplo**:
```bash
grep "ERROR" arquivo.log > erros.log
grep "SENSITIVE" arquivo.log >> erros.log
```

---

## ✂️ `sed` — Substitui texto com expressões regulares

| Comando                                              | Função                                                                 |
|------------------------------------------------------|------------------------------------------------------------------------|
| `sed -i 's/SENHA.*/SENHA REDACTED/g' arquivo.log`    | Substitui dados sensíveis diretamente no arquivo                      |

---

## 🛠️ Exemplo de Script Integrado

```bash
find ../logs -name "*.log" | while IFS= read -r arquivo; do
  grep "ERROR" "$arquivo" > "${arquivo}.filtrado"
  grep "SENSITIVE" "$arquivo" >> "${arquivo}.filtrado"
  sed -i 's/SENHA.*/SENHA REDACTED/g' "${arquivo}.filtrado"
done
```