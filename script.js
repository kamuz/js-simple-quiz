// Questions and answers
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// Get elements
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Counters
let currentQuiz = 0;
let score = 0;

loadQuiz();

// Render quiz
function loadQuiz(){
    // Get current question
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    // Get text from answer of current question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Deselect all answers
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Get selected element
function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            // Get element id selected option
            answer = answerEl.id;
        }
    });

    return answer;
}

// Submit
submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();
    console.log(answer);
});