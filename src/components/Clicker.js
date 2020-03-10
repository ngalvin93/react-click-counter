import React from 'react'

export default function Clicker() {

    const decrementCounter = () => {
        console.log('-')
    }

    const incrementCounter = () => {
        console.log('+')
    }

    return (
        <>
            <button id='decrement-btn' onClick={ decrementCounter }>-</button>
            <button id='increment-btn' onClick={ incrementCounter }>+</button>
        </>
    )
}
