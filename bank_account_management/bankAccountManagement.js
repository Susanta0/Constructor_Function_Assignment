function BankAccount(account_number,name,type,balance){
    this.AccountNumber=account_number;
    this.Name=name;
    this.Type=type;
    this.Balance=balance;
}

// Deposit(amount)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function Deposit(cash){
    this.Balance = this.Balance+cash
}

// withdraw(amount)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function Withdraw(w_cash){
    if(w_cash<=this.Balance){
        this.Balance = this.Balance - w_cash
    }else{
        console.log("insufficient funds in your bank account");
    }
}

// check Balance>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function CheckBalance(){
   return `your balance is:${this.Balance}`
}

// isActive account>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function IsActive(){
    if(this.Balance>=5000){
        return "your account is active";
    }else{
        return "your account is temporarily deactivate "
    }
}

let store1=new BankAccount("38257602652","Susanta","Saving",5000);
let store2=new BankAccount("64547447367","Soma","Saving",22000);
let store3=new BankAccount("55846342839","Manish","Current",50000);
let store4=new BankAccount("63362826454","Angshuman","Saving",700);
let store5=new BankAccount("17534379353","mandira","Current",20500);
let store6=new BankAccount("96342658363","bangshi","Saving",0);

// total active acount balance>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let storeAllAccount=[store1,store2,store3,store4,store5,store6]
function getTotalBalance(){
    let totalBalance=0;
    for(let i=0;i<storeAllAccount.length;i++){
        if(IsActive.call(storeAllAccount[i]) === "your account is active"){
            totalBalance+=storeAllAccount[i].Balance;
        }
    }
    return totalBalance;
}

// console.log(store1)
// Deposit(amount) call>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Deposit.call(store1,5000)
console.log(store1)

// withdraw(amount) call>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Withdraw.call(store2,5000);
console.log(store2)

// check Balance call>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let check=CheckBalance.call(store4)
console.log(check)

// isActive account call>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let checkActive=IsActive.call(store5)
console.log(checkActive)

// total active acount balance call>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let total_active_accounts_balance=getTotalBalance()
console.log(`Total balance of all active accounts:> ${total_active_accounts_balance}`);