import React, { createContext, useEffect } from "react";
import useFetchRandomWordHook from "../hooks/useFetchRandomWordHook";
import useCheckSubmitLetterHook from "../hooks/useCheckSubmitLetterHook";
import useIsGameOverHook from "../hooks/useIsGameOverHook";


const wordContextDefault ={
	wordObjArr: [ { letter: '', show: false} ],
	setInputLetterStateFn: (letter: string) => {},
	livesLeft: 10,
	isGameOverState: { isGameOver: false, wordGuessed: false }
}
	
const WordContext = createContext(wordContextDefault)

// -----------------
export function WordContextProvider ( { children }: { children: React.ReactNode } ) {
	const {wordObjArr, setWordObjArr, generateNewWordFn, revealWordFn} = useFetchRandomWordHook()

	const { setInputLetterStateFn, clearInputLetterStateFn, scoreState, resetScoreStateFn} = 
	useCheckSubmitLetterHook( wordObjArr, setWordObjArr )

	const { isGameOverState, resetGameOverStateFn } = useIsGameOverHook( wordObjArr, scoreState )
	const { isGameOver } = isGameOverState

	// on new gameOver reset everyting and serve new word 
	useEffect(() => {

		if (!isGameOver) return

		// show correct word
		revealWordFn()

		const timeoutValue = setTimeout(() => {
		generateNewWordFn()
		clearInputLetterStateFn()
		resetScoreStateFn()
		resetGameOverStateFn()
				}, 3000)

		return () => clearTimeout( timeoutValue )

			}, [ isGameOver ])
	
	return (
		<WordContext.Provider 
		value = {{ 
		wordObjArr, 
		setInputLetterStateFn, 
		livesLeft: scoreState,
		isGameOverState
		}}
		>{ children }</WordContext.Provider>
	)}



export default WordContext
