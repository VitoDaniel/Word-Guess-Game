
// GLOBAL SCOPE

// our word-list that computer will choose from: 
var wordList = [ "andorra" , "armenia" , "belarus" , "belize" ,
    "bhutan" , "burundi" , "bomoros" , "byprus" , "djibouti" , 
    "eritrea" , "guinea" , "kyrgyzstan" , "liechtenstein" , 
    "Mozambique" , "Myanmar" , "Namibia" , "Palau" , "Romania" , 
    "Samoa" , "Tajikistan" , "Vanuatu" ];



    // make variables for our wins losses = set to 0, attempts set to 10
    var wins = 0;
    var losses = 0;
    var attempts = 10;

    // var vor wrong guessed letters to display them
    var wrongGuess = [];
    // underscores
    var underScores = [];
    // var for choosen word
    var choosenWord = [];
    // var to hold choosenWord letters
    var choosenWordLtr =[];
    // var for bkanks
    var numBlanks;



    // fired when the entire page loads
    window.onload = function(){

        // link our variables with html id's
        document.getElementById("underScores").innerHTML = underScores.join(" ");
        document.getElementById("livesLeft").innerHTML ="Attempts " + attempts;
        document.getElementById("wins").innerHTML = "Wins " + wins;
        document.getElementById("losses").innerHTML ="Losses " + losses;
    
        



        function startGame() {
            // generating the random word from our list, and pushing underscores.
            choosenWord = wordList[Math.floor(Math.random() * wordList.length)];
                console.log(choosenWord);

            // split choosedWord into individual letters
            choosenWordLtr = choosenWord.split("");
                console.log(choosenWordLtr);

            // get the number of letters of choosenWordLtr
            numBlanks = choosenWordLtr.length;
                console.log(numBlanks);

                attempts = 10;
                wrongGuess = [];
                underScores = [];

                for(i=0; i < numBlanks; i++) {
                    underScores.push("_");
                    }
        }


        function compare(letter) {
            // make sure key is a letter by setting key codes
            if(event.keyCode >= 65 && event.keyCode <=90) {
                // check for matching letter in choosedWord
                var guessedLetter = false;

                    for(var i = 0; i < numBlanks; i++){
                        if(choosenWord[i] == letter) {
                            guessedLetter = true;
                        }
                    } 
                    // location of the letter
                    if (guessedLetter) {
                        for(var i = 0; i < numBlanks; i++){
                            if(choosenWord[i] == letter) {
                                underScores[i] = letter;
                            }
                        }
                    }
                    // if the letter is not in the word - store at guessed wrong
                    else {
                        wrongGuess.push(letter);
                        attempts--;
                    }

            }

        }

        // function to count wins and losses
        function count(){

            document.getElementById("livesLeft").innerHTML = "Attempts" + " " + attempts;
            document.getElementById("underScores").innerHTML = underScores.join(" ");
            document.getElementById("wrongGuess").innerHTML = "Guessed Wrong" + " " + wrongGuess.join(" ");


            if(choosenWordLtr.toString() == underScores.toString()) {
                wins++;
                alert("Well done!");


                // startGame();
            }
            else if(attempts < 1) {
                losses++;
                alert("You need to travel more!");

                // startGame();
            }

        }
        
    startGame();

        document.onkeyup = function(event) {
            // put the pressed key into letterGuess
            var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
            // send the letter to the compare loop
            compare(letterGuess);
            count();
        }
    }