import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './components'
import { Home } from './pages/Home/Home'
import { shellSort } from './algorithms'

console.log(shellSort([5,4,3,2,1,0]))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
