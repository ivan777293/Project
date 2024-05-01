const questions = [
    {
        question: "Что является основой любого бизнеса?",
        choices: ["a) Финансы", "b) Идея", "c) Маркетинг", "d) Управление"],
        answer: "b"
    },
    {
        question: "Зачем необходимо проводить анализ рынка перед запуском бизнеса?",
        choices: ["a) Для увеличения налоговых обязательств", "b) Для понимания спроса и предложения на рынке","c) Для увеличения расходов на маркетинг","d) Для привлечения инвестиций"],
        answer: "b"
    },
    {
        question: "Что включает в себя бизнес-план?",
        choices: ["a) Только финансовый план", "b) Стратегию развития бизнеса, цели, план действий и другие ключевые аспекты", "c) Маркетинговые стратегии", "d) Только описание продукта или услуги"],
        answer: "b"
    },
    {
        question: "Почему важно уметь эффективно управлять финансами в бизнесе?",
        choices: ["a) Для увеличения затрат", "b) Для контроля денежных потоков", "c) Для создания конкурентных преимуществ", "d) Для увеличения заработка"],
        answer: "b"
    },
    {
        question: "Какой аспект является ключевым для успешного продвижения товаров или услуг на рынке?",
        choices: ["a) Управление командой", "b) Финансы", "c) Маркетинг и продажи", "d) Разработка бизнес-плана"],
        answer: "c"
    }
];
let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    const question = questions[currentQuestion];
    questionContainer.innerHTML = `<h3>${question.question}</h3>`;
    
    let choicesHtml = "";
    question.choices.forEach(choice => {
        choicesHtml += `<div><input type="radio" name="choice" value="${choice[0]}"> ${choice}</div>`;
    });
    questionContainer.innerHTML += choicesHtml;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="choice"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    questionContainer.style.display = "none";
    nextButton.style.display = "none";
    resultContainer.innerHTML = `<p>Правильных ответов: ${score} из ${questions.length}</p>`;
}

nextButton.addEventListener("click", checkAnswer);

showQuestion();