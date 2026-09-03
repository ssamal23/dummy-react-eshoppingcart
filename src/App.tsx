import { useState } from 'react'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  return isLoggedIn ? (
    <HomePage />
  ) : (
    <LoginPage onLoginSuccess={handleLoginSuccess} />
  )
}

export default App
