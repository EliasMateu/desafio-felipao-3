class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    atacar() {
        //Criação de variaveis
        let ataque = "";
        let tipoAtaque = "";
        let dano = ""

        //Verefica qual o tipo de heroi é e retorna os valores da variaveis
        switch (this.type) {
            case "mago":
                ataque = "magia";
                tipoAtaque = "bola de Fogo";
                dano = 40;
                break;
            case "guerreiro":
                ataque = "espada";
                tipoAtaque = "Golpe giratorio";
                dano = 35;
                break;
            case "monge":
                ataque = "artes marciais";
                tipoAtaque = "Chute com o pé";
                dano = 25;
                break;
            case "ninja":
                ataque = "shuriken";
                tipoAtaque = "Shuriken explosiva";
                dano = 30;
                break;
            default:
                //Caso não escolha nenhum heroi dentro dos 4 estabelecidos
                console.log("Tipo de heroi nao reconhecido");
                break;
        }
        //Mensagem que ira ocorrer após a verificação do switch
        console.log(`O ${this.type} atacou usando ${ataque} com o a tecnica ${tipoAtaque} e causou de dano ${dano}`);
    }
}
//Pequena historia para introduzir o usuario ao que é proposto
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