import React from 'react'
import Category from '../Data/Category'
import Deals_Category from '../Data/Deals_Category'
import Getdiscount from '../Data/Getdiscount'
import PupularProduct from '../Data/PupularProduct'
import Hero2 from '../Data/hero2'

import CategorySelector from '../store/CategorySelector'
import Full_Category from '../store/Full_Category'
import Cash_back from '../Data/Cash_back'
import Selling_Products from '../Data/Selling_Products'
import TrendingProducts from '../Data/TrendingProducts'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div className='' >
       <menu className=' z-0'>
      <div className=' px-10 content items-start py-10 md md:text-{1.2rem} ' id='homepage'>
        <div className='tiile  text-5xl text-green-800 font-bold pb-7'>
          <h1>Shopping And <br /> Department Store.</h1>

        </div>
        <div className=' pb-5 font-semibold text-white'>
          <p>Shopping is a bit of a relaxing hobby for me, which <br /> is sometimes troubling for the bank balance.</p>
        </div>
        <div>
          <button className=' btn btn-active text-white rounded-3xl bg-green-800 border-0 hover:bg-green-900 '>Learn More</button>
        </div>

      </div>
       <Category/>
        <Deals_Category/>
        <Getdiscount/>
        <PupularProduct/>
        <Hero2/>
        <CategorySelector/>
        <Full_Category/>
        <Cash_back/>
        <Selling_Products/>
        <TrendingProducts/>
        <Footer/>
        
     

    
      
     
    </menu>
      
    </div>
  )
}

export default Home
