
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './page/AdminPage'
import LandingPage from './page/LandingPage'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/AdminPanel" element={<AdminPage/>}/>
      </Routes>
    </>
  )
}

export default App
