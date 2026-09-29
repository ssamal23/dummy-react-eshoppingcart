import { useState } from 'react'
import LoginPage from './LoginPage'
import './App.css'

// Root application component
// Note: A pasted design reference image was provided for this ticket (smoke test of the design_reference_image pipeline).
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