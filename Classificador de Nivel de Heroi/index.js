let nome = "luis"
let qtdExperiencia = 6500

if (qtdExperiencia <= 1000) 
    XP = "Ferro"
else if (qtdExperiencia >= 1001 && qtdExperiencia <= 2000)
    XP = "Bronze"
else if (qtdExperiencia >= 2001 && qtdExperiencia <= 5000)
    XP = "Prata"
else if (qtdExperiencia >= 6001 && qtdExperiencia <= 7000)
    XP = "Ouro"
else if (qtdExperiencia >= 7001 && qtdExperiencia <= 8000)
    XP = "Platina"
else if (qtdExperiencia >= 8001 && qtdExperiencia <= 9000)
    XP = "Ascendente"
else if (qtdExperiencia >= 9001 && qtdExperiencia <= 10000)
    XP = "Imortal"
else if (qtdExperiencia >= 10001)
    XP = "Radiante"

console.log("O Herói de nome " + nome + " está no nível de " + XP)