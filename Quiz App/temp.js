// first Initialise the question
const questions= [
{
    question: "Which is the largest Animal in the world ?",
    answers:[
        {text:"Shark" , correct :false},
        {text:"Blue Whale" , correct :true},
        {text:"Elephant" , correct :false},
        {text:"Tiger" , correct :false}
    ]
},
{
    question: "Who is Current Prime Minister of India ?",
    answers:[
        {text:"Nehru" , correct :false},
        {text:"Yogi Baba" , correct :false},
        {text:"Rahul Gandhi" , correct :false},
        {text:"Narendra Modi" , correct :true}
    ]
},
{
    question: "Who is Chieft Minister of Uttar Pradesh ? ",
    answers:[
        {text:"Akhilesh" , correct :false},
        {text:"Sindhiya" , correct :false},
        {text:"Yogi Baba" , correct :true},
        {text:"Sharad Pawar" , correct :false}
    ]
},
{
    question: "Who is Singer in this list ? ",
    answers:[
        {text:"Sonu Nigam" , correct :true},
        {text:"ShahRukh Khan" , correct :false},
        {text:"Govinda" , correct :false},
        {text:"Prabhi Deva" , correct :false}
    ]
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetCode();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = "Q" + questionNo  + "- " + currentQuestion.question;

    // make answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button)
    });

    /// now add Event Listner
    answerButton.addEventListener('click', function(e){
        console.log("We are trying to hit answer buttons")
        e.target.style.background = '#ff3333'
    })

}
function resetCode(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


startQuiz()
