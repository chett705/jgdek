import React from 'react'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'




function App() {
  return (
    <div>
      <header>
        
        <Header/>
        
        
      </header>
      
      <main>
        

       <Outlet/>
      </main>
      
    </div>
  )
}

export default App
