
// GLOBAL SCOPE

// our word-list that computer will choose from: 
var wordList = [ "andorra" , "armenia" , "belarus" , "belize" ,
    "bhutan" , "burundi" , "comoros" , "byprus" , "djibouti" , 
    "eritrea" , "guinea" , "kyrgyzstan" , "liechtenstein" , 
    "mozambique" , "myanmar" , "namibia" , "palau" , "romania" , 
    "samoa" , "tajikistan" , "vanuatu" ];



    // make variables for our wins losses = set to 0, attempts set to 10
    var wins = 0;
    var losses = 0;
    var attempts;

    // var vor wrong guessed letters to display them
    var wrongGuess;
    // underscores
    var underScores;
    // var for choosen word
    var choosenWord;
  


    // fired when the entire page loads
    window.onload = function(){

        function startGame() {
            // generating the random word from our list, and pushing underscores.
            choosenWord = wordList[Math.floor(Math.random() * wordList.length)];
                console.log(choosenWord);

                attempts = 12;
                wrongGuess = [];
                underScores = [];

                for(i=0; i < choosenWord.length; i++) {
                    underScores.push("_");
                }

                // link our variables with html id's
                document.getElementById("underScores").innerHTML = underScores.join(" ");
                document.getElementById("livesLeft").innerHTML ="Attempts: " + attempts;
                document.getElementById("wins").innerHTML = "Wins: " + wins;
                document.getElementById("losses").innerHTML ="Losses: " + losses;
    
        }

        document.onkeyup = function(event) {
            // make sure key is a letter by setting key codes
            if(event.keyCode >= 65 && event.keyCode <=90) {
                // put the pressed key into letterGuess
                var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
                // send the letter to the compare loop
                compare(letterGuess);
            }
    
        }


        function compare(letter) {
            if(wrongGuess.indexOf(letter)>-1) {
                return;
            }
        
                // check for matching letter in choosedWord
                var guessedLetter = false;

                    for(var i = 0; i < choosenWord.length; i++){
                        if(choosenWord[i] == letter) {
                            guessedLetter = true;
                            underScores[i] = letter;
                        }
                    } 

                    // location of the letter
                    if (!guessedLetter) {
                        wrongGuess.push(letter);
                        attempts--;
                    }
            count();
        }

        // function to count wins and losses
        function count(){

            document.getElementById("livesLeft").innerHTML = "Attempts: " + " " + attempts;
            document.getElementById("underScores").innerHTML = underScores.join(" ");
            document.getElementById("wrongGuess").innerHTML = "Guessed Wrong: " + " " + wrongGuess.join(" ");
            
         
            if(choosenWord == underScores.join("")) {

                wins++;
                alert("Well done!");
                document.getElementById("wins").innerHTML = "wins: " + " " + wins;

                startGame();
            }
            else if(attempts < 1) {
                losses++;
                alert("You need to travel more!");
                document.getElementById("losses").innerHTML = "losses: " + " " + losses;

                startGame();
            }

        }
        
    startGame();

        
    }