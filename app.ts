// interface Pessoa{
//     nome : string,
//     idade : number,
//     profissao?: string
// }

// const Pessoa : Pessoa={
//     nome : 'Pedro',
//     idade: 20,
//     profissao:'Dev'
// }

// const Pessoa2: Pessoa = {
//     nome: 'André',
//     idade: 18
// }

// const arrayPessoa : Array<Pessoa> = [
//     Pessoa,
//     Pessoa2
// ]

// const arrayNum: number [] = [1, 2, 3, 4, 5]
// const arrayString: Array<string> = [
//     '1', '2', '3', '4', '5'
// ]

// const numn: number =15

// if(numn > 15){
//     console.log('Num maior que 15')
// }
// else if(numn === 15){
//     console.log('Num igual a 15')
// }
// else{
//     console.log('Num menor que 15')
// }

const typeUser = {
    admin: 'Seja bem vindo administrator',
    student: 'Você é estudante',
    viewer: 'Você pode vizualizar'
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validateUser(usuario)
validateUser('student')
validateUser('viewer')