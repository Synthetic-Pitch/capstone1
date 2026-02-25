
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminPage from './page/AdminPage'
import LandingPage from './page/LandingPage'
import UserPage from './page/UserPage'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/adminPanel" element={<AdminPage/>}/>
        <Route path="/user" element={<UserPage/>}/>
      </Routes>
    </>
  )
}

export default App
