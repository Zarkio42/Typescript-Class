// Exercício 1: Conta Bancária
// Classe: ContaBancaria
// Atributos:
// _saldo (privado): número, inicializado com 0.
// _numeroConta (privado): string.
// Métodos:
// Construtor: Recebe o número da conta como argumento e inicializa o atributo _numeroConta.
// depositar(valor: number): void: Adiciona o valor ao saldo.
// sacar(valor: number): void: Verifica se há saldo suficiente antes de realizar o saque. \ Se o saldo for insuficiente, exiba uma mensagem.
// consultarSaldo(): number: Retorna o saldo atual.
// obterNumeroConta(): string: Retorna o número da conta. \

export class ContaBancaria{
     private _saldo: number = 0;
     private _numeroConta: string;

     constructor(numeroConta: string){
        this._numeroConta = numeroConta;
     }

     depositar(valor: number): void{
        this._saldo += valor;
        console.log(`Depósito realizado com sucesso!`)
     }

     sacar(valor:number): void{
        if(this._saldo <= 0){
            console.log("Saldo insuficiente!");
        }
        else{
            this._saldo -= valor;
            console.log(`Saque realizado com sucesso!`);
        }
     }
     consultarSaldo(): number{
        return this._saldo
     }
     obterNumeroConta(): string{
        return this._numeroConta
     }
}