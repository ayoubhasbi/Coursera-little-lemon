import React from 'react'
import TestimoialCard from './TestimoialCard';
import SectionTitle from './SectionTitle';


const data = [{
    id: 'john',
    name: 'John',
    imageSrc: () => require('../assets/john.jpg'),
    comment: 'Lorem ipsum dolor sit amet consectetur Sed faucibus lorem diam non blandit'
},
{
    id: 'sara',
    name: 'Sara',
    imageSrc: () => require('../assets/sara.jpg'),
    comment: 'Lorem ipsum dolor sit amet consectetur Sed faucibus lorem diam non blandit'
},
{
    id: 'jack',
    name: 'Jack',
    imageSrc: () => require('../assets/jack.jpg'),
    comment: 'Lorem ipsum dolor sit amet consectetur Sed faucibus lorem diam non blandit'
},
{
    id: 'celine',
    name: 'Celine',
    imageSrc: () => require('../assets/celine.jpg'),
    comment: 'Lorem ipsum dolor sit amet consectetur Sed faucibus lorem diam non blandit'
}]


function Testimonials() {
    return (
        <section className='py-20'>
            <SectionTitle title='Testimonials' color='#F4CE14' marginBottom='80px' />
            <div className='flex justify-between'>
                {data.map((item, index) => {
                    return <TestimoialCard key={item.id} name={item.name} imageSrc={item.imageSrc()} comment={item.comment} />
                })}
            </div>
        </section>
    )
}

export default Testimonials