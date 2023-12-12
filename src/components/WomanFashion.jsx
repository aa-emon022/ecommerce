import React, { useEffect, useState } from 'react';
import ManJson from '../assets/json/woman.json';
import Layout1 from '../Layout/Layout1';

export default function WomanFashion() {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  window.scrollTo(0, 0);
  const addToCarts = (items) => {
    
    setCart((prevCart) => [...prevCart, items]);
  
  
    setCartItemCount((prevCount) => prevCount + 1);
  
   
    localStorage.setItem('carts', JSON.stringify(cart));
  
   
    localStorage.setItem('cartItemCount', cartItemCount + 1);
  };

  return (
    <>
      <Layout1>
        <div className='bg-[#E1D9D1] dark:bg-[#36454F] dark:text-white'>
          <div></div>
          {/* ------------------------------------------- */}
          <div className='flex flex-wrap gap-6 justify-center pt-[4rem]'>
            {ManJson.map((items, index) => (
              <div key={index} className='hover:scale-105 pb-[2rem] shadow-md hover:shadow-none text-center'>
                <img src={items.image} className='h-[17rem] w-[10rem] object-cover' />
                <h1>{items.Title}</h1>
                <p className=''>Price:{items.Price}</p>
                <h1 className='bg-blue-500 line-through rotate-[-40deg] relative w-[5rem] rounded-full right-6 top-[-20rem]'>
                  {items.Discount}
                </h1>
                <button onClick={() => addToCarts(items)}>Add To Carts</button>
              </div>
            ))}
          </div>
        </div>
      </Layout1>
    </>
  );
}
