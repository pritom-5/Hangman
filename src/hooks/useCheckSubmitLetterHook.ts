import { useContext, useEffect, useState } from "react"
import NotificationContext from "../context/NotificationContext"
import { LIVES_LEFT } from "../constants/constants"

type wordObjArr = { letter: string, show: boolean }[]

export default function useCheckSubmitLetterHook( wordObjArr: wordObjArr, setObjArr ) {
	const [ inputLetterState, setInputLetterState ] = useState('')
	const [ scoreState, setScoreState ] = useState(LIVES_LEFT)

	const { setNotificationStackFn } = useContext( NotificationContext )

	const setInputLetterStateFn = (letter: string) => {
		setInputLetterState(letter)
	}

	const clearInputLetterStateFn = () => {
		setInputLetterStateFn('')
	} 

	const resetScoreStateFn = () => {
		setScoreState(LIVES_LEFT)
	}


	useEffect(() => {
		
		// stop runnning the logic on first mount 
		if ( inputLetterState.trim().length === 0 ) return

		// redece life by one on each try correct or wrong
		setScoreState(prev=> --prev)

		// check if letter is in wordObjArr
		const existingWordObj = wordObjArr.find(wordObj => wordObj.letter === inputLetterState)
		
		// if letter doesn't exist reduce score
		if (!existingWordObj) {
			setNotificationStackFn( true, 'error', 'oops! wrong' )

			return;
		}
		
		// edit existing wordObjArr and change show -> true
		// set updated objArr to original state
		const wordObjArr0:wordObjArr = JSON.parse(JSON.stringify(wordObjArr))
		const wordObjArr0Update = wordObjArr0.map(wordObj => {
			if (wordObj.letter === inputLetterState) {
				return {...wordObj, show: true}
			}
			return wordObj
		})

		setObjArr(wordObjArr0Update)

		setNotificationStackFn( true, 'success', 'correct' )


	} , [inputLetterState])

	return { setInputLetterStateFn, clearInputLetterStateFn, scoreState, resetScoreStateFn }
}
