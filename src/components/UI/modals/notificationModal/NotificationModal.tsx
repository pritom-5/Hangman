import { useContext } from 'react'
import css from './NotificationModal.module.css'
import NotificationContext from '../../../../context/NotificationContext'

export default function NotificationModal() {
	const { showNotification } = useContext( NotificationContext )
	const { type, message } = showNotification
	
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
