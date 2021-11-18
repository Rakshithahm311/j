const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-conatiner');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

  let randomword;
  let time =10;
  let score = 0;
  let difficulty = localStorage.getItem('difficulty')!== null? localStorage.getItem('difficulty') :'Medium'

  difficultySelect.value  =  localStorage.getItem('difficulty')!== null? localStorage.getItem('difficulty') :'Medium'

  //text focus

  text.focus()


  // update time interval

 let timeInterval = setInterval(updateTime, 1000);

  //get random word

  function getRandomWord(){
      return words[Math.floor(Math.random()*words.length)]
  }

  function addRandomword(){
    randomword = getRandomWord()
    word.innerHTML = randomword
  }

  // Increase score

  function increasescore(){
    score++;
    scoreEl.innerHTML = score
  }

  //update timer
  function updateTime(){
    time--;
    timeEl.innerHTML = time + 's';
    if(time === 0){
        console.log(timeInterval)
        clearInterval(timeInterval)
        gameover()
    }
  }

  function gameover(){
    endgameEl.innerHTML = 
    `<h2>Your time ranout</h2>
        <p>Final score is ${score}</p>
        <button onclick = 'location.reload()'>reload</button>`
    endgameEl.style.display = 'flex'
  }

  addRandomword()


  // event listeners

  // typing

  text.addEventListener('input' , (e)=>{
      const insertedText = e.target.value
      if(insertedText === randomword ){
            increasescore()
            addRandomword()
            e.target.value = '';
            if(difficulty == 'Hard'){
                time+=2
            }else if(difficulty == 'Medium'){
                time+=3
            }else{
                time+=5
            }
            
            updateTime()
      }
  })

  // settings button click

  settingsBtn.addEventListener('click' , ()=>{
    settings.classList.toggle('hide')
  })


  // settings difficulty level

  settingsForm.addEventListener('change' , e=>{
      difficulty = e.target.value
      localStorage.setItem('difficulty', difficulty);
  })
