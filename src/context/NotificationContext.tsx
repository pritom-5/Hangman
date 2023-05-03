import React, { createContext } from "react";
import useNotificationHook from "../hooks/useNotificationHook";

const notificationDefaultContext = {
	notificationStack: [{ show: false, type: 'error', message: 'correct' }],
	setNotificationStackFn: ( show: true | false, type: 'error' | 'success', message: 'correct' | 'oops! wrong' ) => {}
} 
const NotificationContext = createContext( notificationDefaultContext )

// ----------------
export function NotificationContextProvider( { children }: { children: React.ReactNode } ) {
	const { notificationStack, setNotificationStackFn } = useNotificationHook() 	

	return (
		<NotificationContext.Provider value = {{ 
		notificationStack, setNotificationStackFn
		}}> { children } </NotificationContext.Provider>	
		   )
}

export default NotificationContext
