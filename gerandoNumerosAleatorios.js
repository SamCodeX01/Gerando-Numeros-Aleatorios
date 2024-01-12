function gerarNumerosAleatorios(){
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);

    var numeroAleatorio = Math.floor( Math.random() * (max - min + 1)) + min;

        if(isNaN(min) || isNaN(max)){
            alert("Digite um Número Válido!")
        }
            document.getElementById("resultado").textContent = numeroAleatorio;
}

function limparCampos(){
    document.getElementById("min").value = '';
    document.getElementById("max").value = '';
    document.getElementById("resultado").textContent = '';
    
}

/*Exemplo dessa expressão acima: Math.floor( Math.random() * (max - min + 1)) + min;

- Math.random(): Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusive).
- (max - min + 1): Calcula a amplitude do intervalo adicionando 1 ao resultado da diferença entre max e min. Isso garante que o intervalo inclua ambos os extremos.
- Math.floor(...): Arredonda para baixo o resultado da multiplicação, tornando-o um número inteiro.
- Se min for 5 e max for 10, a amplitude do intervalo seria 10 - 5 + 1 = 6. Isso significa que o intervalo gerado seria [0, 1, 2, 3, 4, 5].
- Agora, ao adicionar o valor mínimo (min), o intervalo é ajustado para começar a partir de 5, resultando no intervalo final [5, 6, 7, 8, 9, 10].
- Essa adição de min é essencial para garantir que o número aleatório gerado esteja dentro do intervalo desejado [min, max].






*/