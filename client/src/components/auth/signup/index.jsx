import React, { useState } from 'react'
import axios from 'axios'

import Form from '../../common/forms/Form'
import Input from '../../common/forms/Input'
import Button from '../../common/forms/Button'

const SignupForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(true)

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
        try {
            const response = await axios.post(
                process.env.REACT_APP_BASEURL + '/auth/signup',
                {
                    email,
                    password,
                    confirmPassword,
                }
            )
            console.log('User created')
            console.log(response)
        } catch ({ response }) {
            console.log(response)
        }
    }

    return (
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
