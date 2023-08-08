import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './components'
import { Main } from './pages/Main/Main'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
)
