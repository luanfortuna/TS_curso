
// Existem quatro modificadores de acesso que podemos atribuir aos atributos como:
// public, protected, private, readonly (apenas nos atributos)

/*
  >> Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da 
  classe em que foram criados e por meio das classes que foram filhas (que extende a classe pai).

  >> Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados, 
  Ou seja ele nao pode ser acessado ou modificado fora da classe em que foi criado.

  >> E o famoso readonly: (apenas para os atributos) Podemos apenas ler e ver esse atributo porem
  nao podemos alterar ele.
*/

class Usuario{
  public nome: string;
  public email: string;

  constructor(nome: string, email: string){
    this.nome = nome;
    this.email = email;
  }

}


class Admin extends Usuario{
  public cargo: string;
  public nivel: number;

  constructor(nome: string, email: string, cargo: string, nivel: number){
    // Chamando o cosntrutor da classe pai.
    super(nome, email);
    
    this.cargo = cargo;
    this.nivel = nivel;
  }

  public mudarCargo(): void {
    console.log("ALTERANDO CARGO");
  }

}

const usuario1 = new Admin("Matheus", "matheus@teste.com", "Programador", 2);

usuario1.cargo = "Designer";

usuario1.mudarCargo();

console.log(usuario1);
