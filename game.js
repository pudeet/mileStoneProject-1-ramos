
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');


let currentQuestion = {};
let acceptingAnswers = false;
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
    if(avalibleQuestions.length === 0 || questions >= MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }
    questionCounter++ ;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    
    const questionIndex = Math.floor(Math.random() * avalibleQuestions.length);
    currentQuestion = avalibleQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    avalibleQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
         selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

         if(classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
         }

         

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};

startGame();