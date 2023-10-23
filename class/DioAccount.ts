export abstract class DioAccount{
    name: string
    accountNumber: number
    balance: number = 0
    status: boolean =   true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name=name
        console.log('New name saved: ' + name)
    }

    getName = ():string =>{
        return this.name
    }

    deposit = () :void => {
        if (this.validateStatus()){
            console.log("Você Depositou")
        }
        
    }

    withdraw = () :void => {
        console.log("Você Sacou")
    }

    getBalance = () :void =>{
        console.log(this.balance)
    }

    private validateStatus = ():boolean  =>{
        if(this.status){
            return this.status
        }
        throw new Error('Conta inválida')
    }
}