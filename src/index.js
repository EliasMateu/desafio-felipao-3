class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    atacar(){
       let ataque = "";

       switch (this.type) {
        case "mago":
            ataque = "magia";
            break;
        case "guerreiro":
            ataque = "espada";
            break;
        case "monge":
            ataque = "artes marciais";
            break;
        case "ninja":
            ataque = "shuriken";
            break;
        default:
            console.log("Tipo de heroi nao reconhecido");
            break;
       }
       console.log(`O ${this.type} atacou usando ${ataque}`)
    }
}

console.log("Você controla um guilda com 4 participantes e encontra um desafio na floresta negra \nNisso voce se depara com uma missão na floresta negra");
console.log("E ao adentrar logo se depara com uma embosca de globins e resolve atacar com a sua guilda, vamos ver oque cada um usou para se safar dessa");
let heroi1 = new hero("Elias", 22, "mago");
heroi1.atacar();
let heroi2 = new hero("Kirito", 22, "guerreiro");
heroi2.atacar();
let heroi3 = new hero("Bruce", 22, "monge");
heroi3.atacar();
let heroi4 = new hero("Elizabeth", 22, "ninja");
heroi1.atacar();