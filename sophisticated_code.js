/* 
   Filename: sophisticated_code.js
   Description: This code simulates a complex banking system with multiple accounts, transactions, and balance calculations.
*/

// Define Account class
class Account {
  constructor(accountNumber, accountHolder, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'Deposit', amount });
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: 'Withdrawal', amount });
    } else {
      console.log('Insufficient funds!');
    }
  }

  getTransactionHistory() {
    return this.transactions;
  }
}

// Create Accounts
const account1 = new Account(1, 'John Doe', 1000);
const account2 = new Account(2, 'Jane Smith', 5000);

// Perform transactions
account1.deposit(500);
account1.withdraw(200);
account2.deposit(1000);
account2.withdraw(1500);

// Print account balances
console.log(`Account ${account1.accountNumber} balance: $${account1.balance}`);
console.log(`Account ${account2.accountNumber} balance: $${account2.balance}`);

// Print transaction history
console.log('Transaction History:');
console.log(`Account ${account1.accountNumber}:`);
account1.getTransactionHistory().forEach((transaction, index) => {
  console.log(`Transaction ${index + 1}: ${transaction.type} of $${transaction.amount}`);
});
console.log(`Account ${account2.accountNumber}:`);
account2.getTransactionHistory().forEach((transaction, index) => {
  console.log(`Transaction ${index + 1}: ${transaction.type} of $${transaction.amount}`);
});

// Perform more transactions...
// ...
// ...
// ...

// Calculate total balance across all accounts
const accounts = [account1, account2];
let totalBalance = 0;
accounts.forEach((account) => {
  totalBalance += account.balance;
});

console.log(`\nTotal balance across all accounts: $${totalBalance.toFixed(2)}`);