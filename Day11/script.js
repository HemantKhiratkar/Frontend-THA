const quizData = [
    {
        question: "Which of these helps add some ~style~ to HTML pages?",
        a: "CSS",
        b: "C#",
        c: "JAVA",
        d: "JavaScript",
        correct: "a",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "When was the first computer game invented?",
        a: "1925",
        b: "1971",
        c: "1958",
        d: "1960",
        correct: "c",
    },
    {
      question: "Finally, as of 2019, which of these was the world's biggest tech company?",
      a: "Apple",
      b: "Samsung",
      c: "Microsoft",
      d: "Sony",
      correct: "a",
    },
    {
      question: "Which technology was named after the nickname of Denmak and Norway's 10th century king, Harald Gormsson?",
      a: "Router",
      b: "Bluetooth",
      c: "Wifi",
      d: "NOTA",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answers = document.querySelectorAll(".answer");
  const question = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
  
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function getSelected() {
    let answer = undefined;
  
    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.id;
        }
    });
  
    return answer;
  }
  
  function deselectAnswers() {
    answers.forEach((ans) => {
        if(ans.checked)
          ans.checked = false;
    });
  }
  
  submitBtn.addEventListener("click", () => {
    
    
// check to see the answer
    const answer = getSelected();
  
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
  
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button> 
            `;
        }
  
    }
  }); 