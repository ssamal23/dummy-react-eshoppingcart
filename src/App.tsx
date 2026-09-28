import { useState } from 'react'
import LoginPage from './LoginPage'
import './App.css'

function App() {
  const [view, setView] = useState<'login' | 'home'>('login')

  if (view === 'home') {
    return (
      <div className="login-page">
        <h1>Welcome</h1>
      </div>
    )
  }

  return (
    <LoginPage onLoginSuccess={() => setView('home')} />
  )
}

export default App