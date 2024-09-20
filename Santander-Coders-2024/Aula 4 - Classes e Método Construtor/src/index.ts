// Exercicio 1: Conta Bancaria

import { ContaBancaria } from "./models/ContaBancaria"

let conta = new ContaBancaria("01");

conta.depositar(150);

conta.sacar(50);

console.log(conta.consultarSaldo().toFixed(2));

console.log(conta.obterNumeroConta());

// Exercicio 2: Produto

import { Produto } from "./models/Produto";

let banana = new Produto("Banana", 6, 60);

banana.baixarEstoque(10);
banana.reporEstoque(20);
banana.exibirResumo();
console.log(banana.calcularValorTotal());


// Exercicio 3: Musica
 import { Musica } from "./models/Musica";

 let myLifeBeLike = new Musica("My Life Be Like", "Grits", 234);

 myLifeBeLike.reproduzir();
 myLifeBeLike.pausar();
 console.log(myLifeBeLike.obterDuracaoEmMinutos());


