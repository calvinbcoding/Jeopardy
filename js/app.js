
console.log("Hello");

// // 1. Create a grid:check!!!!
// //  with -three columns and 
// // //-6 rows (5 rows for $100-$500, and a header row).
$('.question').hide();


$('#html-row-1').click(() => {
    $('.question').toggle();
})
// const $q1r1 = $('<div/>').addClass('html-question').html("question asked for HTML row 1?")
// const $q1r2 = $('<div/>').addClass('html-question').html("question asked for HTML row 1?")
// const $q1r3 = $('<div/>').addClass('html-question').html("question asked for HTML row 1?")
// const $q1r4 = $('<div/>').addClass('html-question').html("question asked for HTML row 1?")
// const $q1r5 = $('<div/>').addClass('html-question').html("question asked for HTML row 1?")

// const $q2r1 = $('<div/>').addClass('question').html("question asked for HTML row 1?")
// const $q1r1 = $('<div/>').addClass('question').html("question asked for HTML row 1?")







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