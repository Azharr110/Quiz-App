const questions = [
    {
        question: "Which is largest animal in the world",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Behrain", correct: false},
            {text: "Oman", correct: false},
        ]
    },
    {
        question: "Which Batsman has scored the Fastext 100 in ODI",
        answers: [
            {text: "Misbah ul haq", correct: false},
            {text: "David Miller", correct: true},
            {text: "Ab de Villiers", correct: false},
            {text: "Rohit Sharma", correct: true},
        ]
    },
    {
        question: "Which Batsman has scored the Fastext 100 in T-20",
        answers: [
            {text: "Misbah ul haq", correct: false},
            {text: "David Miller", correct: true},
            {text: "Ab de Villiers", correct: false},
            {text: "Rohit Sharma", correct: false},
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