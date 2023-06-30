import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './componentes/main'
import Detail from './componentes/detail'

const App = () => { 
  const url = import.meta.env.VITE_BASE_URL
  console.log(`API: ${url}`)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='/detail/:id' element = {<Detail/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App