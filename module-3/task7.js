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

        //     for (let i = 0; i < this.transactions.length; i += 1) {

        //         if (this.transactions[i].type === Transaction.DEPOSIT) {
        //             this.balance += this.transactions[i].amount;
        //         } else if (this.transactions[i].type === Transaction.WITHDRAW) {
        //             this.balance -= this.transactions[i].amount;
        //         }
        //     }
        //     return this.balance;
        // },

        this.transactions.reduce((balance, el) => el.type == Transaction.DEPOSIT ?
            this.balance += el.amount :
            this.balance -= el.amount);

    },


    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        // for (let i = 0; i < this.transactions.length; i += 1) {
        //     if (this.transactions[i].id === id) {

        //         return this.transactions[i];
        //     }
        // }

        this.transactions.find(el => el.id == id)
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

    const message = document.querySelector('.message');
    const pageHistory = document.querySelector('.history__head');

    function newDiv({ id, type, amount }) {

        if (!id && !type && !amount) {
            return `<div class="history__main message"><span>У Вас ещё нет транзакций</span></div>`;
        } else if (message) {
            message.remove();
        }

        return ` <div class="history__main">
        <div class="id history__elem">${id}</div>
    <div class="type history__elem">${type}</div>
    <div class="amount history__elem">${amount}</div>
    </div>`;
    }

    const finalHistory = account.transactions.reduce((acc, el) => acc = newDiv(el), '')

    pageHistory.insertAdjacentHTML("afterend", finalHistory);
};

const addBalanceToPage = (name) => {
    const pageBalance = document.querySelector(name);
    pageBalance.innerHTML = `Ваш баланс: ${account.balance}`;
};

const getHowMutchMoney = (name) => {
    const amount = document.querySelector(name).value;
    return +amount;
};

const getRadioStatus = (name) => {
    const rad = document.querySelectorAll(name);

    for (let i = 0; i < rad.length; i += 1) {

        if (rad[0].checked) {
            return 'isMinus';

        } else if (rad[1].checked) {
            return 'isPlus'
        }
    }
}

const addToPage = () => {

    const radioStatus = getRadioStatus('input[type="radio"]');
    const amount = getHowMutchMoney('.form__amount');


    if (radioStatus == 'isMinus') {

        const minusBalance = account.withdraw(amount);

        if (minusBalance == 'stop') {
            return;

        } else {
            addBalanceToPage('.form__balance');
            addHistoryToPage();
            return;
        }

    } else if (radioStatus == 'isPlus') {

        account.deposit(amount);
        addBalanceToPage('.form__balance');
        addHistoryToPage();
        return;
    }
}

const findForId = () => {

    const getId = document.querySelector('.find_id').value;
    const historyId = document.querySelector('.history__id');
    const pageHistory = document.querySelector('.history__head');


    function newDiv({ id, type, amount }) {

        return `<div class="history__main">
        <div class="fined__id">${id}</div>
    <div class="fined__id">${type}</div>
    <div class="fined__id">${amount}</div>
    </div>`;
    }

    const finalHistory = account.transactions
        .find(el => el.id == getId);

    historyId.insertAdjacentHTML('afterBegin', newDiv(finalHistory));

}




const buttonClick = document.querySelector('.form__button');
const buttonFind = document.querySelector('.find__button');

buttonClick.onclick = addToPage;
buttonFind.onclick = findForId;

account.getBalance();
addBalanceToPage('.form__balance');
addHistoryToPage();

console.log(account.transactions.find(el => el.id == document.querySelector('.find_id').value));
console.log(document.querySelector('.find_id').value)