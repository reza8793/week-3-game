

						// number of guesses the player gets 
	var lettersGuessedArray; 		// empty array for the letters already guessed 
	var numberGuesses = 10;
	var wins = 0;
	var optionsCurrentWord = ['Galantis','Tiesto','Martin Garrix','The Chainsmokers',
							'Armin Van Buuren', 'Kygo', 'Van She', 'Marshmello', 
							'Axwell Ingrosso','Syn Cole'];  // wordbank 

	var blankCurrentWordArray_1st;				// blank word array that will be filled with userguesses 

	
// Captures Key Clicks

	var currentWord;

function playSong_Image_Display(x) {

	if (x === 'tiesto' || x === 'galantis' ||x === 'martin garrix' || x === 'kygo' || x === 'syn cole'|| x === 'the chainsmokers'  
		||x === 'martin garrix' || x === 'marshmello' || x === 'van she' || x === 'axwell ingrosso') 

	{


		var audio = document.getElementById("martin_garrix_audio")
			audio.play();
	}
		 	
}




function gameStart() {

			// Create code to randomly choose one of the ten bands (by computer), only in the
			// beginning of the game or after the player wins or loses

			 currentWord = optionsCurrentWord[Math.floor(Math.random()*optionsCurrentWord.length)];

			currentWord = currentWord.toLowerCase();

			numberGuesses = currentWord.length+5;

			blankCurrentWordArray_1st = new Array;
			lettersGuessedArray = new Array;

				for (var i=0; i<currentWord.length;i++) 
				{
					blankCurrentWordArray_1st.push("_ ");
				}

	}
	

	gameStart();

	document.onkeyup = function(event) {

		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


			for (var i=0; i<currentWord.length;i++) 
				{ 	


				 if (currentWord.charAt(i) === userGuess) 

						{

							blankCurrentWordArray_1st[i] = userGuess;

							if (blankCurrentWordArray_1st.indexOf("_ ") == -1) // Criteria for winning 
											 							 
							{	
								blankCurrentWordArray_1st[i] = userGuess;									  	
								wins++;
								alert("You have won the game!");
								playSong_Image_Display(currentWord);
								gameStart();
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
						 	lettersGuessedArray.push(userGuess);
						}
					}


				if (numberGuesses === 0) // Criteria for losing 
											 							 
						{												  	
							alert("You have lost the game!");
							gameStart();
							
						}

				


		console.log("Current Word " +currentWord);
		console.log("User guessed " + userGuess);
		console.log("Current Word Array " + blankCurrentWordArray_1st);
		console.log("Number of Guesses remaining " + numberGuesses);
		console.log("Letters Guessed Array " + lettersGuessedArray);
		console.log("Wins " + wins);
	
		

	// 	document.querySelector('#game').innerHTML = '<h2>TARGET Word: '  + currentWord + 
	// '<br> <br> WINS: ' +  wins +
	// '<br> <br> CURRENT WORD: ' +  blankCurrentWordArray_1st.join("")   +
	// '<br> <br>NUMBER OF GUESSES REMAINING: ' +  numberGuesses +
	// '<br> <br>LETTERS ALREADY GUESSED: ' +  lettersGuessedArray +
	// '<br> <br>USER GUESSED: ' +  userGuess + '<br>  <br></h2>';
		

	document.querySelector('#game').innerHTML = 

	'<h3> WINS: ' +  wins +
	'<br> <br> </h3> <h3 class = "Blank_Array"> CURRENT WORD: ' +  blankCurrentWordArray_1st.join("")   +
	'<br> <br> </h3> <h3> NUMBER OF GUESSES REMAINING: ' +  numberGuesses +
	'<br> <br>LETTERS ALREADY GUESSED: ' +  lettersGuessedArray +
	'<br> <br>YOU GUESSED: ' +  userGuess + '<br>  <br></h3>';

	
}



