import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './componentes/main'
import Detail from './componentes/detail'
import { AppProvider } from './context/AppProvider'

const App = () => { 
  const url = import.meta.env.VITE_BASE_URL
  console.log(`API: ${url}`)
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
              <Route path='/' element = {<Main/>}/>
              <Route path='/detail/:id' element = {<Detail/>}/>
          </Routes>
        </BrowserRouter> 
      </AppProvider>
    </>
  )
}

export default App