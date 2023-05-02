type isGameOverType = { isGameOver: boolean, wordGuessed: boolean }
type wordObjArrType = { letter: string, show: boolean }[]
export default function isGameOver( wordObjArr: wordObjArrType, livesLeft: number ) {
		
	const isGameOverObj: isGameOverType = { isGameOver: false, wordGuessed: false }
	
	// check if livesLeft is 0 and lettersNotGuessed is not 0
	if ( livesLeft === 0 ) {
		isGameOverObj.isGameOver = true
	}

	// check if all the show is true
	const lettersNotGuessed = wordObjArr.filter(wordObj => wordObj.show === false)
	if ( lettersNotGuessed.length === 0 ) { 
		isGameOverObj.isGameOver = true
		isGameOverObj.wordGuessed = true
	}
	
	return isGameOverObj; 
}
// TODO: 
// return wheather game is over word guessed or not
// return isGameOver () => {} ; { isGameOver: true, wordGuessed: true }
