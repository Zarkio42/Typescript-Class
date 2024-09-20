// \ Exercício 3: Música
// Classe: Musica
// Atributos:
// _titulo (privado): string.
// _artista (privado): string.
// _duracao (privado): número (em segundos).
// Métodos:
// Construtor: Recebe o título, artista e duração da música.
// reproduzir(): void: Exibe a mensagem: "Reproduzindo [título da música] - [nome do artista]."
// pausar(): void: Exibe a mensagem: "[título da música] pausada."
// obterDuracaoEmMinutos(): string: Retorna a duração da música formatada em minutos e segundos (ex: "3:45").
// \

export class Musica{
    private _titulo:string;
    private _artista: string;
    private _duracao: number;

    constructor(titulo: string, artista: string, duracao: number){
        this._titulo = titulo;
        this._artista = artista;
        this._duracao = duracao;
    }

    reproduzir(): void{
        console.log(`Reproduzindo faixa [${this._titulo}] - [${this._artista}]`);
    }

    pausar(): void{
        console.log(`${this._titulo} pausada.`)
    }
    obterDuracaoEmMinutos(): string{
        const minutos = Math.floor(this._duracao / 60);
        const segundos = this._duracao % 60;
        return `${minutos}:${segundos.toString().padStart(2, '0')}`
    }
}