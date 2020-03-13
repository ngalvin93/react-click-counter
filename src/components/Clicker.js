import React, { useState } from 'react'
import { Text, Button, Box } from 'rebass'

export default function Clicker() {

    let [count, setCount] = useState(0);

    const handleBtnClick = (e) => {
        console.log(e.target.id)
        e.target.id === 'increment' ? setCount(++count) : setCount(--count)
    }

    return (
        <Box width={1} height={500} alignItems='center' alignContent='center'>
            <div id='counter'>
                <Text
                    fontSize={[ 5, 6, 7]}
                    fontWeight='bold'
                    color='primary'>
                    { count }
                </Text>
                <Button className='btn' id='decrement' onClick={ handleBtnClick } variant='primary' mr={2}>-</Button>
                <Button className='btn' id='increment' onClick={ handleBtnClick } variant='primary' mr={2}>+</Button>
            </div>
        </Box>
    )
}
