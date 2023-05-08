import './css/App.css'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import Layout from './Layout';
import axios from 'axios'

axios.defaults.baseURL='http://localhost:3000';
axios.defaults.withCredentials= true;

function App() {


  return (
    <Routes>
      <Route Index element={<Layout />} >
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>

    </Routes>
  )
}

export default App
