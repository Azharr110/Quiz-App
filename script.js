const questions = [
    {
        question: "Which is largest animal in the world",
        answers: [
            {test: "Shark", correct: false},
            {test: "Blue Whale", correct: true},
            {test: "Elephant", correct: false},
            {test: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world",
        answers: [
            {test: "Vatican City", correct: true},
            {test: "Bhutan", correct: false},
            {test: "Behrain", correct: false},
            {test: "Oman", correct: false},
        ]
    },
    {
        question: "Which Batsman has scored the Fastest 100 in ODI",
        answers: [
            {test: "Misbah ul haq", correct: false},
            {test: "David Miller", correct: true},
            {test: "Ab de Villiers", correct: false},
            {test: "Rohit Sharma", correct: true},
        ]
    },
    {
        question: "Which Batsman has scored the Fastest 100 in T-20",
        answers: [
            {test: "Misbah ul haq", correct: false},
            {test: "David Miller", correct: true},
            {test: "Ab de Villiers", correct: false},
            {test: "Rohit Sharma", correct: false},
        ]
    },
]

const questionElement =  document.getElementById("question")
const answerButton =  document.getElementById("answer-buttons")
const nextButton =  document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);

    })
} 
startQuiz();