import React, { useContext } from 'react'
import { IoStar } from 'react-icons/io5';
import ProductContex from '../store/ProductContex';

function Full_Category() {
    const {products} = useContext(ProductContex);
  return (
     <div className='product px-5 '>
        
        <div className='  mt-4'>

             <div class=" flex   flex-wrap gap-3 ">
            {
               
                products.map((v,i)=>{
                    return(

                        <div class="  rounded-xl w-[45%]   px-3 py-3 mb-4    md:w-[49%] lg:w-[23.5%] 
                          overflow-hidden relative " >
                            <img src={v.image} alt="Product Name" class="   w-50 object-contain h-[180px] rounded-md" />
                            <div class="mt-4">
                            <div class="flex justify-between items-baseline">
                                <h2 class="text-1xl line-clamp-2 font-semibold">
                                    {v.name}

                                </h2>
                                <span class="text-lg  font-semibold"><sup>${v.price}</sup></span>
                            </div>
                            <p class="text-sm line-clamp-1 text-gray-600 mt-1">{v.description}</p>
                            <div class="flex items-center mt-2 mb-5">
                                <div class="flex text-green-500 text-sm">
                                    {
                                        Array.from({length :5}).map((_,i)=>(
                                            <span key={i}><IoStar/> </span>
                                        ))
                                    }
                                </div>
                                <span class="text-sm text-gray-600 ml-2">(121)</span>
                            </div>
                            <button class="mt-4 w- border border-black text-black rounded-full py-2 hover:text-white hover:border-0 btn btn-outline btn-accent    bottom-3">
                                Add to Cart
                            </button>
                            </div>
                        </div>
                    )

                })
            }


        </div>

        </div>
       
    </div>    
  )
}

export default Full_Category
