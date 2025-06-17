

import React, { useState } from 'react';

    const categories = [
    'Gadgets', 'Fashion', 'Toys', 'Education',
    'Beauty', 'Fitness', 'Furniture', 'Sneakers'
    ];
export default function CategorySelector() {
    const [active, setActive] = useState('Sneakers');
    return (
    <div className=' mx-5'>
        <h2 className=' text-3xl my-5'>Todays Best Deals for you!</h2>
        <div className="flex flex-wrap justify-baseline gap-4 ">
        {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`px-6 py-2 rounded-full border transition  my-1
            ${active === category ? 'bg-green-900 text-white' : 'text-black'}`}> {category}
        </button>
      ))}
    </div>
    <div className=' my-4 flex-wrap'>

    </div>
       
    </div>
   
  );
}

// export default CategorySelector
