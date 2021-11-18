const wordel = document.getElementById('word')
const wrongel = document.getElementById('wrong-letters')
const notification = document.getElementById('notification-container')
const figurepart = document.querySelectorAll('.figure-part')
const popup = document.getElementById('popup-container')
const final_msg = document.getElementById('final-message')
const play_button = document.getElementById('play-button')

let words = ['programming', 'laptop', 'Google']

let selectedword = words[Math.floor(Math.random() * words.length)]

let correctletters = []
let wrongletters = []
function displayword() {

    wordel.innerHTML = `${selectedword
        .split('')
        .map((letter) =>
            `<span class="letter">
        ${correctletters.includes(letter) ? letter : ' '
            }
        </span>`
        ).join(' ')}`;


    //figure show

    figurepart.forEach((figure, index) => {
        
        let errors = wrongletters.length
        if (errors > index) {

            figure.style.display = 'block'
        } else {
            figure.style.display = 'none'
        }
    })

    //show success and error msg
    console.log("correct let" , correctletters.length)
    console.log("select word" , selectedword.length)
    const innerWord = wordel.innerText.replace(/\n/g, '');
    if (innerWord === selectedword) {
        final_msg.innerText = 'Congratulations! You won! 😃';
        popup.style.display = 'flex';
      }

    if(wrongletters.length == 6){
        final_msg.innerText = 'Sorry! You Lost! 😃';
        popup.style.display = 'flex';
    }


    wrongel.innerHTML = `<span>${wrongletters}</span>`

}

//to segregate the key
function letters_seg(key_pressed) {
    if (selectedword.includes(key_pressed)) {
        correctletters.push(key_pressed)
    } else {
        wrongletters.push(key_pressed)
    }
    console.log("correctletters", correctletters)
    console.log("wrongletters", wrongletters)
    console.log(key_pressed)
    displayword()
}



//event listeners

document.addEventListener('keypress', (event) => {
    if (wrongletters.indexOf(event.key) >= 0 || correctletters.indexOf(event.key) >= 0) {
        notification.classList.add('show')
        setTimeout(() => {
            notification.classList.remove('show')
        }, 1000)

    } else {
        letters_seg(event.key)
    }
})

play_button.addEventListener('click' , ()=>{
    popup.style.display = 'none';
    window.location.reload();
})
displayword()

