class Matriz {
  matriz = [];

  // Controi matriz com tamanho informado e preenche com valores padrão
  constructor(i, j) {
    this.matriz = Array(i)
      .fill(0)
      .map(() => Array(j).fill(0));
  }

  /**
   * Preencher matriz com valores de arquivo
   **/
  preencher(dados_arquivo) {
    for (let i = 0; i < this.tamanho_linhas(); i++) {
      const colunas = dados_arquivo[i].split(";");

      for (let j = 0; j < this.tamnaho_colunas(); j++) {
        this.matriz[i][j] = parseFloat(colunas[j]);
      }
    }
  }

  /**
   * Retorna a quantidade de linhas da matriz
   **/
  tamanho_linhas() {
    return this.matriz.length;
  }

  /**
   * Retorna a quantidade de colunas da matriz
   **/
  tamnaho_colunas() {
    return this.matriz[0].length;
  }

  /**
   * Exibe matriz em forma de tabela
   **/
  exibir() {
    console.table(this.matriz);
  }
}

export { Matriz };
