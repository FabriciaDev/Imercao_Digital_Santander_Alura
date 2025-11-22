# 🤖Automação de Tarefas

## ✨ Introdução: Porque automatizar?
Você já parou pra pensar em quantas vezes repete as mesmas tarefas no servidor?  
Fazer backup, mover arquivos, compactar, descompactar… tudo isso pode virar uma rotina cansativa se feito manualmente.  

Automatizar é como ter um **assistente invisível** que faz o trabalho por você enquanto você foca em coisas mais importantes.  
Além de economizar tempo, você evita erros humanos e garante que tudo seja feito sempre do mesmo jeito.  
Ou seja: menos dor de cabeça e mais eficiência 🚀.

## ## 📝 Exemplo prático: Compactar ou Descompactar arquivos

```bash
#!/bin/bash
# Script que permite escolher entre compactar ou descompactar arquivos

read -p "Entre com a operação desejada: 'compactar' ou 'descompactar' " operacao

case "$operacao" in
  "compactar")
    read -p "Nome do arquivo final (.tar.gz): " arquivo_saida
    read -p "Lista de arquivos separados por espaço: " arquivos
    tar -czf "$arquivo_saida" $arquivos
    echo "✅ Compactados com sucesso em $arquivo_saida"
    ;;
  
  "descompactar")
    read -p "Nome do arquivo a descompactar (.tar.gz): " arquivo
    read -p "Diretório de destino: " diretorio
    tar -xzf "$arquivo" -C "$diretorio"
    echo "📂 Descompactado com sucesso em $diretorio"
    ;;
  
  *)
    echo "❌ Operação inválida!"
    echo "Selecione 'compactar' ou 'descompactar'."
    exit 1
    ;;
esac
````
