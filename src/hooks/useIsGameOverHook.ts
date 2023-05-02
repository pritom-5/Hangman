import { useEffect, useState } from "react";
import { isGameOverType, wordObjArrT } from "../types/types"
import isGameOver from "../util/isGameOver";
import { LIVES_LEFT } from "../constants/constants";

const defaultGameOverObj = { isGameOver: false, wordGuessed: false } 

export default function useIsGameOverHook ( wordObjArr: wordObjArrT, livesLeft: number ) {

	const [ isGameOverState, setIsGameOverState ]	= useState(defaultGameOverObj)

	const resetGameOverStateFn = () => {
		setIsGameOverState( defaultGameOverObj )
	}

	useEffect(() => {
		if ( livesLeft === LIVES_LEFT ) return
		setIsGameOverState(isGameOver( wordObjArr, livesLeft ))
	} , [ livesLeft ])

	return { isGameOverState, resetGameOverStateFn }; 
}

