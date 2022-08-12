
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avalibleQuestions = [];

let questions = [
    {
        question: "What game franchise is known for this line 'it's dangerous to go alone take this?'",
        choice1: "Super Mario",
        choice2: "Metroid Prime",
        choice3: "The Legend of Zelda",
        choice4: "Sonic Adventure",
        answer: 3
    },
    {
        question: "What was the best selling gamecube game in the year 2000?",
        choice1: "The Legend of Zelda: The Wind Waker",
        choice2: "Super Mario Sunshine",
        choice3: "Mario Kart Double Dash",
        choice4: "Super Smash Bros Melee",
        answer: 4
    },
    {
        question: "What game system was the first Paper Mario availble on?",
        choice1: "Nintendo 64",
        choice2: "Game Boy Advanced",
        choice3: "Game Cube",
        choice4: "Wii",
        answer: 1
    },
    {
        question: "What game franchise makes an appearance in the beloved Zelda game Mijora's Mask?",
        choice1: "Paper Mario",
        choice2: "Star Fox",
        choice3: "Banjoo Tooie",
        choice4: "Star Craft 64",
        answer: 2
    }, {
        question: "What is the best rpg game of the 2000s?",
        choice1: "Paper Mario and the Thousand Year Door",
        choice2: "The Legend of Zelda",
        choice3: "Star Fox Adventure",
        choice4: "Pokemon Colosseum",
        answer: 1
    }
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    avalibleQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter;
    const questionIndex = Math.floor(Math.random() * avalibleQuestions.length);
    currentQuestion = avalibleQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
};


startGame();