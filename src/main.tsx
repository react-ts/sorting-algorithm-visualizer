import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './components'
import { Home } from './pages/Home/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
