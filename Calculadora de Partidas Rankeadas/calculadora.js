function calculadora(qtdVitoria, qtdDerrota){

    if (qtdVitoria <= 10) 
        XP = "Ferro"
    else if (qtdVitoria >= 11 && qtdVitoria <= 20)
        XP = "Bronze"
    else if (qtdVitoria >= 21 && qtdVitoria <= 50)
        XP = "Prata"
    else if (qtdVitoria >= 51 && qtdVitoria <= 80)
        XP = "Ouro"
    else if (qtdVitoria >= 81 && qtdVitoria <= 90)
        XP = "Diamante"
    else if (qtdVitoria >= 91 && qtdVitoria <= 100)
        XP = "Lendário"
    else if (qtdVitoria >= 101)
        XP = "Imortal"
   
    console.log("O Herói tem de saldo de " + (qtdVitoria-qtdDerrota) + " está no nível de " + XP)
}

calculadora(70, 10)