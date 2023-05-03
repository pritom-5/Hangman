import css from "./Notification.module.css"
import { useContext } from "react"
import NotificationContext from "../../context/NotificationContext"
import NotificationModal from "../UI/modals/notificationModal/NotificationModal"

export default function Notification() {
	const { notificationStack } = useContext( NotificationContext )

	return (
		<div id="notification_section" className={css.notification_section}>
			{ 
			notificationStack.map( (notification, index) => (
				<NotificationModal 
				key={index} 
				notification={ notification }/>
						) )
			}
		</div>
		   )
}
