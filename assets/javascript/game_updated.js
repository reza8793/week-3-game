

						// number of guesses the player gets 
	var lettersGuessedArray = new Array;		// empty array for the letters already guessed 
	var numberGuesses = 15;
	var wins = 0;
	var optionsCurrentWord = ['Galantis','Tiesto','Martin Garrix','The Chainsmokers',
							'Armin Van Buuren', 'Kygo', 'Van She', 'Marshmello', 
							'Axwell Ingrosso','Syn Cole'];  // wordbank 

	var blankCurrentWordArray_1st = new Array;				// blank word array that will be filled with userguesses 

	
// Captures Key Clicks


function gameStart() {

		// if (numberGuesses === 15 || numberGuesses === 0 || wins === 1 )	
		//  {

			var numberGuesses = 15;	

			var currentWord = optionsCurrentWord[Math.floor(Math.random()*optionsCurrentWord.length)];

			currentWord = currentWord.toLowerCase();


				for (var i=0; i<currentWord.length;i++) 
				{

					var blah = blankCurrentWordArray_1st.push("_ ");

				}


		//}	

	}
	

	gameStart();

	document.onkeyup = function(event) {

		// gameStart();

		
		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// Alerts with user guess
		alert(userGuess);

		// Create code to randomly choose one of the ten bands (Computer), only in the beginning of the game or after the player
		// runs out of chances 

		//alert ("current word is "+currentWord);

			for (var i=0; i<currentWord.length;i++) 
				{ 	
					
				 if (currentWord.charAt(i) === userGuess) 

						{

						blankCurrentWordArray_1st[i] = userGuess;

						}

				else if (currentWord.charAt(i) === " ") // fill blank space with blank space

						{

					 	blankCurrentWordArray_1st[i] = " ";
						}
				}

				 if (currentWord.indexOf(userGuess) == -1)  // criteria for Letters Already Guessed, if the userGuess doesn't
				 											// match any char in target word, do the following
					{
						if (lettersGuessedArray.indexOf(userGuess) == -1) // Criteria such that user doesn't get penalized
											 							  //  when  same letter guessed again and Letters Already 
						{												  // Guessed Array only gets updated once	
							numberGuesses--;
						 	var total = lettersGuessedArray.push(userGuess);
						}
					}


				if (blankCurrentWordArray_1st.indexOf("_ ") == -1) // Criteria for winning 
											 							 
						{												  	
							wins++;
							alert("You have won the game!");
							

						}

				if (numberGuesses === 0) // Criteria for winning 
											 							 
						{												  	
							alert("You have lost the game!");
							
						}


		console.log("Current Word " +currentWord);
		console.log("User guessed " + userGuess);
		console.log("Current Word Array " + blankCurrentWordArray_1st);
		console.log("Number of Guesses remaining " + numberGuesses);
		console.log("Letters Guessed Array " + lettersGuessedArray);
		console.log("Wins " + wins);
	
		

	document.querySelector('#game').innerHTML = '<h1> TARGET Word: '  + currentWord + 
	'<br> <br> WINS: ' +  wins +
	'<br> <br> CURRENT WORD : ' +  blankCurrentWordArray_1st.join("")   +
	'<br> <br>NUMBER OF GUESSES REMAINING : ' +  numberGuesses +
	'<br> <br>LETTERS ALREADY GUESSED : ' +  lettersGuessedArray +
	'<br> <br>User guessed: ' +  userGuess + '<br>  <br></h1>';

	
}



