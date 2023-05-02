import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WordContextProvider } from './context/WordContext.tsx'
import { NotificationContextProvider } from './context/NotificationContext.tsx'
import { ScoreContextProvider } from './context/ScoreContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <NotificationContextProvider>
  <WordContextProvider>
  <ScoreContextProvider>
    <App />
  </ScoreContextProvider>
  </WordContextProvider>
  </NotificationContextProvider>
  </React.StrictMode>,
)
