class Animal {
  nome: string;
  raca: string;
  corPelagem: string;
  peso: number;

  constructor(nome: string, raca: string, corPelagem: string, peso: number) {
    this.nome = nome;
    this.raca = raca;
    this.corPelagem = corPelagem;
    this.peso = peso;
  }
}

const bruce = new Animal('Bruce', 'Pitbull', 'trigrado', 20);
console.log(bruce);
