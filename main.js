const questions = [
    {
        que: "What is the full form of HTML?",
        a: "Hypertext Markup Language",
        b: "Hightext Markup Language",
        c: "Markup Language",
        d: "Hitech Language",
        correct: "a"
    },
    {
        que: "What is the full form of CSS?",
        a: "Cascading Style Sheet",
        b: "Card Style Language",
        c: "Style Language",
        d: "Sheet Style Language",
        correct: "a"
    },
    {
        que: "What is the full form of CDN?",
        a: "Content Data Network",
        b: "Content Delivery Network",
        c: "Content Data Node",
        d: "Code Data Network",
        correct: "b"
    },
    {
        que: "What is the full form of WWW?",
        a: "Wide World Web",
        b: "Web World Web",
        c: "World Wide Web",
        d: "World Wide Web",
        correct: "c"
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index];
    quesBox.textContent = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.textContent = data.a;
    optionInputs[1].nextElementSibling.textContent = data.b;
    optionInputs[2].nextElementSibling.textContent = data.c;
    optionInputs[3].nextElementSibling.textContent = data.d;
};

loadQuestion();

const submitQuiz = () => {
    const ans = getAnswer();
    const data = questions[index];
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    if (index < total) {
        loadQuestion();
    } else {
        // Display results or perform any other actions when quiz ends
        console.log("Quiz ended");
    }
}


const getAnswer = () => {
    for (const input of optionInputs) {
        if (input.checked) {
            return input.value;
        }
    }
    return null; // Return null if no option is selected
};

const reset = () => {
    for (const input of optionInputs) {
        input.checked = false;
    }
};
