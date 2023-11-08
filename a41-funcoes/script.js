function livro(nome, ano, autor) {
    const nomeMaiusculo = nome.toUpperCase();
    const anos = (2023 - ano);
    const frase = nome + ' por ' + autor;
    const valores = {
        nome: nomeMaiusculo,
        anos: anos,
        frase: frase
    }
    return valores
}

const retorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(retorno.frase)
