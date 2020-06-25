const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}
 
function setNextQuestion() {
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionContainerElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove("hide")
  } else {
      startButton.innerText = "restart"
      startButton.classList.remove("hide")
  }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
    question1: "Who had the most Points in their Final Game of their NBA career?",
    answers:[
        {text: "Michael Jordan", correct: false},
        {text: "Dirk Nowitzki", correct: false},
        {text: "Kobe Bryant", correct: true},
        {text: "Bill Russel", correct: false}
    ]
},
{
    question2: "What the best Car Movie?",
    answers:[
        {text: "The Fast and the Furious", correct: true},
        {text: "Gone in 60 Seconds", correct: false},
        {text: "Cars", correct: false},
        {text: "days of Thunder", correct: false},
    ]
},
{
    question3: "What superpower ability is the best?",
    answers:[
        {text: "Flight", correct: false},
        {text: "Invisibility", correct: false},
        {text: "Super Speed", correct: true},
        {text: "Telekenisis", correct: false}
    ]
},
{
    question4: "What is the answer to Live and everything?",
    answers:[
        {text: "Having a family", correct: false},
        {text: "being sucessful", correct: false},
        {text: "Being Famous", correct: false},
        {text: "45", correct: true}
    ]
},

]