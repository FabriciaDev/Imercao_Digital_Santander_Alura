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

### Abaixo, estão algumas das suas principais opções:

-r: ordena em ordem reversa (decrescente).
-n: usa a ordenação numérica em vez de alfabética, útil para ordenar números.
-k: especifica uma coluna para ordenação (ex.: -k 2 ordena pela segunda coluna).
-u: remove linhas duplicadas na saída, deixando apenas uma instância de cada.
-t: define um delimitador de campo, útil para arquivos com colunas separadas por vírgulas ou outros caracteres (ex.: -t ,).
-o: salva a saída ordenada em um arquivo especificado, útil para sobrescrever o arquivo original sem precisar usar redirecionamento.
-f: trata letras maiúsculas e minúsculas igualmente, útil quando é necessário ignorar a distinção entre elas para uma ordenação puramente alfabética
Essas opções tornam o sort um comando flexível para ordenação personalizada e processamento de dados em textos.
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
### 📚 Para Saber Mais: Principais Usos do Comando `diff` no Linux

O comando `diff` é utilizado para comparar o conteúdo de arquivos ou diretórios, identificando as diferenças entre eles. É especialmente útil para desenvolvedores e administradores que precisam revisar mudanças entre versões ou detectar alterações em diretórios.

#### 📁 Comparação de Arquivos
```bash
diff arquivo1 arquivo2
```
Compara dois arquivos e mostra apenas as linhas diferentes. Usa `<` e `>` para indicar de qual arquivo vem cada linha.

#### 📂 Comparação Recursiva de Diretórios
```bash
diff -r dir1 dir2
```
Compara todos os arquivos dentro de dois diretórios, útil para verificar mudanças em projetos inteiros.

#### 🧩 Gerar Patch com Diferenças
```bash
diff -u arquivo1 arquivo2 > patch.diff
```
Cria um arquivo de diferenças no formato unificado, ideal para aplicar com o comando `patch`.

#### 👀 Comparação Lado a Lado
```bash
diff -y arquivo1 arquivo2
```
Mostra as diferenças visualmente, com os arquivos lado a lado.

#### 🧼 Ignorar Diferenças Específicas
```bash
diff -i arquivo1 arquivo2   # ignora maiúsculas/minúsculas
diff -w arquivo1 arquivo2   # ignora espaços em branco
diff -B arquivo1 arquivo2   # ignora linhas em branco
```

#### 📄 Forçar Comparação como Texto
```bash
diff --text arquivo1 arquivo2
```
Trata arquivos binários como texto, útil para arquivos mistos.

💡 **Exemplo prático**:
```bash
diff -u config1.conf config2.conf
```
Mostra claramente as linhas adicionadas, removidas ou modificadas — essencial para diagnosticar alterações importantes em arquivos de configuração.

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
