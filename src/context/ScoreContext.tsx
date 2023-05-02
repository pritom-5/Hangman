import React, { createContext } from "react";
import { useHandleScoreHook } from "../hooks/useHandleScoreHook";

const scoreContextDefault = {
	gameScoreState: { correct: 0, total: 0 },
	setGameScoreStateFn: ( isCorrect: boolean ) => {}
}
const ScoreContext = createContext( scoreContextDefault )

export function ScoreContextProvider( { children }: { children: React.ReactNode } ) {
	const { gameScoreState, setGameScoreStateFn } = useHandleScoreHook()	

	return (
		<ScoreContext.Provider value = {{ gameScoreState, setGameScoreStateFn }}>{ children }</ScoreContext.Provider>
		   )
}

export default ScoreContext;
