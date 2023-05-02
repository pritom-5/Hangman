import React, { createContext } from "react";
import useNotificationHook from "../hooks/useNotificationHook";


const notificationDefaultContext = {
	showNotification: { show: false, type: '', message: '' },
	setShowNotificationFn: ( show: true | false, type: 'error' | 'success', message: 'correct' | 'oops! wrong' ) => {}
} 
const NotificationContext = createContext( notificationDefaultContext )

// ----------------
export function NotificationContextProvider( { children }: { children: React.ReactNode } ) {
	const { showNotification, setShowNotificationFn } = useNotificationHook() 	

	return (
		<NotificationContext.Provider value = {{ 
		showNotification, setShowNotificationFn
		}}> { children } </NotificationContext.Provider>	
		   )
}

export default NotificationContext
