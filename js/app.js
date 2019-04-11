
console.log("Hello");
let currentQuestion;
let  playerOneScore = 0;
console.log(playerOneScore);
// // 1. Create a grid:check!!!!
// //  with -three columns and 
// // //-6 rows (5 rows for $100-$500, and a header row).
// $('.question').hide();
let corrAnswer;
$('.bill').click((e) => {
    $('.q-box').empty();
    $('.a-box').empty();
    for(let i=0; i < questionArray.length; i++){
        // console.log('in the loop');
        const question = questionArray[i];
        if(question.id == e.target.id){
            currentQuestion = question;
            // corrAnswer = question.answers;
            // console.log(corrAnswer);
            $('.q-box').append(question.question);
            answerGrabber(question.answers);
            // answerChecker(question)
        }
    }
})   
//corrAnswer.answer
//corrAnswer = question object
//corrAnswer.answer at index corrAnswer.correctAnswer
$('#answerBox').click((e) =>{
const answerChoice = $(e.target).text();
console.log(answerChoice + 'answerChoice');
// console.log(corrAnswer + 'corrAnswer');
const indexCorrAnswer = currentQuestion.correctAnswer;
const corrAnswer = currentQuestion.answers[indexCorrAnswer];
// console.log(corrAnswer.answers[indexCorrAnswer] + 'corrAnswer.answers[indexCorrAnswer]');
    if(answerChoice === corrAnswer){
        console.log('You are correct!');
        playerOneScore += currentQuestion.points
        
        // (playerOneScore + currentQuestion.points) 
        // console.log(playerOneScore + currentQuestion.points);
    }else{
        console.log('You are incorrect');
        playerOneScore -= currentQuestion.points
    }
    return playerOneScore;
})

$('#playerScore').append(playerOneScore);
const answerGrabber = (ans) => {
    for(i=0; i<ans.length; i++){
        console.log(ans[i]);
        const string = `<div id=ans-${i}>${ans[i]}</div>`;
        console.log(string);
        $('.a-box').append(string)
    }
}

//we need to grab e.target.id
// const playerOne = {
//     points: 0,
//     name: 'Kebert Xela'
// }
const questionArray = [
    {
      topic: 'html',
      id: 0,
      points: 100,
      question: 'What does HTML stand for?',
      answers:['hyperlinks and text markup language?', 'hypertext markup language'], 
      correctAnswer: 1
    }, {
      topic: 'HTML',
      id: 1,
      points: 200,
      question: 'Choose the correct HTML element for the largest heading?',
      answers: ['head', 'h6', 'header', 'h1'],
      correctAnswer: 3
    }, {
      topic: 'HTML',
      id: 2,
      points: 300,
      question: 'What is the correct HTML for making a text input field?',
      answers: ['input type="textfield"', 'textfield', 'textinput type="text"', 'input type="text"'],
      correctAnswer: 3
    }, {
      topic:'HTML',
      id: 3,
      points: 400,
      question: 'The _______ attribute lets us tell the browser to play the audio track continuously until the user stops or pauses it:',
      answers: ['repeat', 'play', 'controls', 'loop'],
      correctAnswer: 0
    }, {  
      topic: 'HTML',
      id: '4',
      points: 500,
      question: "Consider thefollowing code: input type='text' patter=/d{1,2}/\d{1,2}/\d{4} What information format does this pattern check for?",
      answers: ['Digits', 'Country code', 'Date', 'Price'],
      correctAnswer: 1    
    }, {
      topic: 'CSS',
      id: 5,
      points: 100,
      question: 'What does the following mean to the computer? div p {color: #ff0000;}',
      answers: ['Make text in all divs and all paragraphs in this document be bright red', 'Make the background in all divs that are of the class "p" be bright red', 'Make the text inside any divs inside of any paragraph be bright red', 'Make the text inside any paragraph that is inside any div be bright red'],
      correctAnswer: 3
    }, {  
      topic: 'CSS',
      id: 6,
      points: 200,
      question: 'DIVs should only use IDs and spans should only use Classes',
      answers: ['true', 'false'],
      correctAnswer: 1
    }, {
      topic: 'CSS',
      id: 7,
      points: 300,
      question: 'What is the main difference between a DIV and a SPAN?',
      answers: ['Spans are, by default, inline and DIVs are by default Block', 'DIVs are, by default, inline and SPANs are by default Block', 'There is no real difference', 'Spans can be inside DIVs but DIVs are not supposed to go inside spans', 'Both a and d'],
      correctAnswer: 3
    }, {  
      topic: 'CSS',
      id: 8,
      points: 400, 
      question: 'How would you select the last item in an unordered list?',
      answers: ['ul li:last-child', 'ul:last-child li', 'ul:last-child(li)'],
      correctAnswer: 2
    }, {
      topic: 'CSS',
      id: 9,
      points: 500,
      question: 'Which is a correct way to add a class using jQuery?',
      answers: ['addEventListenter()', 'addClass()', 'addCSS()', 'addHTML'],
      correctAnswer: 1
    }, {  
      topic: 'JS', 
      id: 10,
      points: 100,
      question:  'Which is the correct way to write a JavaScript array?',
      answers:['var txt = new Array(1:"tim",2:"kim",3:"jim")', 'var txt = new Array:1=("tim")2=("kim")3=("jim")', 'var txt = new Array("tim","kim","jim")', 'var txt = new Array="tim","kim","jim"'], 
      correctAnswer: 2
    }, {
      topic: 'JS', 
      id: 11,
      points: 200,
      question: 'Which of the following best describes JavaScript?',
      answers: ['a low-level programming language.', 'a scripting language precompiled in the browser.', 'a compiled scripting language.', 'an object-oriented scripting language.'],
      correctAnswer: 3
    }, {  
      topic: 'JS', 
      id: 12,
      points: 300, 
      question: 'Which of the following is not considered a JavaScript operator?',
      answers: ['new', 'this', 'delete', 'typeof'],
      correctAnswer: 1
    }, {
      topic: 'JS',
      id: 13, 
      points: 400,
      question: 'The syntax of Eval is ________________.',
      answers: ['[objectName.]eval(numeric),', '[objectName.]eval(string)', '[EvalName.]eval(string)'],
      correctAnswer: 1
    }, {  
      topic: 'JS', 
      id: 14,
      points: 500,
      question: ' _________ is a wrapped Java array, accessed from within JavaScript code.',
      answers: ['JavaArray', 'JavaObject', 'JavaClass', 'JavaPackage'],
      correctAnswer: 2
    }]
    







//for(let 0.questionArray.length)
// })
// $('#html-row-1').click(() => {

// })


    
    






// 2. the header row should have 3 columns: HTML, CSS, JS
// 3. the columns themselves should be $100-$500 (based on dificulty)
//     -row 1 = headers 
//     -row 2 = $100 questions
//     -row 3 = $200 questions
//     -row 4 = $300 questions
//     -row 5 = $400 questions
//     -row 6 = $500 questions
// 4. when a player chooses a category and row, clicking on that square should reveal a 
// question with multiple choice answers built into the square -(this could also 
//     be a prompt), or a new screen entirely

// 5. a second click should reveal either on one of the multiple choice answers or on a t/f 
// prompt should award the correct amount of $ to the player

// 6. a. a correct answer will add the $ amount to the player's score and remove the 
//         question from the grid/table
//     b. an incorrect answer will: 1.subtract the amounT OF $ the question was worth from
//                                     the players' $/score
//                         ### extra 2. an incorrect answer will move onto the next player

// 7.