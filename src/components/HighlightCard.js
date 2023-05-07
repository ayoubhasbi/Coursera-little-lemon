import React from 'react'

function HighlightCard(props) {
    return (
        <div className='w-[30%] bg-[#D9D9D9] h-[450px] rounded-lg'>
            <div className='mb-4'>
                <img src={props.imageSrc} alt='Dish' className='w-full h-[200px] rounded-t-lg' />
            </div>
            <div className='px-5'>
                <div className='flex justify-between'>
                    <h3 className='text-xl font-medium'>{props.title}</h3>
                    <p className='text-[#FF9900] text-xl font-medium mb-6'>{props.price}</p>
                </div>
                <div>
                    <p className='text-justify mb-6'>{props.description}</p>
                    <a className='font-medium'>Order a delivery</a>
                </div>
            </div>
        </div>
    )
}

export default HighlightCard