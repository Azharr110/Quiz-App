const questions = [
    {
        question: "Which of the following term is used for a function defined inside a class?",
        answers: [
            {text: "Class function", correct: false},
            {text: "Member function", correct: true},
            {text: "Classic function", correct: false},
            {text: "Member Variable", correct: false},
        ]
    },
    {
        question: "Which of the following is not a type of constructor?",
        answers: [
            {text: "Friend constructor", correct: true},
            {text: "Copy constructor", correct: false},
            {text: "Default constructor", correct: false},
            {text: "Parameterized constructor", correct: false},
        ]
    },
    {
        question: "How many instances of an abstract class can be created?",
        answers: [
            {text: "1", correct: false},
            {text: "0", correct: true},
            {text: "13", correct: false},
            {text: "5", correct: false},
        ]
    },
    {
        question: "Which of the following is an abstract data type?",
        answers: [
            {text: "string", correct: false},
            {text: "Class", correct: true},
            {text: "double", correct: false},
            {text: "int", correct: false},
        ]
    },
    {
        question: "Which of the following concepts means wrapping up of data and functions together?",
        answers: [
            {text: "Abstraction", correct: false},
            {text: "Encapsulation", correct: true},
            {text: "Polymorphism", correct: false},
            {text: "Inheritance", correct: false},
        ]
    },
    {
        question: "Which of the following operator is overloaded for object cout?",
        answers: [
            {text: ">>", correct: false},
            {text: "=", correct: false},
            {text: "+", correct: false},
            {text: "<<", correct: true},
        ]
    },
    {
        question: "How many types of polymorphisms are supported by C++?",
        answers: [
            {text: "1", correct: false},
            {text: "5", correct: false},
            {text: "2", correct: true},
            {text: "4", correct: false},
        ]
    },
    {
        question: "Which of the following provides a reuse mechanism?",
        answers: [
            {text: "Inheritance", correct: true},
            {text: "Abstraction", correct: false},
            {text: "Encapsulation", correct: false},
            {text: "Dynamic binding", correct: false},
        ]
    },
    {
        question: "Which of the following cannot be friend?",
        answers: [
            {text: "Function", correct: false},
            {text: "Class", correct: false},
            {text: "Object", correct: true},
            {text: "Operator function", correct: false},
        ]
    },
    {
        question: "Which of the following concepts of OOPS means exposing only necessary information to client?",
        answers: [
            {text: "Data hiding", correct: true},
            {text: "Data binding", correct: false},
            {text: "Abstraction", correct: false},
            {text: "Encapsulation", correct: false},
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
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}! `
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz();