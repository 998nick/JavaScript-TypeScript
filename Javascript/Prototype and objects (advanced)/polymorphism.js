

function Account(agency, account, balance) {
     this.agency = agency
     this.account = account
     this.balance = balance
}


Account.prototype.withdraw = function(value) {
    if(value > this.balance) {
        console.log(`Saldo insuficiente R$${this.balance.toFixed(2)}`)
        return
    }

    this.balance -= value
    this.checkBalance();
}

Account.prototype.deposit = function(value) {
    this.balance += value
    this.checkBalance();
}

Account.prototype.checkBalance = function() {
    console.log(`Ag: ${this.agency}/${this.account} | Saldo: R$${this.balance.toFixed(2)}`)
}


function CheckingAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance)
  this.limit = limit
}

CheckingAccount.prototype = Object.create(Account.prototype)
CheckingAccount.prototype.constructor = CheckingAccount


CheckingAccount.prototype.withdraw = function(value) {
    if(value > (this.balance + this.limit)) {
        console.log(`Saldo insuficiente R$${this.balance.toFixed(2)}`)
        return
    }

    this.balance -= value
    this.checkBalance();
}



function SavingsAccount(agency, account, balance) {
    Account.call(this, agency, account, balance)
  }
  
  SavingsAccount.prototype = Object.create(Account.prototype)
  SavingsAccount.prototype.constructor = SavingsAccount
  



const account  = new Account(1111, 3456, 20)
// account.deposit(20)
// account.deposit(20)
// account.withdraw(50)
// console.log(account)


const accCheck = new CheckingAccount(1234, 45678, 0, 100)
// accCheck.deposit(10)
// accCheck.withdraw(110)
// accCheck.withdraw(100)


const savings = new SavingsAccount(1111, 2345, 20);
savings.deposit(10)
savings.withdraw(40)
