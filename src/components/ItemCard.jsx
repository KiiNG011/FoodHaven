import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { incrementQuantity,decrementQuantity } from '../store/slices/cartSlice';
import { toast } from "react-hot-toast";

const ItemCard = ({id,name,img,price,qty}) => {
  const dispatch = useDispatch()
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
      <MdDelete 
        className="absolute right-7 text-gray-600 cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart(id))
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
      />
      <img src={img} alt="" className="w-[50px] h-[50px] " 
      />
      <div className='leading-5'>
        <h2 className='font-bold text-gray-800'>{name}</h2>
        <div className='flex justify-between'>
          <span className='text-green-500 font-bold'>₹{price}</span>
          <div className='flex justify-center items-center gap-2 absolute right-7'>
            <AiOutlinePlus 
              className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'
              onClick={() => {
                qty >= 1 && dispatch(incrementQuantity(id))
              }}
            />
            <span>{qty}</span>
            <AiOutlineMinus 
              className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'
              onClick={() => {
                qty > 1 && dispatch(decrementQuantity(id))
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard