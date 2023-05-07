import React from 'react';

const navBarData = [{
    id: 'home',
    title: 'Home',
}, {
    id: 'about',
    title: 'About',
}, {
    id: 'menu',
    title: 'Menu',
}, {
    id: 'reservations',
    title: 'Reservations',
}, {
    id: 'order',
    title: 'Order online',
}, {
    id: 'login',
    title: 'Login',
}
]

function Navbar() {
    return (
        <nav className='w-full py-6 flex justify-between'>
            <img src={require('../assets/logo.png')} alt='logo' className='w-[120px]' />
            <ul className='list-none flex'>
                {navBarData.map((item, index) => {
                    return (
                        <li className={`font-Lato font-medium ${index === navBarData.length - 1 ? 'mr-0' : 'mr-14'}`} key={item.id}><a>{item.title}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar