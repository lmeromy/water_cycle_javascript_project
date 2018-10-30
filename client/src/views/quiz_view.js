const PubSub = require('../helpers/pub_sub.js');


const QuizView = function (container) {
  this.container = container;
};

QuizView.prototype.bindEvents = function () {
  PubSub.subscribe('WaterData:quiz-loaded', (event) => {
    // console.log('from quiz view', event.detail);
    // console.log('this', this);
    const quizContainer = document.querySelector('#quiz');
    const resultsContainer = document.querySelector('#results');
    const submitButton = document.querySelector('#submit');
    this.buildQuiz(event.detail, quizContainer, resultsContainer, submitButton)
  })
};


QuizView.prototype.buildQuiz = function (questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer){
    // code will go here
    // we'll need a place to store the output and the answer choices
    let output = [];
    let answers;

    // for each question...
    for(var i=0; i<questions.length; i++){

      // first reset the list of answers
      answers = [];

      // for each available answer to this question...
      for(item in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
          + '<input type="radio" name="question'+i+'" value="'+item+'">'
          + item + ': '
          + questions[i].answers[item]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].q_text + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    // code will go here
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }


  // show the questions
  showQuestions(questions, quizContainer);

  // when user clicks submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

};

// QuizView.prototype.buildQuiz = function (quiz) {
//
//   const questions = [];
//   quiz.forEach((currentQ, Qnumber) => {
//     const multiChoice = [];
//     // and for each available answer...
//     for(let item of currentQ.answers){
//
//       // ...add an HTML radio button
//       multiChoice.push(
//         `<label>
//           <input type="radio" name="question${Qnumber}" value="${item}">
//           ${item} :
//           ${currentQ.answers[item]}
//         </label>`
//       );
//     }
//     // add this question and its answers to the output
//  questions.push(
//    `<div class="question"> ${currentQ.q_text} </div>
//    <div class="answers"> ${multiChoice.join('')} </div>`
//  );
//
//     // let question = document.createElement('.question');
//     // question.textContent = currentQ.q_text;
//     // questions.push(question);
//     // return questions
//   })
//
//  // finally combine our output list into one string of HTML and put it on the page
//   // const quiz1 = document.querySelector('#quiz')
//   this.container.appendChild(questions);
//
// };


module.exports = QuizView;
