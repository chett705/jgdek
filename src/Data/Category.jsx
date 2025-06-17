import React from 'react'

function Category() {
   
        const data=[
            {
                text:"CPU",
                image:"https://tkcustomcomputer.com/assets/uploads/60ba135bf9cc2c35e1293616d57d721c.jpg"
            },
            {
                text:"Case",
                image:"https://tkcustomcomputer.com/assets/uploads/63ca2c63438def2c105e31b1ff81cd36.jpg"
            },
            {
                text:"RAM",
                image:"https://tkcustomcomputer.com/assets/uploads/b7551e7e6e49c10d223dbb5e0a0a9ce2.jpg"
            },
            {
                text:"AMD",
                image:"https://tkcustomcomputer.com/assets/uploads/9bd4405084a4cafe09fe11ce328e7ecd.png"
            },
            {
                text:"PSU",
                image:"https://tkcustomcomputer.com/assets/uploads/1fa303d56ac9ad56806373ba9832cff4.jpg"
            },
            {
                text:"Laptop",
                image:"https://tkcustomcomputer.com/assets/uploads/94f6bf5c226d027f2e0afa624c1ac98f.jpg"
            },
        ]
    
  return (
    <div className=' container mx-auto py-16 p-4 '>
        <h1 className=' text-3xl font-mono'>Shop Our Categories </h1>
        <div className=' flex flex-wrap mt-3 justify-between  '>
            {
                data.map((items,i)=>{
                    return( 
                        <div key={i}
                        className=' w-[48%] h-[220px] md:w-[32.2%] md:h-[350px] lg:w-[15.9%] lg:h-[200px]
                          rounded-2xl overflow-hidden relative my-1 hover:text-cyan-500 duration-150 ' >
                            <h1 className='text-center absolute z-10 left-1/4 tranform -tranform-x-1/2 mt-2 text-xl font-bold '>
                               {items.text}
                            </h1>
                            <img src={items.image} alt="" className='w-full mt-4 object-cover hover:scale-105 duration-300' />


                        </div>
                    )
                })
            }
            
        </div>
      
    </div>
  )
}

export default Category
