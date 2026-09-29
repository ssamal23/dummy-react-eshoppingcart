import { useState } from 'react'
import LoginPage from './LoginPage'
import AccessManagementPage from './AccessManagementPage'
import './App.css'

// Root application component
function App() {
  const [view, setView] = useState<'login' | 'home' | 'access-management'>('login')

  if (view === 'access-management') {
    return <AccessManagementPage />
  }

  if (view === 'home') {
    return (
      <div className="login-page">
        <h1>Welcome</h1>
        <button type="button" className="login-button" onClick={() => setView('access-management')}>
          Access Management
        </button>
      </div>
    )
  }

  return (
    <LoginPage onLoginSuccess={() => setView('home')} />
  )
}

export default App