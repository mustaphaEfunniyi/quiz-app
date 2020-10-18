const quizData = [
    {
        question: 'How old is Rito?',
        a: '19',
        b: '21',
        c: '23',
        d: '25',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'Python',
        c: 'Javascript',
        d: 'C',
        correct: 'c'
    },
    {
        question: 'Who is the president of US?',
        a: 'Muhammadu Buhari',
        b: 'Donald Trump',
        c: 'Roman Abramovich',
        d: 'Vladmir Putin',
        correct: 'b'
    },
    {
        question: 'What does HTML stands for?',
        a: 'HyperType Marking Language',
        b: 'Hypertext Markup Language',
        c: 'Cascading Style Sheet',
        d: 'Javascript Object Notation',
        correct: 'b'
    },
    {
        question: 'What does API stands for?',
        a: 'Application Programmable Intermediary',
        b: 'Applied Physics Intelligence',
        c: 'Applicable Production Industry',
        d: 'Application Programming Interface',
        correct: 'd'
    }
] 

const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
     
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // * Check to see the answer
    const answer = getSelected();

    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;  

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} correctly</h2>
            <br>
            <button onclick="location.reload()">Reload</button>`
        }
    }

})