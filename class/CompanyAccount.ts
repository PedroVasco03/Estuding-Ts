import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (quantia: number) =>{
        if (this.validateStatus()){
            this.setBalance(quantia)
            console.log("você pegou um emprestimo de ", quantia, "saldo ")
        }
    }

    deposit= ():void =>{
        console.log(" empresa depositou")
    } 
}