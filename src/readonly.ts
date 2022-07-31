// readonly não permite a reatribuição e implica uma propriedade não gravável/uma propriedade acessível apenas via get 
//Isso não significa que os não-primitivos sejam imutáveis.


class Pessoa {
  readonly id: string = "123";
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  mostraId() {
    console.log(`ID DO USUARIO: `, this.id);
  }

}

const ana = new Pessoa("Ana Carol", 29);

console.log("ID DA ANA: ", ana.id)

// console.log(ana);