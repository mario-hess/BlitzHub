import { useEffect, useCallback } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/actions/index'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global-styles'
import { COLORS, BREAKPOINTS, TAPHEIGHT } from './styles/theme'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import HotPage from './components/hot'
import TrendingPage from './components/trending'
import AuthPage from './components/auth'
import LikesPage from './components/likes'
import ErrorPage from './components/error'
import Sidebar from './components/layout/nav/sidebar'

const Root = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.COLORS.background};
`

const App = ({ children }) => {
    const notify = (message) =>
        toast(message, {
            hideProgressBar: true,
        })
    const notifyError = (message) => toast.error(message)
    const notifySuccess = (message) => toast.success(message)
    const dispatch = useDispatch()

    const silentRefresh = useCallback(async () => {
        try {
            const response = await axios.get(
                process.env.REACT_APP_BASEURL + '/auth/refresh-token'
            )
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${response.data.token}`
            console.log('Refreshed JWT')
            dispatch(setUser(response.data.user))

            setTimeout(() => {
                silentRefresh()
            }, response.data.expiresIn * 1000 - 1000)
        } catch ({ response }) {
            if (response.status !== 201) {
                console.log('Not Authorized')
            }
        }
    }, [dispatch])

    useEffect(() => {
        silentRefresh()
    }, [silentRefresh])

    return (
        <ThemeProvider
            theme={{
                COLORS: COLORS,
                BREAKPOINTS: BREAKPOINTS,
                TAPHEIGHT: TAPHEIGHT,
            }}
        >
            {children}

            <Root>
                <GlobalStyles />
                <Router>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        style={{ touchAction: 'none' }}
                    />
                    <Sidebar notify={notify} />
                    <Switch>
                        <Route path="/" component={HotPage} exact />
                        <Route path="/trending" component={TrendingPage} />
                        <Route path="/profile">
                            <AuthPage
                                silentRefresh={silentRefresh}
                                notifySuccess={notifySuccess}
                                notifyError={notifyError}
                            />
                        </Route>
                        <Route path="/likes" component={LikesPage} />
                        <Route path="/page-not-found" component={ErrorPage} />
                        <Redirect to="/page-not-found" />
                    </Switch>
                </Router>
            </Root>
        </ThemeProvider>
    )
}

export default App
