import { useColorConfig } from '@hooks'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Graph } from './classes/graph/Graph'
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


function comparator(a: string, b: string){
  if (a < b) return -1;
  if (a > b) return 1;

  return 0
}

const graph = new Graph(comparator);

graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("D")
graph.addNode("E")
graph.addNode("F")

graph.addEdge("A", "B");
graph.addEdge("A", "E");
graph.addEdge("A", "F");
graph.addEdge("B", "E");
graph.addEdge("B", "D");
graph.addEdge("D", "E");
graph.addEdge("D", "C");
graph.addEdge("C", "E");


//window.graph = graph;
