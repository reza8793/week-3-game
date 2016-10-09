

	var numberGuesses = 0;
	var lettersGuessedArray = new Array;

	var wins = 0;
	var optionsCurrentWord = ['Galantis','Tiesto','Martin Garrix','The Chainsmokers',
							'Armin Van Buuren', 'Kygo', 'Van She', 'Marshmello', 
							'Axwell Ingrosso','Syn Cole'];
	var blankCurrentWordArray_1st = new Array(8);

	// blankCurrentWordArray_1st(8).fill("_ ");  

	var  j = 0;

	var w = 0;

	var sameGameCurrentWord;						// variable for current word to stay the same for one game 

	var duplicateChar ;                       // counter for duplicate characters

	var counter = 0;

// Captures Key Clicks
	document.onkeyup = function(event) {

		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// Alerts with user guess
		alert(userGuess);

		// Create code to randomly choose one of the ten bands (Computer), only in the beginning of the game or after the player
		// runs out of chances 



		if (numberGuesses == 0 ) 
		{

			var currentWord = optionsCurrentWord[Math.floor(Math.random()*optionsCurrentWord.length)];

				currentWord = currentWord.toLowerCase();

				alert(currentWord.length);

			 numberGuesses = (currentWord.length)+8;    // numberGuesses depends on the length of the word,
			 											// user gets chances depending on the length of the current word

			sameGameCurrentWord = currentWord; 


		}

		else {

			currentWord = sameGameCurrentWord;
		}


		// function duplicateChar_counter(x) {
			
		// 	for (var b = 0; b <x.length; b++){

		// 		for (var c = b; b < x.length; c++)

		// 		{

		// 			if ((x[i] === x[j]) && b!=c)

		// 				counter++;
		// 		}
		// 	}

		// 	return counter;

		// }



		

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
					// blankCurrentWordArray_1st = blankCurrentWordArray_1st.push('_ ');
					var duplicateChar = 0;

				 if (currentWord.charAt(i) === userGuess) 

					{

								blankCurrentWordArray_1st[i] = userGuess;

									w++;     // everytime user guesses a correct char, counacterter w
					       		 		// gets updated, which will be used for winning criteria next,

					       		 	numberGuesses--; 

								


								// if ((duplicateChar_counter(blankCurrentWordArray_1st)) == 0)  

								// {

								// 	w++;     // everytime user guesses a correct char, counacterter w
					   //     		 		// gets updated, which will be used for winning criteria next,

					   //     		 	numberGuesses--; 
								// }



					        	//alert("duplicate char is "+ duplicateChar );

						 // if (duplicateChar <= 1 && blankCurrentWordArray_1st.length )  // length only increased by 1 

						 // 	{ 
						 // 	numberGuesses--;   // number of remaining guesses decreases when there are no duplicate chars  
							// }

					     	

							 if (w === currentWord.length)    // winning criteria
						 	{

						 	wins++; // if user guessed the whole word, wins will be updated
						 	// play song
						 	}

					} 

				else if (currentWord.charAt(i) === " ") 

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
							j++;
						}
					}




		console.log("Current Word " +currentWord);
		console.log("User guessed " + userGuess);
		console.log("Current Word Array " + blankCurrentWordArray_1st);
		console.log("Number of Guesses remaining " + numberGuesses);
		console.log("Letters Guessed Array " + lettersGuessedArray);
		console.log("Wins " + wins);
		console.log("Duplicate Chars " + duplicateChar);
		console.log("W variable  " + w);
		

	document.querySelector('#game').innerHTML = '<h1> TARGET Word: '  + currentWord + 
	'<br> <br> WINS: ' +  wins +
	'<br> <br> CURRENT WORD : ' +  blankCurrentWordArray_1st.join("")   +
	'<br> <br>NUMBER OF GUESSES REMAINING : ' +  numberGuesses +
	'<br> <br>LETTERS ALREADY GUESSED : ' +  lettersGuessedArray +
	'<br> <br>User guessed: ' +  userGuess + '<br>  <br></h1>';

	// document.querySelector('#game').innerHTML = '<h2> Wins: '  + wins + '<br> 	CURRENT WORD: ' +  blankCurrentWordArray_1st + '<br>  <br></h2>';
	// document.querySelector('#game').innerHTML = '<h2> Wins: '  + wins + '<br> CURRENT WORD: ' +  blankCurrentWordArray_1st + '<br> '
	// NUMBER OF GUESSES REMAINING: '  + numberGuesses + '<br> 	LETTERS ALREADY GUESSED: ' +  lettersGuessedArray + '<br>  <br></h2>';

	


}



