import { useColorConfig } from '@hooks'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './lib/components'
import { Home } from './pages/Home/Home'

const App = () => {
  const [{ mode }] = useColorConfig();
  return (
    <ThemeProvider mode={mode}>
      <Home/>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
