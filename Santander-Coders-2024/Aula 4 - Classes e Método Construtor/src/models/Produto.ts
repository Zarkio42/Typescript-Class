// Exercício 2: Produto
// Classe: Produto
// Atributos:
// _nome (privado): string.
// _preco (privado): número.
// _quantidade (privado): número.
// Métodos:
// Construtor: Recebe nome, preço e quantidade inicial como argumentos.
// reporEstoque(quantidade: number): void: Adiciona a quantidade ao estoque atual.
// baixarEstoque(quantidade: number): void: Verifica se há quantidade suficiente em estoque antes de realizar a baixa. Exiba uma mensagem caso contrário.
// calcularValorTotal(): number: Retorna o valor total do produto em estoque (preço * quantidade).
// exibirResumo(): void: Exibe no console um resumo com o nome, preço, quantidade e valor total do produto.
// \

export class Produto{
    private _nome: string;
    private _preco: number;
    private _quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    reporEstoque(quantidade: number): void{
        this._quantidade += quantidade;
        console.log(`Estoque de ${this._nome} abastecido com ${quantidade} unidades.`)
    }
    baixarEstoque(quantidade: number): void{
        if(this._quantidade <= 0){
            console.log(`Estoque de ${this._nome} insuficiente para dar baixa`);
        }
        else{
            this._quantidade -= quantidade;
        }
    }
    calcularValorTotal(): number{
        return this._preco * this._quantidade;
    }
    exibirResumo(): void{
        console.log(`Nome: ${this._nome}\n
            Preço: R$ ${this._preco.toFixed(2)}\n
            Quantidade: ${this._quantidade}\n
            Valor Total: R$ ${this.calcularValorTotal().toFixed(2)}`);
    }
}