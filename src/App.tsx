import { useContext } from 'react'
import './App.css'
import InputLetter from './components/inputs/InputLetter'
import LetterBoxes from './components/letterBoxes/LetterBoxes'
import ShowScore from './components/showScore/ShowScore'
import NotificationContext from './context/NotificationContext'
import WordContext from './context/WordContext'
import Notification from './components/notification/Notification'

function App() {
	const { isGameOverState: {isGameOver} } = useContext( WordContext )
	const { notificationStack } = useContext(NotificationContext)

  return (
    <>
		<div id="notificationModal">
			{ !!notificationStack.length && <Notification/> }
		</div>

		<div id="title" className='game_title'>
			<h1>Hangman</h1>
		</div>

		<ShowScore/>
		<LetterBoxes/>
		{!isGameOver &&
		<InputLetter/>
		}
    </>
  )
}

export default App
