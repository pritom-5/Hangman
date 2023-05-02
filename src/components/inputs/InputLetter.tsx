import useFormHook from "../../hooks/useFormHook"
import css from './InputLetter.module.css'

export default function InputLetter() {
	const { refsObj: { textRef, formRef }, submitHandler } = useFormHook()

	return (
		<form onSubmit={submitHandler} ref={formRef} className={css.form}>
		<h2>Guess The Letter</h2>
			<div id="letter_input" className={css.input_section}>
				<input id="letter" className={css.input} type="text" name="letter" ref={textRef} maxLength={1} required />
			</div>
			<input type="submit" value="go" className={css.button}/>
		</form>
	       )
} 
