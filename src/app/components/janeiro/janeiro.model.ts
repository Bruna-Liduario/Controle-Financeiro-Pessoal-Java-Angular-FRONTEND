export interface Janeiro {
  id?: number;
  valorentrada: number,
  gastovariavel: string,
  valorgastovariavel: number,
  idEntrada: string,
  idGastoFixo: string,

  descricaoEntrada?: string; // Adicionando a descrição da entrada
  descricaogastofixo?: string; // Adicionando a descrição do gasto fixo
  valorgastofixo?: number; // Adicionando o valor do gasto fixo
}
