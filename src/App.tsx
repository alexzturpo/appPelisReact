import './App.css'
import Main from './componentes/main'

const App = () => { 
  const url = import.meta.env.VITE_BASE_URL
  console.log(`API: ${url}`)
  return (
    <> 
      <Main url = {url}></Main>
    </>
  )
}

export default App