//VIEW
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const history_list = document.getElementById('list');
const form = document.getElementById('form');
const text_space = document.getElementById('text');
const amount_space = document.getElementById('amount');

//MODEL
// let transactions = [];
const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

console.log(transactions);

//CONTROLLER

function randomID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const item = document.createElement('li');//check

  item.innerHTML = `
    ${transaction.text}<span>${transaction.amount}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
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
  transactions = transactions.filter(transaction => transaction.id !== id);
  updateLocalStorage();

  init();
}

function addTransaction(e) {
  e.preventDefault();
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

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }
}








function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app
function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);
