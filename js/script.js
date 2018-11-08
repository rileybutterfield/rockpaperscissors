// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
var winner;
var computerChoice;
var choices = ['rock', "paper", "scissors"]

$("#shoot").click(function(){
   userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    var compChoice = Math.floor((Math.random()) * 3)
    var compChoiceText = choices[compChoice]
      $("#computerChoice").text(compChoiceText);
    console.log("computer has", compChoiceText)
    var userChoiceWon
    
    if (userChoice === "rock"){
        userChoiceWon = compChoiceText === "scissors"
    }
    else if (userChoice === "scissors"){
        userChoiceWon = compChoiceText === "paper"
    }
    else if (userChoice === "paper"){
        userChoiceWon = compChoiceText === "rock"
    }
    
  
       

  console.log(userChoice, compChoiceText)
    if (userChoiceWon === true){
        $("#result").text("User wins!!!")
    }
    if (userChoiceWon === false){
        $("#result").text("Computer wins!!!")
    }
    if (userChoice === compChoiceText){
      $("#result").text("It's a tie!!!")
    }
});



// DOCUMENT READY FUNCTION BELOW

