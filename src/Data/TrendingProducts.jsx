import React from 'react'
import image from '../assets/Rogscar18.png'

// const data =[
//     {
//         img:'https://ae01.alicdn.com/kf/Sb482f394a0d043beaeba2eeda6d407b5f/16-1-Inch-Gaming-Laptop-Intel-i9-10885H-i7-Nvidia-GTX-1650-4G-IPS-1920x1080-144Hz.jpg',
//         title:'Pupular Laptop'
//     },
//     {
//       img:'https://m.media-amazon.com/images/I/71SjzJv60vL._AC_UF1000,1000_QL80_.jpg',
//       title:'Best Laptop in the world'
//     }

// ]
    

function TrendingProducts() {
  return (

    <div className=' mt-5 mx-5'>
        <p className=' text-2xl font-mono my-4'>Trending Products for you! </p>
        <div className=' flex  flex-wrap justify-between'>
          {/* {
            data.map((items,i)=>{
              return(
                <div key={i}> */}
                  <div className='rounded-xl w-[95%] py-3 mb-4 md:w-[40%] lg:w-[40.5%] overflow-hidden relative'>
                      <img src="https://m.media-amazon.com/images/I/71SjzJv60vL._AC_UF1000,1000_QL80_.jpg" alt="" className='w-full mt-4 object-cover hover:scale-105 duration-300' />
                      
                      <div className='bg-gray-100 pl-4 py-3 font-medium'>
                        <p className='text-2xl py-2'>Pupular Laptop</p>
                        <p className='text-[0.8rem] py-1'>Delivery within 24 hours</p>
                        <button className='bg-black hover:bg-green-950 text-white rounded-full mt-5 border-0 px-4 py-2'>
                          Shop Now
                        </button>
                      </div>
                    </div>

                  <div className='rounded-xl w-[95%] py-3 mb-4 md:w-[40%] lg:w-[40.5%] overflow-hidden relative'>
                      <img src="https://tkcustomcomputer.com/assets/uploads/0c43b50f4a5544a986cecc835b444c54.jpg" alt="" className='w-full mt-4 object-cover hover:scale-105 duration-300' />
                      
                      <div className='bg-gray-100 pl-4 py-3 font-medium'>
                        <p className='text-2xl py-2'>Best Laptop in the world</p>
                        <p className='text-[0.8rem] py-1'>Delivery within 24 hours</p>
                        <button className='bg-black hover:bg-green-950 text-white rounded-full mt-5 border-0 px-4 py-2'>
                          Shop Now
                        </button>
                      </div>
                    </div>

                        
            {/* </div>

              
              )

            })
          } */}


            
           
        </div>
        
      
    </div>
  )
}

export default TrendingProducts
