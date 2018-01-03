    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
        // Creating variables to hold the number of wins, losses, and ties. They start at 0.
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        var userGs = [];
    
        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {
    
          // Determines which key was pressed.
          var userGuess = event.key;
          userGs = userGs + " " + userGuess;
    
          // Randomly chooses a choice from the options array. This is the Computer's guess.
    
    
          // Reworked our code from last step to use "else if" instead of lots of if statements.
    
          // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
          //   while (guessesLeft !== 0) {
          //     if (userGuess === computerGuess) {
          //       wins++;
          //       guessesLeft = 9;
          //     } else if (userGuess !== computerGuess) {
          //       guessesLeft = guessesLeft - 1;
    
          //    }
          //   }
          // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
          if (userGuess == computerGuess) {
            wins++;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guessesLeft = 9;
            userGs = " ";
            //array = 0
          } else {
            guessesLeft = guessesLeft - 1;
          }
    
          if (guessesLeft == 0) {
            losses++;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guessesLeft = 9;
            userGs = " ";
          }
          var html =
           "<h1>Psychic Game</h1>" +
           "<p>Guess what letter I'm thinking of</p>" +
            // "<p>You chose: " + userGuess + "</p>" +
            // "<p>The computer c"hose: " + computerGuess + "</p>" +
            "<p>wins: " + wins + "</p>" +
            "<p>losses: " + losses + "</p>" +
            "<p>guesses left: " + guessesLeft + "</p>" +
            "<p>guesses so far: " + userGs + "</p>";
    
          // Set the inner HTML contents of the #game div to our html string
          document.querySelector("#game").innerHTML = html;
        };
    