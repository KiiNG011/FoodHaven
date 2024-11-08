import React, { useEffect, useState } from 'react'
import FoodData from '../data/FoodData'
import { useDispatch } from 'react-redux'
import { setCategory } from '../store/slices/categorySlice'
import { useSelector } from 'react-redux'

const CategoryMenu = () => {
  const dispatch = useDispatch()
  const [categories,setCategories] = useState([])
  
  useEffect(() => {
    function getUniqueCategories(){
      let uniqueCategories = Array.from(new Set(FoodData.map(item => item.category)))
      setCategories(uniqueCategories)
    }
    getUniqueCategories()
  },[])

  const selectedCategory = useSelector(state => state.category.category)

  return (
    <div className='ml-6'>
      <h3 className='text-xl font-semibold'>Find the best food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button 
          className={`px-3 py-2 rounded-lg bg-gray-200 font-bold hover:bg-green-500 hover:text-white ${selectedCategory === 'All' && 'bg-green-500 text-white'}`}
          onClick={() => dispatch(setCategory('All'))}
        >All
        </button>
        {categories.map((category,index) => (
          <button 
            key={index} 
            className={`px-3 py-2 rounded-lg bg-gray-200 font-bold hover:bg-green-500 hover:text-white ${selectedCategory === category && 'bg-green-500 text-white'}`}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu