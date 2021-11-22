import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { setUser } from '../../../redux/actions'
import Form from '../../common/forms/Form'
import Input from '../../common/forms/Input'
import Button from '../../common/forms/Button'

const LoginForm = ({ isLoading, setIsLoading, silentRefresh, notifyError }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleInputEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handleInputPasswordChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const login = async () => {
        setIsLoading(true)
        try {
            const response = await axios.post(
                process.env.REACT_APP_BASEURL + '/auth/login',
                {
                    email,
                    password,
                }
            )
            console.log('Login successful')
            dispatch(setUser(response.data.user))
            silentRefresh()
            history.push('/')
        } catch ({ response }) {
            console.log(response.data.message)
            notifyError(response.data.message)
            setIsLoading(false)
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
            />
            <Input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleInputPasswordChange}
            ></Input>

            <Button
                onClick={(e) => {
                    e.preventDefault()
                    login()
                }}
                type="submit"
                label="Login"
            />
        </Form>
    )
}

export default LoginForm
