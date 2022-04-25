let produto = class {
   constructor(nome,preco,emEstoque,quantidade){
       this.nome = nome;
       this.preco = preco;
       this.emEstoque = emEstoque;
       this.quantidade = quantidade;
   }
}

let pedido = class{
    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nomeCliente;}

    adicionarProduto(produto){
        return this.listaProdutos.push(produto)}

    calcularTotal(){
        const valores = [];
        let soma = 0;
        for (let i = 0; i < this.listaProdutos.length; i++) {
            valores.push(this.listaProdutos[i].preco)*(this.listaProdutos[i].quantidade);
            soma += valores[i];
            console.log(valores);
        }
    }
      
            
}

const  cerveja = new produto('bier', 1.99, true, 3);
const  suco = new produto('qsuc', 1.2, true, 2);
const test = new pedido(1, 'fábio');
test.adicionarProduto(cerveja);
test.adicionarProduto(suco);
const calc = test.calcularTotal();
console.log(calc);
