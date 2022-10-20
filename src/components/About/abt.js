import React from 'react'
import styled from 'styled-components'
import image1 from '../../images/one.jpg'
import image2 from '../../images/three.jpg'
import image3 from '../../images/two.jpg'

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

function abt() {
  return (
    <Wrapper>
    <div class="row">
        <div class="column">
            <div class="card">
            <img src={image1} alt="Jane"/>
            <div class="container">
                <h2>Ankit Seth</h2>
                <p class="title">Student @ K L University</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <img src={image2} alt="Mike"/>
            <div class="container">
                <h2>Rishav Kumar</h2>
                <p class="title">Student @ K L University</p>
                <p>EAT CODE SLEEP REPEAT</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <img src={image3} alt="John"/>
            <div class="container">
                <h2>M S Koushik</h2>
                <p class="title">Student @ K L University</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            </div>
            </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default abt;
