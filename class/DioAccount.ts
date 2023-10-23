export abstract class DioAccount{
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean =   true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = ():string =>{
        return this.name
    }

    deposit = (quantia:number) :void => {
        if (this.validateStatus()){
            this.setBalance(quantia)
            console.log("Você Depositou " ,quantia, " mil")
        }
        
    }

    withdraw = (quantia:number) :void => {
        if (this.validateStatus()){
            if(this.getBalance() >= quantia){
                this.setBalance(-(quantia));
                console.log("Você Sacou " ,quantia, " mil")
            }
        }
    }

    getBalance = () :number =>{
        return this.balance
    }
    setBalance = (quantia:number) :void =>{
        this.balance += quantia 
    }
    validateStatus = ():boolean  =>{
        if(this.status){
            return this.status
        }
        throw new Error('Conta inválida')
    }

    newAccount  = (quantia:number):void =>{
            this.setBalance(quantia + 10)
    }
}