import styled from 'styled-components'

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

const ProfilePage = () => {
    return (
        <Wrapper>
            <Heading>Profile</Heading>
        </Wrapper>
    )
}

export default ProfilePage
