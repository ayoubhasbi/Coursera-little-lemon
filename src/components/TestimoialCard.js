import React from 'react'


function TestimoialCard({ name, imageSrc, comment }) {
    return (
        <div className='bg-[#D9D9D9] rounded-lg w-[23%] px-5 py-3'>
            <h3 className='font-medium text-lg mb-4'>Rating</h3>
            <div className='flex items-center'>
                <img src={imageSrc} alt='client' className='rounded-[50%] w-20 h-20 mr-5 mb-5' />
                <h4 className='font-medium text-md'>{name}</h4>
            </div>
            <p className='text-justify text-sm'>{comment}</p>
        </div>
    )
}

export default TestimoialCard