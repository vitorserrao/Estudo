const contasClientes = 
    [{id: 1,saldo: 500,},
    {id: 2,saldo: 30000,},
    {id: 3,saldo: 50},];
    
const deposito = (valor, id) => {
    const consulta =(contasClientes.findIndex((obj)=>{return obj.id === id}));
    saldo = contasClientes[consulta].saldo
    switch (true) {
        case (valor <= 0):
            console.log("Valor inválido")
            break; 
        default:
            saldo = saldo + valor;
            console.log(`deposito feito com sucesso, saldo atual:${saldo}`)
            break;
        }

    }
const sacarDinheiro = (valor, id) =>{
    const consulta =(contasClientes.findIndex((obj)=>{return obj.id === id}));
    saldo = contasClientes[consulta].saldo
    switch (true) {
        case (valor <= 0):
            console.log("Valor inválido")
            break;
        case (valor > saldo):
            console.log(`saldo insuficiente, saldo atual:${saldo}`)
            break;
        case ((saldo > valor) && (valor > 0) ):
            saldo = saldo - valor;
            console.log(`Saque feito com sucesso, saldo atual:${saldo}`)
            break;  
        default:
            break;
        }
    }

sacarDinheiro(2222,2);
deposito(0,1);