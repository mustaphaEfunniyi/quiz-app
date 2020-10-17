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

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuestion = 0;

loadQuiz();

const loadQuiz = function() {
    currentQuestion++;
}