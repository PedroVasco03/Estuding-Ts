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

// const typeUser = {
//     admin: 'Seja bem vindo administrator',
//     student: 'Você é estudante',
//     viewer: 'Você pode vizualizar'
// }

// function validateUser(user: string){
//     console.log(typeUser[user as keyof typeof typeUser])
// }

// const usuario = 'admin'

// validateUser(usuario)
// validateUser('student')
// validateUser('viewer')

// for(let i= 0; i<5; i++) {
//     console.log(i)
// }

// const array : Array<number> = [1, 2, 3, 4, 5]

// const strtringArray : string[] =['A', 'B', 'C', 'D']

// console.log(array[0])
// console.log(strtringArray.length)

// class User {
//     name: string
//     age: number

//     constructor(name: string, age: number){
//         this.name=name;
//         this.age=age;
//     }

//     showName(){
//         console.log(this.name)
//     }
// }
// const user = new User('Pedro Vasco', 20)
// user.showName();



import { DioAccount } from "./class/DioAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
// class Admin extends DioAccount{
    

//     constructor(name: string, accountNumber: number){
//         super(name, accountNumber)
//         this.balance = 20
//     }

    
// }

// const adminAccount: Admin = new Admin('Vasco', 1);
// console.log(adminAccount)





const peopleAccount: PeopleAccount =new PeopleAccount(2, 'Vasco', 20)

console.log(peopleAccount)
console.log(peopleAccount.getName())
peopleAccount.deposit(2000)
console.log("saldo atualizado ", peopleAccount.getBalance())
peopleAccount.withdraw(1200)
console.log("saldo atualizado ", peopleAccount.getBalance())

peopleAccount.newAccount(100)

const companyAccount = new CompanyAccount('DIO',20)
console.log(companyAccount);
console.log(companyAccount.getName())
companyAccount.getLoan(5000)
companyAccount.getBalance()