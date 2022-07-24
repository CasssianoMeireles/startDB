class Forca {
    constructor(palavra) {
      this.vidas = 6
      this.letrasChutadas = []
      this.palavra = palavra.split("")
      this.palavraEscondida = this.palavra.map((letra) => (letra = "_"))
      this.state = "aguardando chute"
    }

  chutar(letra) {

    if (!letra || letra.length > 1 || this.letrasChutadas.includes(letra)) {
      return
    }

    if (!this.palavra.includes(letra) && !this.letrasChutadas.includes(letra)) {
      this.vidas--
    }

    if (this.palavra.includes(letra)) {
      for (let i = 0; i < this.palavra.length; i++) {
        if (this.palavra[i] === letra) {
          this.palavraEscondida[i] = letra
        }
      }
    }

    this.letrasChutadas.push(letra)
  }

  buscarEstado() {

    if (this.vidas === 0) {
      this.state = "perdeu"
      return this.state
    }

    else if (this.vidas > 0 && !this.palavraEscondida.includes("_")){
      this.state = "ganhou"
      return this.state
    }

    return this.state
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas,
          vidas: this.vidas, 
          palavra: this.palavraEscondida
      } 
  }
}

module.exports = Forca;
