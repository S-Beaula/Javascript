// script.js
const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "What is 5 + 3?",
      answers: ["5", "8", "12", "15"],
      correct: 1,
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
      correct: 0,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.querySelectorAll(".answer");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const current = questions[currentQuestion];
    questionEl.textContent = current.question;
    answersEl.forEach((btn, index) => {
      btn.textContent = current.answers[index];
      btn.dataset.correct = index === current.correct;
      btn.classList.remove("correct", "wrong");
    });
    nextBtn.style.display = "none";
  }
  
  function selectAnswer(e) {
    const isCorrect = e.target.dataset.correct === "true";
    if (isCorrect) {
      e.target.classList.add("correct");
      score++;
    } else {
      e.target.classList.add("wrong");
    }
    answersEl.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.correct === "true") btn.classList.add("correct");
    });
    nextBtn.style.display = "block";
  }
  
  function showResult() {
    questionEl.classList.add("hidden");
    document.querySelector(".answers").classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score;
  }
  
  answersEl.forEach((btn) => btn.addEventListener("click", selectAnswer));
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  loadQuestion();
  