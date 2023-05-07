import React from 'react'

function Hero() {
    return (
        <section className='w-full flex justify-between py-14'>
            <div>
                <h1 className='text-[#F4CE14] text-5xl font-bold'>Little Lemon</h1>
                <h2 className='text-white text-2xl font-medium mb-12'>Chikago</h2>
                <p className='text-white text-md mb-12 w-[320px]'>Lorem ipsum dolor sit amet consectetur
                    Sed faucibus lorem diam non blandit
                    Ultricies eleifend est sapien non egestas.
                </p>
                <a href='#' className='font-medium text-md bg-[#F4CE14] px-6 py-3 rounded-md'>Reserve a Table</a>
            </div>
            <div className='w-[320px] h-[320px] rounded overflow-hidden'>
                <img src={require('../assets/restauranfood.jpg')} alt='restaurant food' className='w-[340px] h-[420px]' />
            </div>
        </section>
    )
}

export default Hero