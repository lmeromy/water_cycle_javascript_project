const PubSub = require('../helpers/pub_sub.js');


const QuizView = function (container) {
  this.container = container;
};

QuizView.prototype.bindEvents = function () {
  PubSub.subscribe('WaterData:quiz-loaded', (event) => {
    // console.log('from quiz view', event.detail);
    // console.log('this', this);

    // create quiz elements to manipulate
    const quizContainer = document.querySelector('#quiz');
    const resultsContainer = document.querySelector('#results');
    const submitButton = document.querySelector('#submit');

    this.buildQuiz(event.detail, quizContainer, resultsContainer, submitButton)
  })
};


QuizView.prototype.buildQuiz = function (questions, quizContainer, resultsContainer, submitButton) {

  function renderQuestions(questions, quizContainer){
    // need a place to store the output and the answer choices
    let displayQuestions = [];
    let answers;

    // for each question...
    for(let i=0; i<questions.length; i++){

      // first reset the list of answers
      answers = [];

      // for each available answer to this question...
      for(let letter in questions[i].answers){

        // add html radio button
        answers.push(
          '<label>'
          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
          + letter + ': '
          + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the displayQuestions
      //note: .join is a js method which takes all the elements of an array and joins them into one string. In our case this will give us a big string of html which will render stuff in the DOM. Delimiter is passed in as an arguemnt. Default is a comma, but here we specify ''.
      displayQuestions.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = displayQuestions.join('');  // see above for info on .join method
  }

  function showResults(questions, quizContainer, resultsContainer){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let userAnswer = '';
    let numCorrect = 0;

    // for each question...
    for(let i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // if answer is correct
      if(userAnswer === questions[i].correctAnswer){
        // add to the number of correct answers & color the answers blue
        numCorrect++;
        answerContainers[i].style.color = 'blue';
      }
      // if answer is wrong or blank, color the answers red
      else{
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' questions correct. Good try!';
  }


  // render the questions
  renderQuestions(questions, quizContainer);


  // show results when submitted
  submitButton.addEventListener('click', () => {
    showResults(questions, quizContainer, resultsContainer)
  });

  //onclick is another sort of event listener function...this works too:
  // submitButton.onclick = function(){
  //   showResults(questions, quizContainer, resultsContainer);
  // }

};

module.exports = QuizView;
