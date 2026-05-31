import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './page/LandingPage'
import UserPage from './page/UserPage'
import ProfilePage from './page/ProfilePage'
import AboutUs from './page/AboutUs'
import PageNotFound from './page/PageNotFound'
import Faqs from './page/Faqs'
import PopUp from './components/PopUp'
import ContactUs from './page/ContactUs'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/all'
import { useEffect } from 'react'                    // ← add
import { supabase } from './services/SupabaseClient' // ← add
import { useAppDispatch } from './store/hook'        // ← add
import { setUser, clearUser } from './store/slices/auth-slice' // ← add
import ProcessViolation from './page/ProcessViolation'
import PayViolation from './page/PayViolation'
import PaymentSucces from './page/PaymentSucces'
import Documentation from './page/Documentation'

gsap.registerPlugin(ScrollSmoother);

function App() {
  const dispatch = useAppDispatch() // ← add

  // ← add this whole block
  useEffect(() => {
    // Check if there's a saved session on page refresh
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) dispatch(setUser(session.user))
      else dispatch(clearUser())
    })
    
    // Listen for login/logout events
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) dispatch(setUser(session.user))
        else dispatch(clearUser())
      }
    );
    return () => subscription.unsubscribe();
  }, [])
  
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#wrapper-smooth",
      content: "#content-smooth",
      smooth: 2,
      effects: true,
    })
  })

  return (
    <div id='wrapper-smooth'>
      <div id='content-smooth'>
        <PopUp/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/user" element={<UserPage/>}/>
          <Route path="/profile/*" element={<ProfilePage/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/documentation" element={<Documentation/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          
          <Route path='/contact-us' element={<ContactUs/>}/>

          <Route path='/process-violation/:plateNumber'>
            <Route index element={<ProcessViolation/>}/>
            <Route path='*' element={<PageNotFound/>}/>  {/* catches anything extra */}
          </Route>
          
           <Route path='/pay-violation/:plateNumber'>
            <Route index element={<PayViolation/>}/>
            
            <Route path='*' element={<PageNotFound/>}/>  {/* catches anything extra */}
          </Route>
          <Route path='/pay-violation/success' element={<PaymentSucces/>}/>
          <Route path='*' element={<PageNotFound/>}/>  {/* catches anything extra */}
        </Routes>

      </div>
    </div>
  )
}

export default App