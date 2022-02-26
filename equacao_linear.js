import { parse } from "algebra.js";

class EquacaoLinear {
  equacoes = [];

  constructor(equacoes) {
    this.equacoes = equacoes;
  }

  /**
   * Resolve a equação linear a partir da incógnita
   **/
  resolver(equacao, incognita) {
    const eq = new parse(equacao);
    return eq.solveFor(incognita).toString();
  }

  /**
   * Obter a incógnita da equação
   **/
  obter_incognita(equacao) {
    const [incognita] = equacao.match(/[a-zA-Z]/);
    return incognita;
  }

  /**
   * Substitui as incógnitas da equação pelo valor encontrado
   **/
  substituir_incognitas(incognita, valor) {
    return this.equacoes.map((equacao) => {
      return equacao.replace(incognita, ` * (${valor})`);
    });
  }

  /**
   * Realiza a substituição retroativa a partir da ultima
   * equação da matriz
   **/
  substituicao_retroativa() {
    const resultados = [];

    for (let i = this.equacoes.length - 1; i >= 0; i--) {
      const incognita = this.obter_incognita(this.equacoes[i]);
      const valor = this.resolver(this.equacoes[i], incognita);

      const equacoes_substituidas = this.substituir_incognitas(
        incognita,
        valor
      );

      resultados.push({
        equacao: this.equacoes[i],
        incognita,
        valor,
      });

      this.equacoes = equacoes_substituidas;
    }

    return resultados;
  }
}

export { EquacaoLinear };
