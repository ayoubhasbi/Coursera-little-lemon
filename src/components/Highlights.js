import React from 'react';
import HighlightCard from './HighlightCard';
import SectionTitle from './SectionTitle';

const dataSpecials = [
    {
        id: 'greekSalad',
        title: 'Greek salad',
        price: '12.99$',
        description: 'Lorem ipsum dolor sit amet consecteturIpsum adipisc nisl varius pharetra arcu.Nunc ullamcorper  eget pulvinar lectus purus.',
        getIamgeSrc: () => require('../assets/greek_salad.jpg')
    },
    {
        id: 'bruchetta',
        title: 'Bruchetta',
        price: '11.99$',
        description: 'Lorem ipsum dolor sit amet consecteturIpsum adipisc nisl varius pharetra arcu.Nunc ullamcorper  eget pulvinar lectus purus.',
        getIamgeSrc: () => require('../assets/bruchetta.png')
    },
    {
        id: 'lemonDessert',
        title: 'lemon dessert',
        price: '09.99$',
        description: 'Lorem ipsum dolor sit amet consecteturIpsum adipisc nisl varius pharetra arcu.Nunc ullamcorper  eget pulvinar lectus purus.',
        getIamgeSrc: () => require('../assets/lemon_dessert.jpg')
    }
]

function Highlights() {
    return (
        <section className='w-full py-20'>
            <div className='flex justify-between mb-20'>
                <SectionTitle title='This week specials!' />
                <a className='font-medium text-md bg-[#F4CE14] px-6 py-3 rounded-md'>Online menu</a>
            </div>
            <div className='flex justify-between'>
                {dataSpecials.map((item, index) => {
                    return (
                        <HighlightCard key={item.id} imageSrc={item.getIamgeSrc()} title={item.title} price={item.price} description={item.description} />
                    )
                })}
            </div>
        </section>
    )
}

export default Highlights