import { useEffect } from 'react'
import styled from 'styled-components'

import Fire from '../base/icons/Fire'

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

const HotPage = () => {
    useEffect(() => {
        console.log('Rendering HotPage')

        return () => console.log('Cleanup HotPage')
    })
    return (
        <Wrapper>
            <Heading>
                Hot <Fire />
            </Heading>
        </Wrapper>
    )
}

export default HotPage
