import { useColorConfig } from '@hooks'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './lib/components'
import { Home } from './pages/Home/Home'
import { heapSortDef } from './algorithms'

console.log(heapSortDef.executor([8,2,7,3,6,4,5,1,9]))
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
