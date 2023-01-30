import './tailwindcss.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const strictMode = false

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  strictMode ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  )
)
