import { Matriz } from "./matriz.js";

class Gaussiana extends Matriz {
  constructor(i, j) {
    super(i, j);
  }

  /**
   * Obter equações lineares a partir da matriz
   **/
  obter_quacoes_lineares() {
    const funcao_linear = Array(this.tamanho_linhas()).fill("");

    for (let i = 0; i < this.tamanho_linhas(); i++) {
      let letra = "a";

      for (let j = 0; j < this.tamanho_linhas(); j++) {
        if (j > 0) {
          letra = String.fromCharCode(letra.charCodeAt(0) + 1);
        }

        const valor = this.matriz[i][j];

        if (valor !== 0) {
          funcao_linear[i] +=
            (valor > 0 && funcao_linear[i].length > 0 ? "+ " : "") +
            `${valor}${letra} `;
        }
      }

      funcao_linear[i] += "= " + this.matriz[i][this.tamanho_linhas()];
    }

    return funcao_linear;
  }

  /**
   * Método de eliminação de Gaussiana
   * seguindo o tutorial: https://cn.ect.ufrn.br/index.php?r=conteudo%2Fsislin-gauss
   **/
  eliminacao_gaussiana() {
    for (let i = 0; i < this.tamanho_linhas(); i++) {
      let pivo = 0;
      let fator = 0;

      for (let j = i; j < this.tamanho_linhas() - 1; j++) {
        pivo = this.matriz[i][i];
        fator = this.matriz[j + 1][i] / pivo;

        this.recontruir_linha(j, i, fator);
      }
    }
  }

  /**
   * Recontruir linha da matriz com novos valores
   * a partir do fator encontrado
   **/
  recontruir_linha(linha, coluna, fator) {
    for (let i = 0; i < this.tamnaho_colunas(); i++) {
      const valor = -fator * this.matriz[coluna][i];
      this.matriz[linha + 1][i] += valor;
    }
  }
}

export { Gaussiana };
