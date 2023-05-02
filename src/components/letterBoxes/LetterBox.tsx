import css from './letterBox.module.css'

type LetterBoxPropsType = {
	wordObj: { letter: string, show: boolean }
} 
export default function LetterBox ( { wordObj }: LetterBoxPropsType ) {
	const { letter, show } = wordObj

	return (
		<div id="letter_box_section" className={css.letter_box_section}>
			{show && 
			<h3>{ letter }</h3>
			}
		</div>
	       )
}
