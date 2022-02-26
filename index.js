import { Arquivos } from "./arquivo.js";
import { EquacaoLinear } from "./equacao_linear.js";
import { Gaussiana } from "./gaussiana.js";

async function main() {
  const dados_arquivo = await Arquivos.ler("./dados/matriz_01.txt");
  const [tamanho_linhas, tamanho_colunas] = dados_arquivo[0].split(";");

  const matriz_gaussiana = new Gaussiana(
    Number(tamanho_linhas),
    Number(tamanho_colunas)
  );

  matriz_gaussiana.preencher(dados_arquivo.slice(1));
  console.log("Matriz original:");
  matriz_gaussiana.exibir();
  matriz_gaussiana.eliminacao_gaussiana();
  console.log("Matriz resultante:");
  matriz_gaussiana.exibir();

  console.log("Substituições retroativa:");
  const equacoes = matriz_gaussiana.obter_quacoes_lineares();
  const equacaoLinear = new EquacaoLinear(equacoes);
  const resultados = equacaoLinear.substituicao_retroativa();
  console.table(resultados);
}

console.clear();
main();
