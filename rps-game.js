$(document).ready(function() {

  // resets html and css to new game settings
  function newGame(){
    $("#pieces-played").html("");  
    $("#game-results").html("");
    $("#new-game").css("display", "none");
  }

  // compares player and computer choice; returns winner
  function winner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
      return "Draw";
    
    if (playerChoice === "Paper") {
      if (computerChoice === "Rock") {
        return "You win";
      } else if (computerChoice === "Scissors") {
        return "You lose";
      }
    } else if (playerChoice === "Scissors") {
      if (computerChoice === "Rock") {
        return "You lose";
      } else if (computerChoice === "Paper") {
        return "You win";
      }
    } else if(playerChoice === "Rock") {
      if (computerChoice === "Paper") {
        return "You lose";
      } else if (computerChoice === "Scissors") {
        return "You win";
      }
    }
  }

  // rock, paper, scissors event listeners
  $(".btn-primary").click(function() {
    var playerChoice = $(this).attr("id");

    // API call to heroku app
    $.get("http://rock-paper-scissors-api.herokuapp.com/", function(data) {
      var computerChoice = data;

      // states which choices were played
      $("#pieces-played").html("You played " + playerChoice + ", I played " + computerChoice);

      // states winner
      $("#game-results").html(winner(playerChoice, computerChoice));
    });

    // shows "Play Again" button
    $("#new-game").show();
  });

  // play new game event listener to start new game
  $(".btn-default").click(function() {
    newGame();
  });
});
