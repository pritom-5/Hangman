import { useEffect, useState } from "react"
import { notificationType } from "../types/types"


export default function useNotificationHook() {
	// show notification state
	const [ notificationStack, setNotificationStack ] = useState<notificationType[]>([])

	// useEffect 
	useEffect(() => {
		if ( !notificationStack.length ) return

		const timeout = setTimeout(() => {
			const notificationStack0 = [...notificationStack]
			notificationStack0.pop()
			setNotificationStack(notificationStack0)
		}, 2500)


		return () => {
			clearTimeout( timeout )
		}

	}, [ notificationStack ])


	const setNotificationStackFn = ( show: true | false, type: 'error' | 'success', message: 'correct' | 'oops! wrong' ) => {
		const notificationStack0 = [...notificationStack]
		notificationStack0.unshift({ show, type, message })
		setNotificationStack(notificationStack0)
	}


	return { notificationStack, setNotificationStackFn }
}

