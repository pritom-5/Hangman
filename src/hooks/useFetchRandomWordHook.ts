import { useEffect, useState } from "react"

const testWordArr = [ 'tt', 'ddd' ]

export default function useFetchRandomWordHook () { 
	const [ wordState, setWordState ] = useState( [{ letter: '', show: false }] ) 
	const [ wordsGeneratedCount, setWordsGeneratedCount ] = useState( 1 )

	// TODO: 
	// make a new array of words
	// fetch new word with every time this effect runs
	useEffect(() => {
		// test
		console.log( ' new word ' )
		const randomIndex = Math.floor(Math.random() * testWordArr.length)
		const wordArray = testWordArr[randomIndex].split('').map(letter=> {
			return { letter: letter, show: false }
		})

		setWordState(wordArray)
	} , [ wordsGeneratedCount ])

	const generateNewWordFn = () => {
		setWordsGeneratedCount( (prev) => ++prev )
	}

	const revealWordFn = () => {
		const wordState0 = wordState.map(letter=> {
			return { ...letter, show: true }
		})
		setWordState(wordState0)
	}

	return {wordObjArr: wordState, setWordObjArr: setWordState, generateNewWordFn, revealWordFn}
}
