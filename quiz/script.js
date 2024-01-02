const quizData = [
  {
    question: 'What is the capitol of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which programming language is also a gem?',
    options: ['Ruby', 'Python', 'Java', 'C++'],
    correctAnswer: 'Ruby'
  },
  // Add more questions as needed here
];

let currentQuestion = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options');

  questionElement.textContent = quizData[currentQuestion].question;
  optionsContainer.innerHTML = '';

  quizData[currentQuestion].options.forEach((option) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(option));

    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestion].correctAnswer;
  const feedback = selectedOption === correctAnswer ? 'Correct!' : 'Wrong';
    alert(feedback);
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    alert('Quiz completed!');
  }
}

// Initial question load
loadQuestion();