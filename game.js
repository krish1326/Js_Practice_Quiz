var question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices)

let currentQuestion={};
let acceptingAnswers = false;
let score =0;
let questionCounter =0;
let availableQuestions =[];

let questions=[
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
      },
      {
        question:
          "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
      },
      {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4
      }
]

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;
choices.forEach(choice=>{
    choice.addEventListener('click',(eve)=>{
        const selectedAnswer = eve.target.dataset['number'];
        const classToApply = (selectedAnswer==currentQuestion.answer)?'correct':'incorrect';
        eve.target.parentElement.classList.add(classToApply);
        setTimeout(()=>{
            eve.target.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000)
        
    })})

startgame = ()=>{
    questionCounter=0;
    score=0;
    availableQuestions =[...questions];
    getNewQuestion();
}
function getNewQuestion(){
    if(availableQuestions===0 ||questionCounter >= MAX_QUESTIONS){
        return window.location.assign('./end.html')
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice=>{
        
        choice.innerText = currentQuestion['choice' + choice.dataset['number']]
    })
    availableQuestions.splice(questionIndex,1);
}

startgame();