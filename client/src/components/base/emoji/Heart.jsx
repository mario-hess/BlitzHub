import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
    height: 32px;
    width: 32px;
`

const Heart = () => {
    return (
        <Wrapper viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="63.9026"
                x2="63.9026"
                y1="8.5417"
                y2="107.2432"
            >
                <stop offset="0" stopColor="#FF4D4A" />
                <stop offset="0.9693" stopColor="#E53935" />
            </linearGradient>
            <path
                d="M100,9.8C80.16,2.54,64,23.65,64,23.65S48.53,3.5,28.36,9.75 C-3.25,19.55-0.42,58.7,15.14,78.82C30.03,98.07,61,117.61,64,119.57v0.12c0,0.02,0.01,0.03,0.01,0.03s0.02-0.03,0.06-0.06 c0.04,0.03-0.02,0.06-0.02,0.06S64,119.71,64,119.69v-0.12c3-1.96,33.87-23.01,48.75-42.26C128.31,57.18,130.75,21.05,100,9.8z"
                fill="url(#SVGID_1_)"
            />
        </Wrapper>
    )
}

export default Heart
