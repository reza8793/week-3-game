

	var numberGuesses = 15;
	var lettersGuessedArray = new Array;

	var wins = 0;
	var optionsCurrentWord = ['Galantis','Tiesto','Martin Garrix','The Chainsmokers',
							'Armin Van Buuren', 'Kygo', 'Van She', 'Marshmello', 
							'Axwell Ingrosso','Syn Cole'];
	var blankCurrentWordArray_1st = new Array;

	var  j = 0;

	var w = 0;

	var sameGameCurrentWord;

// Captures Key Clicks
	document.onkeyup = function(event) {

		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// Alerts with user guess
		alert(userGuess);

		// Create code to randomly choose one of the ten bands (Computer), only in the beginning of the game or after the player
		// runs out of chances 

		if (numberGuesses == 15 || numberGuesses == 0 )
		{

			var currentWord = optionsCurrentWord[Math.floor(Math.random()*optionsCurrentWord.length)];

			sameGameCurrentWord = currentWord;
		}

		else {

			currentWord = sameGameCurrentWord;
		}



		

		// Finding out what current word is, then setting the blank world array to that length accordingly 

		// if (currentWord === optionsCurrentWord[0])

		// 	{
		// 		var blankCurrentWordArray_1st = new Array(8);

		// 	}

		// else if (currentWord === optionsCurrentWord[1])

		// 	{
		// 		var blankCurrentWordArray_2nd = new Array(6);
		// 	}

		// else if (currentWord === optionsCurrentWord[2])

		// 	{
		// 		var blankCurrentWordArray_3rd = new Array(13);

		// 	}


			// if else blocks for each option selected

	//	if (currentWord === optionsCurrentWord[0])

		
			// the loop to go through each character of the current word to see if the userGuess matched with the current word
			

			for (var i=0; i<currentWord.length;i++) 
				{

				// if (optionsCurrentWord[0].charAt(i) === userGuess && blankCurrentWordArray_1st.length === optionsCurrentWord[0].length) 

				// 	{

				// 	 blankCurrentWordArray_1st[i] = userGuess;
				// 	 wins++;

				// 	// play song

				// 	break;

				// 	}s

				 if (currentWord.charAt(i) === userGuess) 

					{
					 blankCurrentWordArray_1st[i] = userGuess;

					 w++;   // everytime user guesses a correct character, counter w
					        // gets updated, which will be used for winning criteria next
					 numberGuesses--;       	

							 if (w === currentWord.length) 
						 	{

						 	wins++; // if user guessed the whole word, wins will be updated
						 	// play song
						 	}

					} 



				}

			

				 if (currentWord.indexOf(userGuess) == -1) 

					{
						if (lettersGuessedArray.indexOf(userGuess) == -1) // user doesn't get penalized when 														  same letter guessed again 
						{
							numberGuesses--;
						 	var total = lettersGuessedArray.push(userGuess);
							j++;
						}
					}




		console.log("Current Word " +currentWord);
		console.log("User guessed " + userGuess);
		console.log("Current Word Array " + blankCurrentWordArray_1st);
		console.log("Number of Guesses remaining " + numberGuesses);
		console.log("Letters Guessed Array " + lettersGuessedArray);
		console.log("Wins " + wins);
		

	document.querySelector('#game').innerHTML = '<h1> Current Word: '  + currentWord + '<br> User guessed: ' +  userGuess + '<br>  <br></h1>';

}



