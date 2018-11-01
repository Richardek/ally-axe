const QUESTIONS = [
{
  number: 1, 
  text: `Which is the following is the best way to gain results in the gym`,
  answer1: `Working out hard 7 days a week`,
  answer2: `Working out, eating properly, and making sure you get enough sleep`,
  answer3: `Lifting as heavy as you can all the time`,
  answer4: `Working out without cardio, because cardio kills gains`

},
{
  number: 2, 
  text: `Which supplements do you need in order to gain results in the gym?`,
  answer1: `protein powder, creatine, BCAA`,
  answer2: `protein powder, creatine, fat burner`,
  answer3: `protein powder, creatine, BCAA, fat burner`,
  answer4:  `you don't need any supplements to gain results in the gym, nutruition, training, and enough sleep is all you need`
},
{
  number: 3,
  text: `Which one is the best kind of traning`,
  answer1: `full body training`,
  answer2: `split traning`,
  answer3: `working out twice a day, cardio in the mourning, weights in the afternoon`,
  answer4:  `there is no such thing as the best kind of trainng, just find a plan that you can stick to`,
},
{
  number: 4,
  text: `Which diet is the best one?`,
  answer1: `keto`,
  answer2: `moderate protein, high carbs, low fats`,
  answer3: `moderate protein, high fats, moderate carbs`,
  answer4: `The diet that you can stick to, is the best one`
},
{
  number: 5,
  text: `how often should you train a week?`,
  answer1: `7 days a week, no off days`,
  answer2: `it depends on your fitness goals, and how often you can make it to the gym`,
  answer3: `at least 5 times a day`,
  answer4: `6 days, 3 days on, one day off`
},
{
  number: 6,
  text: `Which kind of cardio is the best?`,
  answer1: `high intensity cardio`,
  answer2: `low intensity cardio`,
  answer3: `moderate intensity cardio`,
  answer4: `any kind of cadrio is fine, however I advise against moderate intensity cadrio, because that has the greatest chance of causing muscle loss`
},
{
  number: 7,
  text: `When your current workout plan isn't working what should you do?`,
  answer1: `switch to a different one asap`,
  answer2: `stay with the plan for at least 6 weeks, then make adjustments`,
  answer3: `copy what the strongest guy in the gym is doing`,
  answer4: `understand some people just aren't going to get any results`
},
{
  number: 8,
  text: `Should I have a cheat day?`,
  answer1: `You should never have a cheat day`,
  answer2: `if you have a cheat day you can't eat the next day`,
  answer3: `cheat days once a week are fine, however be prepared for the consequences in the morning`,
  answer4: `just do extra cardio on the treadmill,you can outwork a bad diet`
},
{
  number: 9,
  text: `Do I need to work out legs?`,
  answer1: `No girls only care about big arms and a nice chest`,
  answer2: `Yes, never skip leg day,.....I repeat NEVER SKIP LEG DAY!!`,
  answer3: `No just never wear shorts, problem solved`,
  answer4: `why waste time working out legs when you can do more curls bro?`

},
{
  number: 10,
  text: `Whats the most important thing about going to the gym?`,
  answer1: `CONSISTENCY!!!`,
  answer2: `you need to look at the first answer my friend`,
  answer3: `I think you're lost, go back up`,
  answer4: `if you're reading this, it's to late`
  }

];

const ANSWERS = [
  `Working out, eating properly, and making sure you get enough sleep`,
  `you don't need any supplements to gain results in the gym, nutruition, training, and enough sleep is all you need`,
  `there is no such thing as the best kind of trainng, just find a plan that you can stick to`,
  `The diet that you can stick to, is the best one`,
  `it depends on your fitness goals, and how often you can make it to the gym`,
  `any kind of cadrio is fine, however I advise against moderate intensity cadrio, because that has the greatest chance of causing muscle loss`,
  `stay with the plan for at least 6 weeks, then make adjustments`,
  `cheat days once a week are fine, however be prepared for the consequences in the morning`,
  `Yes, never skip leg day,.....I repeat NEVER SKIP LEG DAY!!`,
  `CONSISTENCY!!!`
];

let questionNum = 1;
let questionAnswers = 0;
let correctAnswers = 0;



function questionTemplate(correctAnswers, question, questionsAnswered) {
  let allOptions = "";
  let numberOfOptions = 4;

for (let i = 0; i < numberOfOptions; i ++){
    let currentOption = "answer" + (i+1);
    allOptions += `<label>
                    <input  class="answer" type="radio" name="option" required value ="${question[currentOption]}" ></input>
                    <span>${question[currentOption]}</span>
                  </label>`;
  }
  
  return `
    <section class="question-page" role="main">
    <h4 class= "question" ><span class = "ds"> ${question.text} </span></h4>
    
    <form>
      <section class = "quest">
        ${allOptions}
      </section>
      <button class="js-submit-button" type = "submit">Submit</button>

    </form>

    <div class="status-bar">
      <span class="question-count">Question: ${question.number}/10</span>
      <span class="score-count">Score: ${correctAnswers}/${questionsAnswered}</span>
    </div>
  </section>
  `;
}

function startButton() {
  $('.js-start-button').click(function(event) {
    nextQuestion();
  });
}

function nextQuestion() {

  const question = QUESTIONS[questionNum - 1];

  const questionsAnswered = questionNum - 1;

  $('.container').html(questionTemplate(correctAnswers, question, questionsAnswered));
  
}




function submitButton() {
  $('body').on('submit', 'form', function(event) {
    event.preventDefault()

    //const answer = $('input:checked').siblings('span');
    const answer = $('input[name=option]:checked').val(); 


    const userIsCorrect = checkAnswer(answer);
    if(userIsCorrect) {
      correctFeedback();
    } else {
      incorrectFeedback();
    }
  });
}

function checkAnswer(answer) {
  return answer === ANSWERS[questionNum - 1];
}

function correctFeedback() {
  $('.container').html(rightFeedback);
  iterateCorrectAnswers();
}

const rightFeedback = `
  <section class="feedback-page" role="main">
    <h3>Correct!</h3>
    <img src="https://previews.123rf.com/images/dejanj01/dejanj011707/dejanj01170700009/82766200-winking-smiley-gesturing-with-his-hand-emoticon-thumbs-up-showing-positive-mood-.jpg" alt="wink" class ="pic">
    <button class="js-next-button">Next</button>
  </section>
`;

function incorrectFeedback(){
  $('.container').html(wrongFeedback(questionNum))
}

{
  function wrongFeedback(questionNum) {
  return `
    <section class="feedback-page" role="main">
      <h3>No! The correct answeer was ${ANSWERS[questionNum - 1]}!</h3>
      <img src="https://www.emojirequest.com/images/ThumbsDownEmoji.jpg " alt="wrong" class = "pic" >
      <button class="js-next-button">Next</button>
    </section>
`;
}

}


function nextButton() {
  $('.container').on('click', '.js-next-button', function(event) {

    if(questionNum === 10) {
      createResultsPage(correctAnswers);
    } else {
      iterateQuestion();
      nextQuestion();
  }
  });
}


function iterateCorrectAnswers() {
  correctAnswers++;
}

function iterateQuestion()
{
    questionNum++;

}

function createResultsPage(correctAnswers) {
  $('.container').html(`
    <section class="final-page">
      <h3>Final Score: ${correctAnswers} out of 10</h3>
      <button class="js-restart-button">Play Again?</button>
    </section>
  `);
}


function restartButton() {
  $('.container').on('click', '.js-restart-button', function(event) {

    questionNum = 1;

    correctAnswers = 0;

    nextQuestion();
  });
}


function handleButtons() {
  startButton();
  submitButton();
  nextButton();
  restartButton();

}
handleButtons();