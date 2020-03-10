import React, { useState } from 'react'

export default function Clicker() {

    let [count, setCount] = useState(0);

    const decrementCounter = () => {
        console.log('-', count)
        setCount(--count)
    }

    const incrementCounter = () => {
        console.log('+', count)
        setCount(++count)
    }

    return (
        <>
            <h1>{ count }</h1>
            <button className='btn' onClick={ decrementCounter }>-</button>
            <button className='btn' onClick={ incrementCounter }>+</button>
        </>
    )
}
