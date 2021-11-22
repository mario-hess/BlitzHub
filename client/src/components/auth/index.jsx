import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import LoginForm from './login'
import SignupForm from './signup'
import ProfilePage from '../profile'
import LoadingSpinner from '../common/loading-spinner'

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

const AuthPage = ({ silentRefresh, notifySuccess, notifyError }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [switchForm, setSwitchForm] = useState(false)
    const user = useSelector((state) => state.user)

    const switchForms = () => {
        setSwitchForm(!switchForm)
    }

    const AuthForm = () => {
        return isLoading ? (
            <LoadingSpinner />
        ) : (
            <Wrapper>
                {switchForm ? (
                    <>
                        <SignupForm
                            switchForm={switchForm}
                            setSwitchForm={setSwitchForm}
                            notifyError={notifyError}
                            notifySuccess={notifySuccess}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />
                        <SwitchWrapper>
                            Have an Account?{' '}
                            <Switch onClick={switchForms}>Login</Switch>
                        </SwitchWrapper>
                    </>
                ) : (
                    <>
                        <LoginForm
                            silentRefresh={silentRefresh}
                            notifyError={notifyError}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                        />
                        <SwitchWrapper>
                            No Account?{' '}
                            <Switch onClick={switchForms}>Sign Up</Switch>
                        </SwitchWrapper>
                    </>
                )}
            </Wrapper>
        )
    }

    return user ? <ProfilePage /> : <AuthForm />
}

export default AuthPage
