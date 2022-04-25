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
    adicionaProduto(produto){
        return this.listaProdutos.push(produto);
    }
    calcularPedido(){
        let myfinc = (pre,qt)=>{
            return (pre.preco) * (qt.quantidade);}
        return this.listaProdutos.map(myfinc);
    
        }

    
}

let cerveja = new produto('bier',2,true,3);
let test = new pedido(1, 'fábio');
test.adicionaProduto(cerveja);
test.calcularPedido();
console.log(test.calcularPedido());