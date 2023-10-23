import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = () =>{
        console.log("você pegou um emprestimo")
    }

    deposit= ():void =>{
        console.log(" empresa depositou")
    } 
}