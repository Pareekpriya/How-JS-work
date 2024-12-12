
// Q1
function createCounter(){
let count =0;

return{
    increment:function(){
        count++;
        console.log(`Current count:${count}`);
    },
    decrement: function(){
        count--;
        console.log(`Current count:${count}`);
    },
    display:function(){
        console.log(`Current count:${count}`);
    },
};
}


const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.display();


const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();
counter2.increment();
counter1.decrement();
counter2.display();



// Q2
function creatBankAccount(){
    let balance=0;
    let transactionHistory = [];

    return{
       deposite:function(amount){
        if(amount<=0){
            console.log("Deposit amount must be positive");
            return;
        }
        balance += amount;
        transactionHistory.push({type:"Deposit",amount:amount,balance:balance});
        console.log(`Current balance:${balance}`);
       },
       
       withdraw:function(amount){
        if(amount<=0){
            console.log("Withdrawal amount must be positive");
            return;
        }
        if(amount > balance){
            console.log("Insufficient balance");
            return;
        }
        balance-=amount;
        transactionHistory.push({type:"Withdrawal",amount:amount,balance:balance});
        console.log(`Current balance: ${balance}`);
    },

    getBalance: function(){
        console.log(`Current balance: ${balance}`);
    },

    getTransactionHistory:function(){
        console.log("Transaction History:");
        transactionHistory.forEach((entry,index)=>{
            console.log(
                `${index +1}.${entry.type} of $${entry.amount}. Balance after transaction:$${entry.balance}.`
            );
        });
    },
};
}
        

const account = creatBankAccount();
account.deposite(500);
account.withdraw(200);
account.withdraw(400);
account.getBalance();
account.getTransactionHistory();


const account1 = creatBankAccount();
const account2 = creatBankAccount();

account1.deposite(300);
account2.deposite(300);
account2.withdraw(200);

account1.getBalance();
account2.getBalance();

account1.getTransactionHistory();
account2.getTransactionHistory();