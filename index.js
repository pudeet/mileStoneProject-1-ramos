//the declaration of the variables that we will plug into our later equations//
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreText =document.getElementById('scoreboard')

const score= 0

function increseScore(number){
  score += number
  scoreText.innerText = score 
}



let shuffledQuestions, currentQuestionIndex
// function of the start button and shuffle//
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
// hides the start button and then shuffles the questions //
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
// function of the next button//
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
//showing of the question//
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
// reset button function// 
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}
//the right and wrong functions of the quiz//


function setStatusClass(element, correct)  {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
//the questions that will appear, the source for this is https://www.youtube.com/watch?v=riDzcEQbX6k&t=936s//
const questions = [
  {
    question: 'What game franchise is known for this line? "its dangerous to go alone take this"',
    answers: [
      { text: 'Super Mario', correct: false },
      { text: 'Sonic Adventure', correct: false },
      { text: 'The Legend of Zelda', correct: true },
      { text: 'Metroid Prime', correct: false }
    ]
  },
  {
    question: 'What was the best selling gamecube game in the year 2002?',
    answers: [
      { text: 'Super Smash Bros Melee', correct: true },
      { text: 'Mario Kart Double Dash ', correct: false },
      { text: 'Super Mario Sunshine ', correct: false },
      { text: 'The Legend of Zelda : The Wind Waker', correct: false }
    ]
  },
  {
    question: 'What game system was the first Paper Mario available on?',
    answers: [
      { text: 'Game Boy Advance', correct: false },
      { text: 'Nintendo 64', correct: true },
      { text: 'Game Cube ', correct: false },
      { text: 'Wii', correct: false }
    ]
  },
  {
    question: 'What other game franchise made an easter egg appearance in the beloved Zelda game  "Majoras Mask?"',
    answers: [
      { text: 'Paper Mario', correct: false },
      { text: 'Banjoo Tooie ', correct: false },
      { text: 'Star Craft 64 ', correct: false },
      { text: 'Star Fox ', correct: true }
    ]
  },
  {
    question: 'What is the best rpg game of the 2000s?',
    answers: [
      { text: 'The Legend of Zelda, Mijoras Mask', correct: false },
      { text: 'Star Fox Adventure', correct: false },
      { text: 'Pokemon Colosseum', correct: false },
      { text: 'Paper Mario and the Thousand Year Door', correct: true }
    ]
  }
]