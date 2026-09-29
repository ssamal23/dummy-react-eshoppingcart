import { useState } from 'react'
import LoginPage from './LoginPage'
import './App.css'

// Root application component
// Hero/layout should visually resemble the design reference at https://example.com
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