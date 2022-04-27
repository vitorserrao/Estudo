//ex1
function soma(obj: any): number {
  //:number é o tipo do return
  return obj.val1 + obj.val2;
}

const objeto: {
  val1: number;
  val2: number;
} = {
  val1: 30,
  val2: 30,
};

//console.log(soma(objeto));

const obj: any = {
  nome: 'vitor',
  valor: 15,
  status: true,
};

console.log(obj.nome);
console.log(obj.valor);
console.log(obj.status);
