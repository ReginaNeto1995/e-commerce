import React from 'react';

const HomeSectionCard = () => {
    return (
        <div className ='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg 
        overflow-hidden w-[15rem] mx-3'>
           
           <div className='h-[13rem] w-[10rem]'>
                <img className='object-cover object-top w-full h-full' 
                src="https://static.zara.net/assets/public/b1a5/1f15/f5fc4d379a89/d58abd45ac48/08566308600-e1/08566308600-e1.jpg?ts=1721394684861&w=2630" 
                alt="" />
           </div>

           <div className='p-4'>
                <h3 className = 'text-lg font-medium text-gray-900'>NoFilter</h3>
                <p className='mt-2 text-sm text-gray-500'> Woman Solid Pure Cotton Straight Kurta</p>
           </div>

        </div>
    )
}
export default HomeSectionCard;