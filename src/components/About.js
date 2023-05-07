import React from 'react'
import SectionTitle from './SectionTitle'

function About() {
    return (
        <section className='w-full pt-20 pb-40 relative flex justify-between'>
            <div>
                <SectionTitle title={'Little lemon'} />
                <h2 className='font-medium text-2xl mb-12'>Chikago</h2>
                <p className='w-[350px]'>Lorem ipsum dolor sit amet consectetur
                    Sed faucibus lorem diam non blandit
                    Lorem ipsum dolor sit amet consectetur
                    Sed faucibus lorem diam non blandit
                    Ultricies eleifend est sapien non egestas
                    Ultricies eleifend est sapien non egestas. </p>
            </div>

            <div>
                <img src={require('../assets/mario_adrian_2 .jpg')} className='w-[200px] absolute top-32 right-20 border-solid border-8 border-[#495E57]' />
                <img src={require('../assets/mario_adrian_1 .jpg')} className='w-[200px] absolute top-20 right-0 border-solid border-8 border-[#495E57]' />
            </div>
        </section>
    )
}

export default About