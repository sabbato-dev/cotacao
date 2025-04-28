function main() {
    let reais, cotação, resultado;
    let opcao;

    opcao = prompt('Quer converter Dólar ou Euro?');
    if (opcao == "Dólar" || opcao == "dólar" || opcao == "Dolar" || opcao == "dolar") {

        reais = (prompt('qual o valor em Reais (BRL)?'));

        cotação = (prompt('Qual o valor do dólar (USD) hoje?'));
        resultado = reais / cotação;
        alert("Hoje voce tem " + resultado + " Dólares (USD)");
    } else {
        if (opcao == "euro" || opcao == "Euro") {
            reais = (prompt('qual o valor em Reais (BRL)?'));

            cotação = (prompt('Qual o valor do Euro (EUR) hoje?'));
            resultado = reais / cotação;
            alert("Hoje voce tem " + resultado + " Euros (EUR)");
        } else {
            alert("Não Válido");
        }
    }
}


main()