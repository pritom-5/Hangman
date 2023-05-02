import { useContext } from 'react'
import './App.css'
import InputLetter from './components/inputs/InputLetter'
import LetterBoxes from './components/letterBoxes/LetterBoxes'
import ShowScore from './components/showScore/ShowScore'
import NotificationContext from './context/NotificationContext'
import NotificationModal from './components/UI/modals/notificationModal/NotificationModal'
import WordContext from './context/WordContext'

function App() {
	const { showNotification } = useContext( NotificationContext )
	const { isGameOverState: {isGameOver} } = useContext( WordContext )

  return (
    <>
		<div id="modal">
		{ showNotification.show &&
			<NotificationModal/>
		}
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
