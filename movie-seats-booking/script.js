const container = document.querySelector(".container")
const seats =  document.querySelectorAll(".row .seat:not(.occupied)")
const count = document.getElementById("count")
const movieselect = document.getElementById("movie")
let  ticketprice =  +movieselect.value
const price = document.getElementById("price")
console.log(ticketprice)

populateUI()

// update selected movie and index

function updatemovie(movieindex , movieprice){
   
    localStorage.setItem('movieindex' , movieindex)
    localStorage.setItem('movieprice' , movieprice)
    localStorage.setItem('ticketprice' , ticketprice)
}


//update selected count

function updateselected(){
    const selectedcount = document.querySelectorAll(".row .seat.selected")
    const seatIndex = [...selectedcount].map((seat)=>{
        return [...seats].indexOf(seat)
    })
    count.innerText =selectedcount.length
    console.log("tp" , ticketprice)
    price.innerText = selectedcount.length*ticketprice
   localStorage.setItem('selectedSeats' , JSON.stringify(seatIndex))
}

//populate from localstorage to UI
function populateUI(){
    const selectedseats = JSON.parse(localStorage.getItem('selectedSeats'))
    if(selectedseats!= null && selectedseats.length>0){
        seats.forEach((seat , index)=>{
          if(selectedseats.indexOf(index) > -1) {
              seat.classList.add('selected')
          } 
        })
    }

    const selectedmovieindex = localStorage.getItem('movieindex')
    if(selectedmovieindex != null){
        movieselect.selectedIndex = selectedmovieindex
        ticketprice = localStorage.getItem('movieprice')
    }
}

//movie select event listener

movie.addEventListener('change' , (e)=>{
    ticketprice = +e.target.value;
    updatemovie(e.target.selectedIndex , e.target.value)
    updateselected()
})

//seat select event listener
container.addEventListener('click' , (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')

        updateselected()
    }
    
})

updateselected()