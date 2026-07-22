import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AuthCallback from './pages/AuthCallback'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth/callback' element={<AuthCallback />}></Route>
      
      </Routes>
    </>
  )
}

export default App
