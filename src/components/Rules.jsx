import React from 'react'
import styled from 'styled-components'
const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to Play a dice game</h2>
            <div className='text'>
                <p>Select any number</p>
                <p>Click on dice image </p>
                <p>How to play dice game</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>How to play dice game</p>
                <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
    background-color: #fbf1f1;
    padding: 20px;
    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }

`
