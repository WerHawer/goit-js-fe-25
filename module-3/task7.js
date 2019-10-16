'use strict'

alert('Выполняется задание №7. Финансовый калькулятор. Сделал с интерфейсом.')


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

    const changeTransactionsToStr = () => {

        let arrOfTransactionsObjs = Object.values(account.transactions[account.transactions.length - 1]);
        finalHistoryStr = arrOfTransactionsObjs.join(' | ');

    }
    changeTransactionsToStr();

    let newDiv = `<div class="history__elem"> <span> ${finalHistoryStr} </span> </div>`;
    let pageHistory = document.querySelector('.history');

    pageHistory.insertAdjacentHTML("afterbegin", newDiv);
};

const addBalanceToPage = (name) => {
    let pageBalance = document.querySelector(name);
    pageBalance.innerHTML = `Ваш баланс: ${account.balance}`;
};


const getHowMutchMoney = (name) => {
    let amount = document.querySelector(name).value;

    return +amount;
};

const getRadioStatus = (name) => {

    let rad = document.getElementsByName(name);


    for (let i = 0; i < rad.length; i += 1) {

        if (rad[0].checked) {
            return 'isMinus';

        } else if (rad[1].checked) {
            return 'isPlus'
        }
    }
}

const addToPage = () => {

    let radioStatus = getRadioStatus('radio__balance');
    let amount = getHowMutchMoney('.form__amount');

    if (radioStatus == 'isMinus') {

        let smalBalance = account.withdraw(amount);

        if (smalBalance == 'stop') {
            return;

        } else {
            addBalanceToPage('.form__balance');
            addHistoryToPage();

            console.log('Current balance: ' + account.balance);

            return;
        }

    } else if (radioStatus == 'isPlus') {

        account.deposit(amount);
        addBalanceToPage('.form__balance');
        addHistoryToPage();

        console.log('Current balance: ' + account.balance)

        return;
    }
}




let buttonClick = document.querySelector('.form__button');

buttonClick.onclick = addToPage;

account.getBalance();
addBalanceToPage('.form__balance');
addHistoryToPage();



// console.log('balance: ' + account.balance);



// console.log('all deposits: ' + account.getTransactionTotal('deposit'));
// console.log('all withdraws: -' + account.getTransactionTotal('withdraw'));