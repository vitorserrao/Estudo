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
        this.nomeCliente = nomeCliente;
    
    }
}


let test = new pedido(1, 'fábio')
console.log(test);