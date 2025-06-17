import React from 'react'

function Cash_back() {
  return (
    <div className=' bg-orange-200 flex justify-evenly'>
        <div className=' p-5 font-medium' >
            <p className=' text-3xl'>Get 5% Cash back</p>
            <p>on Shopcart.com</p>
            <button className=' btn hover:bg-green-900 bg-green-600 text-white rounded-3xl mt-5 border-0'>Lear More</button>

        </div>
        <div className="mt-5 hidden lg:block lg:w-[19%]">
            <img
                src="https://www.transparentpng.com/thumb/credit-card/ytYFfa-download-credit-card-png.png"
                alt=""
                className="w-full h-auto object-contain"/>
        </div>

    </div>
  )
}

export default Cash_back
