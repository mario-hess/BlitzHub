import { useEffect } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Heading = styled.h1`
    text-align: center;
`

const LandingPage = () => {
    useEffect(() => {
        console.log('Rendering LandingPage')

        return () => console.log('Cleanup LandingPage')
    })
    return (
        <Wrapper>
            <Heading>Landing Page</Heading>
        </Wrapper>
    )
}

export default LandingPage
