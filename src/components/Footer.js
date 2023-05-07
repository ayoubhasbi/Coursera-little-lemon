import React from 'react'

function Footer() {
    return (
        <footer className='flex justify-between items-center py-16'>
            <img src={require('../assets/logo.png')} className='w-[180px]' />
            <div>
                <p>Copyright © 2023</p>
            </div>
        </footer>
    )
}

export default Footer