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
const answerButtons =  document.getElementById("answer-buttons")
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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
} 

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
    }else{
        selectedBtn.classList.add("incorrect")
    }
}

startQuiz();