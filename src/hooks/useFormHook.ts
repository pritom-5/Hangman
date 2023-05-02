import React, { useContext, useRef, useState } from "react";
import WordContext from "../context/WordContext";

export default function useFormHook() {
	const [inputData, setInputData] = useState('')

	const { setInputLetterStateFn } = useContext( WordContext )

	const textRef = useRef<HTMLInputElement>(null)
	const formRef = useRef<HTMLFormElement>(null)

	const refsObj = { textRef, formRef }

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const letterInput = textRef.current?.value;

		if (!letterInput) {
			throw new Error('Please Input valid entry')
		}

		// pass input data to context for checking of logic

		setInputData(letterInput)
		setInputLetterStateFn( letterInput )

		formRef.current?.reset()

	}
	return { refsObj, submitHandler }
}
