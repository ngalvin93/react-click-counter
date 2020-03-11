import React, { useState } from 'react'
import './styles/clicker.css'

export default function Clicker() {

    let [count, setCount] = useState(0);

    const handleBtnClick = (e) => {
        console.log(e.target.id)
        e.target.id === 'increment' ? setCount(++count) : setCount(--count)
    }

    return (
        <>
            <h1>{ count }</h1>
            <button className='btn' id='decrement' onClick={ handleBtnClick }>-</button>
            <button className='btn' id='increment' onClick={ handleBtnClick }>+</button>
        </>
    )
}
