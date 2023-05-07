import React from 'react'

function SectionTitle({ title, ...StyleProps }) {
    return (
        <h1 style={{ ...StyleProps }} className='text-4xl font-bold'>{title}</h1>
    )
}

export default SectionTitle