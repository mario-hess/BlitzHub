import { useEffect } from 'react'
import styled from 'styled-components'

import Heart from '../base/emoji/Heart'

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

const LikesPage = () => {
    useEffect(() => {
        console.log('Rendering LikesPage')

        return () => console.log('Cleanup LikesPage')
    })
    return (
        <Wrapper>
            <Heading>
                Likes <Heart />
            </Heading>
        </Wrapper>
    )
}

export default LikesPage
