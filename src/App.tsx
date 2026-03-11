
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './page/AdminPage';
import LandingPage from './page/LandingPage';
import UserPage from './page/UserPage';
import ProfilePage from './page/ProfilePage';
import AboutUs from './page/AboutUs';
import PageNotFound from './page/PageNotFound';
import Faqs from './page/Faqs';
import PopUp from './components/PopUp';
import ContactUs from './page/ContactUs';

function App() {

  return (
    <>
      <PopUp/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/adminPanel" element={<AdminPage/>}/>
        <Route path="/user" element={<UserPage/>}/>
        <Route path="/profile/*" element={<ProfilePage/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/documentation" element={<ProfilePage/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
