## Título: Removendo Duplicatas em Arquivos de Log no Linux

Objetivo: Eliminar linhas duplicadas em arquivos de log para facilitar a análise.

Comando: uniq

Função: Remove linhas duplicadas adjacentes de um arquivo.

Pré-requisito: O arquivo deve estar ordenado para que o uniq funcione corretamente.

Sintaxe:

bash
Copiar código
uniq arquivo_com_duplicatas
Exemplo:

bash
Copiar código
uniq myapp-backend.log.filtrado
Redirecionamento da Saída:

O uniq exibe o resultado no terminal, mas não modifica o arquivo original.

Para salvar o resultado em um novo arquivo, use o operador >:

bash
Copiar código
uniq myapp-backend.log.filtrado > logs-sem-duplicatas
Script de Monitoramento:

Localização: Adicionar o comando uniq ao script monitoramento-logs.sh.

Implementação:

bash
Copiar código
sort "${arquivo}.filtrado" -o "${arquivo}.filtrado"
uniq "${arquivo}.filtrado" > "${arquivo}.unico"
Explicação:

Após ordenar o arquivo filtrado com sort, o uniq remove as duplicatas e salva o resultado em um novo arquivo com a extensão .unico.
Verificação:

Listar Arquivos: Use o comando ls para verificar a criação dos arquivos .unico.

Visualizar Conteúdo: Use o comando cat para confirmar que os arquivos .unico contêm os logs ordenados e sem duplicatas.

bash
Copiar código
cat myapp-backend.log.unico
Observações:

O uniq remove apenas linhas que são exatamente iguais e adjacentes.
Certifique-se de que o arquivo esteja ordenado antes de usar o uniq para obter o resultado correto.