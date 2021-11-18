const balance =  document.getElementById('balance')
const money_plus =  document.getElementById('money-plus')
const money_minus =  document.getElementById('money-minus')
const list =  document.getElementById('list')
const form =  document.getElementById('form')
const text =  document.getElementById('text')
const amount =  document.getElementById('amount')

console.log(list)

const dummyTransactions = [{id: 1, text:'Flower' , amount: -25},
{id: 2, text:'Salary' , amount: 150},
{id: 3, text:'cloth' , amount: -105},
{id: 4, text:'stock' , amount: 55}]

let transactions = dummyTransactions

function addTransactionDOM(transaction){
    const sign = transaction.amount < 0 ? '-' : '+'

    const item  = document.createElement('li')
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')
    item.innerHTML = `${transaction.text} <span>${sign} ${Math.abs(transaction.amount)}</span>
    <button class="delete-btn">X</button>`
    list.appendChild(item)

}

function init(){
    list.innerHTML = ''
    transactions.forEach(addTransactionDOM)
}
init()


// update amount , income , expense

function updatevalues(){
    const amounts =  transactions.map(transaction=>transaction.amount
    )
    const total = amounts.reduce((acc , item)=>(acc+=item),0)

    const income = amounts
                    .filter(item=>item>0)
                    .reduce((acc,item)=>(acc+=item),0)
    const expense = (amounts
                    .filter(item=>item<0)
                    .reduce((acc,item)=>(acc+=item),0)*-1)
    console.log(expense)
    balance.innerText = `$${income-Math.abs(expense)}`
    money_plus.innerHTML=`$${income}`
    money_minus.innerHTML=`$${expense}`
}

updatevalues()

// event listeners
