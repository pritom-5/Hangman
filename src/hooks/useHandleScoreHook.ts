import { useContext, useEffect, useState } from "react";
import WordContext from "../context/WordContext";

export function useHandleScoreHook() {
	const [ gameScoreState, setGameScoreState ] = useState({ total: 0, correct: 0 })
	const { isGameOverState: { isGameOver, wordGuessed } } = useContext ( WordContext )

	// on game over change score card total and correct value
	useEffect(() => {
		if (!isGameOver) return
		const gameScoreState0 = { ...gameScoreState, total: ++gameScoreState.total}
		
		if ( wordGuessed ) gameScoreState0.correct += 1

		setGameScoreState( gameScoreState0 )
	}, [isGameOver])
	

	return { gameScoreState }
}
