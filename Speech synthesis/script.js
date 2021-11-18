const main  = document.querySelector('main')
const voiceselect = document.getElementById('voice')
const textarea = document.getElementById('text')
const readbtn = document.getElementById('read')
const togglebtn = document.getElementById('toggle')
const closebtn = document.getElementById('close')

const data = [
    {
      image: './img/drink.jpg',
      text: "I'm Thirsty"
    },
    {
      image: './img/food.jpg',
      text: "I'm Hungry"
    },
    {
      image: './img/tired.jpg',
      text: "I'm Tired"
    },
    {
      image: './img/hurt.jpg',
      text: "I'm Hurt"
    },
    {
      image: './img/happy.jpg',
      text: "I'm Happy"
    },
    {
      image: './img/angry.jpg',
      text: "I'm Angry"
    },
    {
      image: './img/sad.jpg',
      text: "I'm Sad"
    },
    {
      image: './img/scared.jpg',
      text: "I'm Scared"
    },
    {
      image: './img/outside.jpg',
      text: 'I Want To Go Outside'
    },
    {
      image: './img/home.jpg',
      text: 'I Want To Go Home'
    },
    {
      image: './img/school.jpg',
      text: 'I Want To Go To School'
    },
    {
      image: './img/grandma.jpg',
      text: 'I Want To Go To Grandmas'
    }
  ];

data.forEach(createBox)

function createBox(item){
    const box  = document.createElement('div')
    const {image , text } =  item
    box.classList.add('box')
    box.innerHTML = `
    <img src="${image}" alt="${text}">
    <p>${text}</p>
    `

    box.addEventListener('click' , ()=>{
      setTextMessage(text)
      speakText()
    })
    main.appendChild(box)
  

    
}

// init speech synthesis

const message = new SpeechSynthesisUtterance();

// get voices
let voices  = []

function getvoices(){
  voices  = speechSynthesis.getVoices()
  voices.forEach((voice)=>{
    let option =  document.createElement('option')
    option.value = voice.name
    option.innerText = `${voice.name} ${voice.lang}`
    voiceselect.appendChild(option)
    voiceselect.selectedIndex = "1";
  })
}


// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// changing voices

function voicechange(e){
  message.voice = voices.find(voice => voice.name === e.target.value);
}

//custom text

function readcustomtext(){
  setTextMessage(textarea.value)
  speakText()
}

speechSynthesis.addEventListener('voiceschanged' , getvoices)

togglebtn.addEventListener('click' , ()=>document.getElementById('text-box').classList.toggle('show'))

closebtn.addEventListener('click' , ()=>{document.getElementById('text-box').classList.remove('show')})

voiceselect.addEventListener('change' , voicechange)

readbtn.addEventListener('click' , readcustomtext)

getvoices()
