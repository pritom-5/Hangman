import { useContext } from "react"
import WordContext from "../../context/WordContext"
import LetterBox from "./LetterBox"
import css from './letterBoxes.module.css'

export default function LetterBoxes () {
	const {wordObjArr} = useContext( WordContext )

	// make word to array
	return (
		<div id="letter_boxes_section" className={css.letter_boxes_section}>
		{wordObjArr.map( (wordObj, index) => (
			<LetterBox key={index} wordObj={wordObj}/>		
		) )  }	
		</div>
	       )
}
