import React, {  createContext, useEffect, useState } from 'react';
import axios from 'axios';


const ProductContex = createContext();
export const ProductProvider =({children}) =>{

const [isloading,setisLading] =useState(false);
const [products,SetProduct] =useState([]);
    
     const fetchAPI =async() =>{
         try{
                setisLading(true);
                const res =await axios.get('https://product-server-json.onrender.com/products')
                console.table(res.data);
                SetProduct(res.data);

            }catch(e){
               

            }finally{
                setisLading(false);

            }
     }
      
    useEffect(()=>{
        fetchAPI();
    },[]);
    return(
        <ProductContex.Provider value={{products,isloading}}>
            {children}
        </ProductContex.Provider>
    )
}


export default ProductContex
