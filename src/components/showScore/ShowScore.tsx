import { useContext } from 'react'
import css from './ShowScore.module.css'
import WordContext from '../../context/WordContext'
import ScoreContext from '../../context/ScoreContext'

export default function ShowScore() {
	const { livesLeft } = useContext( WordContext )
	const { gameScoreState } = useContext( ScoreContext )

	const { total, correct } = gameScoreState

	return (
		
			<div id="score_section" className={css.score_section}>
				<div id="lives_section" className={css.lives_section}>
					<h3 id="score_title" className={css.score_title}>Lives Left: </h3>
					<h2 id="score" className={css.score}>{ livesLeft }</h2>
				</div>
				<div id="total_score" className={css.total_score}>
					<div id="total_section" className={css.total_section}>
						<h3 id="title">Total </h3>
						<h3 id="total">{ total }</h3>

					</div>
					<div id="correct_section" className={css.correct_section}>
						<h3 id="title">Correct</h3>
						<h3 id="correct">{ correct }</h3>
					</div>
				</div>
			</div>
		   )
}
