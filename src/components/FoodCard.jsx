import React from 'react'
import { FaStar } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { addTocart, incrementQuantity } from '../store/slices/cartSlice'
import { useSelector } from 'react-redux'

const FoodCard = ({id,img,name,price,desc,category,rating,handleToast}) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartItems.cart)
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg'>
      <img 
        src={img} 
        alt={name}
        className='w-auto h-[130px] hover:scale-110 cursor-grub transition-all duration-500 ease-in-out'
      />
      <div className='text-sm flex justify-between'>
        <h2>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
      </div>
      <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
      <div className='flex justify-between'>
        <span className='flex justify-center items-center'>
          <FaStar className='mr-1 text-yellow-400'/> {rating}
        </span>
        <button 
          className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'
          onClick={() => {
            if(cart.find((item) => item.id === id)){
              dispatch(incrementQuantity(id))
            }
            else{
              dispatch(addTocart({id,img,name,price,rating,qty:1}))
            }
            handleToast(name)
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default FoodCard