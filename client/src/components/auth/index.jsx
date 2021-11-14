import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import LoginForm from './login'
import SignupForm from './signup'
import ProfilePage from '../profile'

const Wrapper = styled.div`
    margin: 0;
    padding-top: 30vh;
    width: 100%;
    text-align: center;
`

const SwitchWrapper = styled.div`
    color: ${(props) => props.theme.COLORS.foreground};
    margin-top: 16px;
    letter-spacing: 0.5px;
`

const Switch = styled.p`
    display: inline-block;
    color: ${(props) => props.theme.COLORS.purple};
    border-bottom: 1px solid ${(props) => props.theme.COLORS.purple};
    font-weight: 700;
    cursor: pointer;
`

const AuthPage = ({ silentRefresh }) => {
    const [switchForm, setSwitchForm] = useState(false)
    const user = useSelector((state) => state.user)

    const switchForms = (e) => {
        e.preventDefault()
        setSwitchForm(!switchForm)
    }

    const AuthForm = () => {
        return (
            <Wrapper>
                {switchForm ? (
                    <SignupForm />
                ) : (
                    <LoginForm silentRefresh={silentRefresh} />
                )}

                {switchForm ? (
                    <SwitchWrapper>
                        Have an Account?{' '}
                        <Switch onClick={switchForms}>Login</Switch>
                    </SwitchWrapper>
                ) : (
                    <SwitchWrapper>
                        No Account?{' '}
                        <Switch onClick={switchForms}>Sign Up</Switch>
                    </SwitchWrapper>
                )}
            </Wrapper>
        )
    }

    return user ? <ProfilePage /> : <AuthForm />
}

export default AuthPage
