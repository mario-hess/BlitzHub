import React, { useState } from 'react'
import axios from 'axios'

import Form from '../../common/forms/Form'
import Input from '../../common/forms/Input'
import Button from '../../common/forms/Button'
import LoadingSpinner from '../../common/loading-spinner'

const SignupForm = ({
    switchForm,
    setSwitchForm,
    notifyError,
    notifySuccess,
}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleInputEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handleInputPasswordChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleInputConfirmPasswordChange = (event) => {
        event.preventDefault()
        setConfirmPassword(event.target.value)
    }

    const signup = async () => {
        setIsLoading(true)
        try {
            const response = await axios.post(
                process.env.REACT_APP_BASEURL + '/auth/signup',
                {
                    email,
                    password,
                    confirmPassword,
                }
            )
            setIsLoading(false)
            notifySuccess(response.data.message)
            setSwitchForm(!switchForm)
            console.log(response)
        } catch ({ response }) {
            setIsLoading(false)
            notifyError(response.data.message)
            console.log(response)
        }
    }

    return isLoading ? (
        <LoadingSpinner />
    ) : (
        <Form>
            <Input
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleInputEmailChange}
            ></Input>
            <Input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleInputPasswordChange}
            ></Input>
            <Input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={handleInputConfirmPasswordChange}
            ></Input>
            <Button
                onClick={(e) => {
                    e.preventDefault()
                    signup()
                }}
                type="submit"
                label="Sign Up"
            />
        </Form>
    )
}

export default SignupForm
