interface Pessoa{
    nome : string,
    idade : number,
    profissao?: string
}

const Pessoa : Pessoa={
    nome : 'Pedro',
    idade: 20,
    profissao:'Dev'
}

const Pessoa2: Pessoa = {
    nome: 'André',
    idade: 18
}

const arrayPessoa : Array<Pessoa> = [
    Pessoa,
    Pessoa2
]

const arrayNum: number [] = [1, 2, 3, 4, 5]
const arrayString: Array<string> = [
    '1', '2', '3', '4', '5'
]