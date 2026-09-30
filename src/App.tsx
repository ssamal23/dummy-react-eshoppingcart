import { useState } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import './App.css'

// Root application component
function App() {
  const [view, setView] = useState<'login' | 'home'>(() =>
    localStorage.getItem('isLoggedIn') === 'true' ? 'home' : 'login'
  )

  const handleLoginSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true')
    setView('home')
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setView('login')
  }

  if (view === 'home') {
    return (
      <HomePage onLogout={handleLogout} />
    )
  }

  return (
    <LoginPage onLoginSuccess={handleLoginSuccess} />
  )
}

export default App