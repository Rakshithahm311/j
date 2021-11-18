const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//fetch api and calculate

function calclulate(){
    let currency_one = currencyEl_one.value;
    let currency_two = currencyEl_two.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
    //    console.log(data);
        const rates = data.rates[currency_two]

        rateEl.innerText = `1 ${currency_one} =  ${rates} ${currency_two}`
        mountEl_two=(+amountEl_one.value*rates).toFixed(2)
        // console.log(typeof(+amountEl_one.value))
        amountEl_two.value = (+amountEl_one.value*rates).toFixed(2)

    });
    
}
//swapping value



//event listeners

currencyEl_one.addEventListener('change', calclulate);
amountEl_one.addEventListener('input', calclulate);
currencyEl_two.addEventListener('change', calclulate);
amountEl_two.addEventListener('input', calclulate);

swap.addEventListener('click' , ()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value=currencyEl_two.value;
    currencyEl_two.value = temp;
    calclulate();
})

calclulate();