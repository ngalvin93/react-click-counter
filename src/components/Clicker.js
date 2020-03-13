import React, { useState } from 'react'
import { Text, Button } from 'rebass'
import './styles/clicker.css'

export default function Clicker() {

    let [count, setCount] = useState(0);

    const handleBtnClick = (e) => {
        console.log(e.target.id)
        e.target.id === 'increment' ? setCount(++count) : setCount(--count)
    }

    return (
        <div id='counter'>
            <Text
                fontSize={[ 3, 4, 5 ]}
                fontWeight='bold'
                color='primary'>
                { count }
            </Text>
            <Button className='btn' id='decrement' onClick={ handleBtnClick } variant='primary' mr={2}>-</Button>
            <Button className='btn' id='increment' onClick={ handleBtnClick } variant='primary' mr={2}>+</Button>
        </div>
    )
}
