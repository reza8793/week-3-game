

	var numberGuesses = 0;						// number of guesses the player gets 
	var lettersGuessedArray = new Array;		// empty array for the letters already guessed 

	var wins = 0;
	var optionsCurrentWord = ['Galantis','Tiesto','Martin Garrix','The Chainsmokers',
							'Armin Van Buuren', 'Kygo', 'Van She', 'Marshmello', 
							'Axwell Ingrosso','Syn Cole'];  // wordbank 

	var blankCurrentWordArray_1st = new Array;				// blank word array that will be filled with userguesses 

	var  j = 0;	

	var w = 0;

	var sameGameCurrentWord;					// variable for current word to stay the same for one game 

	var duplicateChar ;                       // counter for duplicate characters

	var counter = 0;

// Captures Key Clicks

	function duplicateChar_counter(x) 
		{
				counter = 0;  
				
				for (var b = 0; b <x.length; b++){

					for (var c = b+1; c <x.length; c++)
					{

						if (x[b] === x[c] && x[b] != '') 
						{
							counter++;
						}	
					}
				}
				return counter;

				// if (currentWord.indexOf(userGuess) > 0) {

				// 	counter++;


				// }

				// return counter;




		}

	document.onkeyup = function(event) {

		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// Alerts with user guess
		alert(userGuess);

		// Create code to randomly choose one of the ten bands (Computer), only in the beginning of the game or after the player
		// runs out of chances 



		if (numberGuesses === 0 ) 
		{

			var currentWord = optionsCurrentWord[Math.floor(Math.random()*optionsCurrentWord.length)];

				currentWord = currentWord.toLowerCase();

				//alert(currentWord.length);

			 numberGuesses = (currentWord.length)+8;    // numberGuesses depends on the length of the word,
			 											// making it 8 more than the current word length 

			for (var i=0; i<currentWord.length;i++) 
			{

				var blah = blankCurrentWordArray_1st.push("_ ");

			}
					

			 alert(currentWord)	;						

			 // user gets chances depending on the length of the current word

			 

			sameGameCurrentWord = currentWord; 


		}

		else {

			currentWord = sameGameCurrentWord;
		}



		// Finding out what current word is, then setting the audio file to specific band

		// function audioPlay(x) {

		 	// if (x == 'Tiesto' or x == 'tiesto' )

		 	// {

		 	// 	var audio = new Audio('virusRingtone.mp3');
				// audio.play();
		 	// }

	
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
					
					var duplicateChar = 0;

				 if (currentWord.charAt(i) === userGuess) 

						{

								blankCurrentWordArray_1st[i] = userGuess;

									w++;     // everytime user guesses a correct char, counacterter w
					    			   		 		// gets updated, which will be used for winning criteria next,

					    			numberGuesses--; 


					    		alert( "current blank word " + blankCurrentWordArray_1st );
								
					    		alert( "duplicate char counter " +(duplicateChar_counter(blankCurrentWordArray_1st)));

								// if ((duplicateChar_counter(blankCurrentWordArray_1st)) === 0)  

								// {

								// 	w++;           // everytime user guesses a correct char that's not a duplicate, 
								// 					//w gets updated, which will be used for winning criteria next
					   // 	    	numberGuesses--;	// numberGuesses also decreases when it's not a duplicate char

								// }



					        	//alert("duplicate char is "+ duplicateChar );

						 // if (duplicateChar <= 1 && blankCurrentWordArray_1st.length )  // length only increased by 1 

						 // 	{ 
						 // 	numberGuesses--;   // number of remaining guesses decreases when there are no duplicate chars  
							// }

					     	

							 if (w === currentWord.length)    // winning criteria
						 	{

						 		wins++; // if user guessed the whole word, wins will be updated

						 		alert("You have won the game !");
						 		
						 		// play song
						 		// if (currentWord == 'Tiesto' || currentWord == 'tiesto' ||
						 		// 	currentWord == 'Kygo' || currentWord == 'kygo' ||
						 		// 	currentWord == 'Syn Cole ' || currentWord == 'Galantis'
						 		// 	)

								 // 	{

								 // 		var audio = document.getElementById("martin_garrix_audio")
									// 	audio.play();

									// 	function pauseAudio()
									// 	 {
    					// 					audio.pause();
									// 	 }
								 // 	}


						 	}

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

	
}



