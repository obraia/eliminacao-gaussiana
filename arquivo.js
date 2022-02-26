import fs from "fs";

class Arquivos {
  static ler(nome_arquivo) {
    return new Promise((resolve, reject) => {
      fs.readFile(nome_arquivo, "utf-8", (erro, conteudo) => {
        if (erro) {
          reject(erro);
        } else {
          resolve(conteudo.split("\r\n"));
        }
      });
    });
  }
}

export { Arquivos };
