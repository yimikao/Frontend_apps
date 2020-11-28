//VIEW
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const history_list = document.getElementById('list');
const form = document.getElementById('form');
const text_space = document.getElementById('text');
const amount_space = document.getElementById('amount');

//MODEL
let transactions = [];

console.log(transactions);

//CONTROLLER

function randomID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const item = document.createElement('li');//check

  item.innerHTML = `
    ${transaction.text}<span>${transaction.amount}</span>
    <button class="delete-btn" onclick="removeTransaction()">x</button>
    `
  history_list.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);
  const total_amount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

  const expense = amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);//check

  balance.innerText = `${total_amount}`
  money_plus.innerText = `${income}`
  money_minus.innerText = `${expense}`
}

function removeTransaction(id) {
  
}

function addTransaction() {
  
  if (text_space.value.trim() === '' || amount_space.value.trim() === '') {
    alert('Please add a text and amount')
  } else {
    const transaction = {
      id: randomID(),
      text: text_space.value,
      amount: text_space.amount
    };

    transactions.push(transaction)

    addTransactionDOM(transaction);

    updateValues();
  }
}
