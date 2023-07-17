import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './components'
import { Visualizer } from './pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Visualizer />
    </ThemeProvider>
  </React.StrictMode>,
)
