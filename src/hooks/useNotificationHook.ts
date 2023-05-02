import { useEffect, useState } from "react"

export default function useNotificationHook() {
	// show notification state
	const [ showNotification, setShowNotification ] = useState( { show: false, type: '', message: '' } )
	// timeout state
	const [ timeoutState, setTimeoutState ] = useState( 0 )

	// useEffect 
	useEffect(() => {
		if ( !showNotification.show ) return

		const timeout = setTimeout(() => {
			setShowNotification( prev => { 
				return { ...prev, show: false }
			} )
		}, 3000)

		setTimeoutState( timeout )

		return () => {
			clearTimeout( timeoutState )
		}

	}, [ showNotification.show ])


	const setShowNotificationFn = ( show: true | false, type: 'error' | 'success', message: 'correct' | 'oops! wrong' ) => {
		setShowNotification( { show, type, message } )
	}


	return { showNotification, setShowNotificationFn }
}

