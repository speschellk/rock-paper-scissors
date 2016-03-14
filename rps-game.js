$(document).ready(function() {

  function newGame(){
    $("#pieces-played").html("");  
    $("#game-results").html("");
    $("#new-game").css("display", "none");
  }

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

  $(".btn-primary").click(function() {
    var playerChoice = $(this).text();
    $.get("http://rock-paper-scissors-api.herokuapp.com/", function(data) {
      var computerChoice = data;
      $("#pieces-played").html("You played " + playerChoice + ", I played " + computerChoice);
      $("#game-results").html(winner(playerChoice, computerChoice));
    });
    $("#new-game").show();
  });

  $(".btn-default").click(function() {
    newGame();
  });
});
