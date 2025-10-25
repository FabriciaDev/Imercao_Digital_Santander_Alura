# 🧠 Cheat Sheet: Manipulação de Arquivos de Log no Linux

## 📊 `sort` — Ordena linhas de um arquivo

| Comando                          | Função                                                                 |
|----------------------------------|------------------------------------------------------------------------|
| `sort nome_do_arquivo`          | Ordena as linhas em ordem crescente (padrão)                          |
| `sort -r nome_do_arquivo`       | Ordena em ordem decrescente                                           |
| `sort nome_do_arquivo -o saída` | Salva a ordenação diretamente em outro arquivo                        |
| `sort entrada -o entrada`       | Sobrescreve o arquivo original com a versão ordenada                  |

> 💡 Dica de script:
> `sort "${arquivo}.filtrado" -o "${arquivo}.filtrado"`

---

## 🧹 `uniq` — Remove linhas duplicadas adjacentes

| Comando                                 | Função                                                                 |
|-----------------------------------------|------------------------------------------------------------------------|
| `uniq nome_do_arquivo`                 | Exibe o conteúdo sem duplicatas adjacentes                            |
| `uniq nome_do_arquivo > novo_arquivo`  | Salva o resultado sem duplicatas em outro arquivo                     |

> 💡 Dica de script:
> `uniq "${arquivo}.filtrado" > "${arquivo}.unico"`

---

## 🔍 `diff` — Compara dois arquivos linha a linha

| Comando                        | Função                                                                 |
|--------------------------------|------------------------------------------------------------------------|
| `diff arquivo1 arquivo2`      | Mostra as diferenças entre os arquivos                                |

### 🔠 Interpretação da saída:
- `a`: Linhas **adicionadas** no segundo arquivo
- `d`: Linhas **deletadas** do primeiro arquivo
- `c`: Linhas **alteradas** entre os arquivos

> 📌 Exemplo:
> `diff logs-original.log logs-processado.log`

---

## 📁 Redirecionamento de saída

| Operador | Função                                                                 |
|----------|------------------------------------------------------------------------|
| `>`      | Redireciona a saída, **sobrescrevendo** o arquivo destino              |
| `>>`     | Redireciona a saída, **acrescentando** ao final do arquivo destino     |

---

## 🛠️ Mini Script para Processamento de Logs

```bash
#!/bin/bash
cd myapp/logs
for arquivo in *.log; do
  grep "ERROR" "$arquivo" > "${arquivo}.filtrado"
  sed -i 's/SENHA.*/SENHA REDACTED/g' "${arquivo}.filtrado"
  sort "${arquivo}.filtrado" -o "${arquivo}.filtrado"
  uniq "${arquivo}.filtrado" > "${arquivo}.unico"
  diff "$arquivo" "${arquivo}.unico" > "${arquivo}.diff"
done
