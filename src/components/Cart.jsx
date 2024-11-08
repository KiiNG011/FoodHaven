import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const [activeCart,setActiveCart] = useState(false)
  const cart = useSelector(state => state.cartItems.cart)
  const totalQuantuty = cart.reduce((prev,curr) => prev + curr.qty,0)
  const totalAmount = cart.reduce((prev,curr) => prev + curr.price*curr.qty,0);

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[25vw] h-full p-5 bg-white mb-3 shadow-gray-700 shadow-2xl ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}>
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <IoMdClose 
            className='border-2 border-gray-600 text-gray-600 font-extrabold p-1 text-2xl rounded-md hover:text-red-400 hover:border-red-400 cursor-pointer'
            onClick={() => {setActiveCart(prev=>!prev)}}
          />
        </div>
        {
          cart.length > 0 ? cart.map((item) => (
            <div key={item.id}>
              <ItemCard
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                qty={item.qty}
              />
            </div>
          ))
          : <h2 className="text-center text-xl font-bold text-gray-800">
              Your cart is empty
            </h2>
        }

        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-800'>Items: {totalQuantuty}</h3>
          <h3 className='font-semibold text-gray-800'>Total Amount : {totalAmount}</h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2'/>
          <button 
            className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'
            onClick={() => navigate('/success')}
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart 
        onClick={() => {setActiveCart(prev=>!prev)}}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4
          ${
            totalQuantuty > 0 && "animate-bounce delay-500 transition-all"
          }`
        }
      />
    </>
  )
}

export default Cart