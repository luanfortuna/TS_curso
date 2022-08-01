
// Caso de uso de um JOGO

class Jogo {
  private servidor: string;
  private id: string = "1234";

  constructor(servidor: string) {
    this.servidor = servidor;
  }

  //Metodo GET = Para pegar o valor ao inves de acessar diretamente a propriedade
  get getServidorIP() {
    console.log("== METODO GET ==")
    return this.servidor;
  }

  //Metodo SET = Passar / alterar algum atributo.
  set setServidorIP(novoIp: string) {
    if (this.servidor === novoIp) {
      throw new Error("O novo IP deve ser diferente do IP antigo.")
    }

    this.servidor = novoIp;
  }

}




