const addUserBtn = document.getElementById('add-user')
const main = document.getElementById('main')
const doubleBtn = document.getElementById('double')
const showmillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculatewealthBtn = document.getElementById('calculate-wealth')


var data = []


async function getRanomuser() {
    let res = await fetch('https://randomuser.me/api')
    let data = await res.json()
    let user = data.results[0]

    var new_user = {
        firstname: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 10000)
    }

    adddata(new_user)
}

// add random user to Ui

function adddata(obj) {
    data.push(obj)
    updateDOM()

}

function updateDOM(provideddata = data) {
    main.innerHTML = `<main id="main"> 
    <h2>
        <strong>
            Person Name
        </strong>
        Wealth
    </h2>
</main>`
    provideddata.forEach((d) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${d.firstname}</strong> ${d.money}`
        main.appendChild(element)
    })
}

//double money

function doublemoney(provideddata = data) {
    let doublemoney = data.map(d => {
        // return {
        //     firstname: d.firstname,
        //     money: d.money * 2
        // }
        return {...d , money:d.money * 2}


    })
    data = doublemoney
    updateDOM()



}

function sortbyrichest(){
    data.sort((a , b)=>{
        return b.money - a.money
        })

    updateDOM()
}

function showmilleniors(){
     data = data.filter((item)=>{
        return item.money > 5000
    })
    console.log(data)
  
    updateDOM()
}

function total(){
    let tot_val = data.reduce((acc , item)=>(
        acc = acc+item.money) , 0
    )
    const element =  document.createElement('div')
    element.innerHTML = `<h3>Total Wealth:<strong>${tot_val}</strong></h3>`
    main.appendChild(element)
}

// event listeners

addUserBtn.addEventListener('click', getRanomuser)
doubleBtn.addEventListener('click', doublemoney)
sortBtn.addEventListener('click' , sortbyrichest)
showmillionairesBtn.addEventListener('click' , showmilleniors)
calculatewealthBtn.addEventListener('click' , total)