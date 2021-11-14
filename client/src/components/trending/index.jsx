import { useEffect } from 'react'
import styled from 'styled-components'

import Sparkles from '../base/icons/Sparkles'

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Heading = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`

const TrendingPage = () => {
    useEffect(() => {
        console.log('Rendering TrendingPage')

        return () => console.log('Cleanup TrendingPage')
    })
    return (
        <Wrapper>
            <Heading>
                Trending <Sparkles />
            </Heading>
        </Wrapper>
    )
}

export default TrendingPage
