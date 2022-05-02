class Conta {
  protected numero: number;
  protected saldo: number;
  protected estaAtiva: boolean;
  protected dono: string;
  constructor(numero: number, saldo: number, estaAtiva: boolean, dono: string) {
    this.numero = numero;
    this.saldo = saldo;
    this.estaAtiva = estaAtiva;
    this.dono = dono;
  }
}

class ContaEmpresa {
  private limiteDeDeposito: number = 1000;
  constructor() {}
  deposito(valor: number) {}
  imprimeValorConta() {}
}
