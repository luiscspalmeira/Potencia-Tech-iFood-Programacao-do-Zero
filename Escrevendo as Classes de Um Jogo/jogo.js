class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        if (this.tipo == "mago")
            console.log(`O ${this.tipo} atacou usando magia`)
        else if (this.tipo == "guerreiro")
            console.log(`O ${this.tipo} atacou usando espada`)
        else if (this.tipo == "monge")
            console.log(`O ${this.tipo} atacou usando artes marciais`)
        else
            console.log(`O ${this.tipo} atacou usando shuriken`)  
    }
}


let tipoHeroi = new heroi("teste1", "18", "mago")
tipoHeroi.atacar()
tipoHeroi = new heroi("teste2", "19", "guerreiro")
tipoHeroi.atacar()
tipoHeroi = new heroi("teste3", "19", "monge")
tipoHeroi.atacar()
tipoHeroi = new heroi("teste4", "19", "ninja")
tipoHeroi.atacar()

