# Amigo Secreto

Aplicação web simples para sortear amigo secreto: você adiciona os nomes dos participantes, clica em sortear e vê quem tirou quem.

## Funcionalidades

- Adição de participantes por meio de um campo de texto
- Validação do nome, com mensagem de erro quando o campo está vazio
- Bloqueio de nomes repetidos
- Exibição da lista de amigos incluídos na tela
- Sorteio com no mínimo três participantes
- Sorteio em círculo: cada pessoa tira a próxima da lista embaralhada, então ninguém tira a si mesmo
- Botão para reiniciar e começar um novo sorteio

## Tecnologias

- HTML
- CSS
- JavaScript

## Como usar

1. Clone o repositório:
```bash
   git clone https://github.com/marlongabrito/amigo-secreto.git
```
2. Abra o arquivo `index.html` no navegador.
3. Digite o nome de um amigo no campo **Nome do amigo**.
4. Clique em **Adicionar** para incluir o nome na lista. Repita para cada participante.
5. Clique em **Sortear** para ver o resultado.
6. Clique em **Reiniciar** para limpar a lista e o sorteio.

## Exemplo

| Amigos incluídos    | Resultado do sorteio |
|---------------------|----------------------|
| Ana, Bia, Caio      | Caio --> Ana         |
|                     | Ana --> Bia          |
|                     | Bia --> Caio         |

O resultado muda a cada clique em **Sortear**, porque a ordem dos nomes é embaralhada de novo.

## Estrutura do projeto

```
amigo-secreto/
├── index.html
├── style.css
├── js/
│   └── app.js
└── assets/
    └── imagem-presente.png
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Marlon Brito: [@marlongabrito](https://github.com/marlongabrito)
