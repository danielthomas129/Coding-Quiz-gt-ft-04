var fiveMinutes = 60 * 5;
var timer = 0;

let questions = [
    {
      question: "Commonly used data types DO NOT include?",
        choiceA: "Strings",
        choiceB: "Booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "alerts"
    }, {
      question: "Arrays in JavaScript can be used to store/?",
        choiceA: "Random Access Memory",
        choiceB: "Randomely Access Memory",
        choiceC: "Run Aceapt Memory",
        choiceD: "None of these",
        correct: "None of these"
    }, {
      question: "String values must be enclosed within ______ when being assigned to variables",
        choiceA: "Random Access Memory",
        choiceB: "Randomely Access Memory",
        choiceC: "Run Aceapt Memory",
        choiceD: "None of these",
        correct: "None of these"
    }, {
      question: "The condition in an if/else statement is enlosed with _____.",
        choiceA: "Random Access Memory",
        choiceB: "Randomely Access Memory",
        choiceC: "Run Aceapt Memory",
        choiceD: "None of these",
        correct: "None of these"
    }, {
      question: "A very useful tool used during development & debugging for printing content to the debugger is?",
        choiceA: "JavaScript",
        choiceB: "Randomely Access Memory",
        choiceC: "Run Aceapt Memory",
        choiceD: "None of these",
        correct: "None of these" 
    }
];
  
  let question_count = 0;
  let points = 0;


  function next() {
  
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {

      sessionStorage.setItem("time", timer);
      // clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].correct) {
      points += 10;
      sessionStorage.setItem("points", points);
      console.log("Correct answer");
    } else {
      console.log("Wrong Answer");

    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {

    console.log("function is working " + count)

    let question = document.getElementById("questions");
    let first = questions[count].choiceA;
    let second = questions[count].choiceB;
    let third = questions[count].choiceC;
    let fourth = questions[count].choiceD;


    
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>

  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }

    function startTimer(duration) {
      timer = duration, 0, 0;
      setInterval(function () {
          display = document.querySelector('span.time');
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          display.textContent = minutes + ":" + seconds;
  
          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
  }
  
  window.onload = function () {
      

      show(question_count);
      startTimer(fiveMinutes);
  };