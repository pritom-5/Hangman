import css from './NotificationModal.module.css'
import { notificationType } from '../../../../types/types'

type notificationModalPropsType = {
	notification: notificationType
}

export default function NotificationModal( {notification}: notificationModalPropsType ) {
	const { type, message } = notification
	
	console.log( type, message )

	// dynamically change class name based on type
	const notification_class = type === 'error' ? 
	`${css.notification_modal_section} ${css.wrong}` :
	`${css.notification_modal_section} ${css.correct}` 


	return (
		<div id="notification_modal_section" className={notification_class}>
			{ message }
		</div>
	       )
}
