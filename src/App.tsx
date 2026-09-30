import { useState } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import './App.css'

// Root application component
function App() {
  const [view, setView] = useState<'login' | 'home'>('login')

  if (view === 'home') {
    return (
      <HomePage />
    )
  }

  return (
    <LoginPage onLoginSuccess={() => setView('home')} />
  )
}

export default App