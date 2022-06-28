import React from 'react';
import productItems from '../data'

function Products (){
  return (
    <main className='flex mb-7 m-auto w-4/5 justify-around flex-wrap bg-stone-300 rounded-3xl drop-shadow-[0_10px_10px_rgba(0,0,0)]'>
      {productItems.map((prodItem) => (
        <section className='w-72 h-100 mx-5 p-2 my-9 bg-slate-50 border border-slate-400 drop-shadow-[0_10px_10px_rgba(0,0,0)] rounded-md overflow-hidden'>
          <div>
            <img className='block w-5/5 h-52 object-cover' src={prodItem.image} alt={prodItem.name} />
          </div>
          <div>
            <h3 className='font-bold uppercase mx-0 my-2'>{prodItem.name}</h3>
          </div>
          <div>
            <h3 className='font-bold text-lg mx-0 my-2 pb-4'> ${prodItem.price}</h3>
          </div>
          <div>
            <button className='w-full cursor-pointer mb-5 uppercase h-9 bg-stone-600 rounded-3xl text-slate-50 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0)] hover:bg-orange-500 hover:text-slate-900 hover:translate-y-px'> Add to Cart</button>
          </div>
        </section>
        
      ))}
      
    </main>
  );
}

export default Products;