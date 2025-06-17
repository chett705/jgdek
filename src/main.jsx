import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import Sevices from './page/Sevices.jsx'
import Viewproduct from './page/Viewproduct.jsx'
import Contact from './page/Contact.jsx'
import { ProductProvider } from './store/ProductContex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter>
      <Routes>
          <Route path='/' element ={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/sevices' element={<Sevices/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/viewproduct' element={<Viewproduct/>}/>

          </Route>
      </Routes>
     
    
    </BrowserRouter>
    </ProductProvider>

    


    
  </StrictMode>,
)
