'use strict'

// alert('Выполняется задание №5. Фильтрация по ключу. Результат в коноле.')


const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {

    balance: 0, // Текущий баланс счета

    // История транзакций
    transactions: [
        {},
    ],

    /*
     * Метод отвечающий за добавление суммы к балансу
     * Создает объект транзакции и вызывает addTransaction
     */
    deposit(amount) {
        let newDeposit = { id: this.idCounter(), type: Transaction.DEPOSIT, amount };
        this.addTransaction(newDeposit);

    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Создает объект транзакции и вызывает addTransaction
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {

        if (this.balance < amount) {
            alert('You don`t have so many money on your balance');
            return 'stop';

        } else {
            let newWithdraw = { id: this.idCounter(), type: Transaction.WITHDRAW, amount };
            this.addTransaction(newWithdraw);
        }
    },

    /*
     * Метод добавляющий транзацию в свойство transactions
     * Принимает объект трназкции
     */
    addTransaction(transaction) {
        this.transactions.push(transaction);
        console.table(this.transactions)
        this.getBalance();
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        this.balance = 0;
        for (let i = 0; i < this.transactions.length; i += 1) {

            if (this.transactions[i].type === Transaction.DEPOSIT) {
                this.balance += this.transactions[i].amount;
            } else if (this.transactions[i].type === Transaction.WITHDRAW) {
                this.balance -= this.transactions[i].amount;
            }
        }
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i += 1) {
            if (this.transactions[i].id === id) {

                return this.transactions[i];
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let totalSumOfType = 0;
        for (let i = 0; i < this.transactions.length; i += 1) {
            if (this.transactions[i].type === type) {
                totalSumOfType += this.transactions[i].amount;
            }

        }
        return totalSumOfType;
    },

    idCounter() {
        let id = this.transactions.length;
        return id;
    }

};


//Закончил основное задание, работаем со страничкой

const addHistoryToPage = () => {
    let finalHistoryStr;

    const countTransactions = () => {

        for (let i = 0; i < account.transactions.length; i += 1) {
            let arrOfTransactionsObjs = Object.values(account.transactions[i]);
            finalHistoryStr = arrOfTransactionsObjs.join(' | ');

        }

    }
    countTransactions();

    let newDiv = `<div class="history__elem"> <span> ${finalHistoryStr} </span> </div>`;
    let pageHistory = document.querySelector('.history');
    pageHistory.insertAdjacentHTML("afterbegin", newDiv);
};

const addBalanceToPage = () => {
    let pageBalance = document.querySelector('.form__balance');
    pageBalance.innerHTML = `Ваш баланс: ${account.balance}`;
};


const howMutchMoney = () => {
    let amount = document.querySelector('.form__amount').value;

    return +amount;
};

const addFromPage = () => {

    let rad = document.getElementsByName('radio__balance');
    let amount = howMutchMoney();

    for (let i = 0; i < rad.length; i += 1) {
        if (rad[0].checked) {

            let smalBalance = account.withdraw(amount);

            if (smalBalance == 'stop') {
                return;
            } else {
                addBalanceToPage();
                addHistoryToPage();
                console.log('Current balance: ' + account.balance)

                return rad;
            }

        } else if (rad[1].checked) {

            account.deposit(amount);
            addBalanceToPage();
            addHistoryToPage();

            console.log('Current balance: ' + account.balance)

            return rad;
        }
    }

}


let buttonClick = document.querySelector('.form__button');

buttonClick.onclick = addFromPage;

account.getBalance();
addBalanceToPage();
addHistoryToPage();



console.log('balance: ' + account.balance);



// console.log('all deposits: ' + account.getTransactionTotal('deposit'));
// console.log('all withdraws: -' + account.getTransactionTotal('withdraw'));