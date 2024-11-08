import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name}`)
  const selectedCategory = useSelector(state => state.category.category)
  const searchItem = useSelector(state => state.search.searchItem)

  return ( 
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='flex flex-wrap gap-5 justify-center lg:justify-start mr-6 ml-6 my-10'>

      {
        FoodData.filter(item => (
          selectedCategory === 'All' 
            ? item.name.toLowerCase().includes(searchItem.toLowerCase())
            : selectedCategory === item.category && item.name.toLowerCase().includes(searchItem.toLowerCase())
        ))
        .map((data) => (
          <div key={data.id} >
            <FoodCard 
              id={data.id}
              img={data.img} 
              name={data.name} 
              price={data.price}
              desc={data.desc}
              category={data.category}
              rating={data.rating}
              handleToast={handleToast}
            />
          </div>
        ))
      }
      </div>
    </>
  )
}

export default FoodItems