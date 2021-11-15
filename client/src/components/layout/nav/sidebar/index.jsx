import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import { toggleNavbar } from '../../../../redux/actions'
import { setUser } from '../../../../redux/actions'
import BurgerMenu from '../burger-menu'

import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
import * as FiIcons from 'react-icons/fi'

const NavWrapper = styled.div`
    width: 3.5rem;
    height: 100vh;
    display: flex;

    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
`

const Nav = styled.nav`
    background-color: ${(props) =>
        props.isNavbarToggled ? 'white' : 'transparent'};
    box-shadow: ${(props) =>
        props.isNavbarToggled ? 'rgba(0, 0, 0, 0.05) 0px 4px 12px' : 'none'};
    width: 3.5rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;

    transition: all 0.5s ease;

    @media only screen and (min-width: ${(props) =>
            props.theme.BREAKPOINTS.medium}) {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px;
    }
`

const BurgerWrapper = styled.div`
    z-index: 30;
    width: 2.5rem;

    svg {
        width: 100%;
        height: auto;
    }
`

const Link = styled(NavLink)`
    width: 100%;
    padding: 1rem 0;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    display: flex;
    padding-left: 1rem;

    &:hover {
        border-right: 3px solid ${(props) => props.theme.COLORS.purple};
    }

    svg {
        flex-shrink: 0;
        width: 1.5rem;
        height: auto;
        color: ${(props) => props.theme.COLORS.purple};
    }
    &.${(props) => props.activeClassName} {
        border-right: 3px solid ${(props) => props.theme.COLORS.purple};
    }
`

const Item = styled.li`
    display: flex;
    -webkit-tap-highlight-color: transparent;
`

const Text = styled.span`
    margin-left: 1.5rem;
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme.COLORS.purple};
    letter-spacing: 1px;
    width: 0%;

    @media only screen and (min-width: ${(props) =>
            props.theme.BREAKPOINTS.medium}) {
        width: ${(props) => (props.isNavbarToggled ? '100%' : '0%')};
    }
`

const Slickbar = styled.ul`
    background-color: white;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px;
    padding: 1.5rem 0;

    position: absolute;
    top: 4.5rem;
    left: 0;

    transition: all 0.5s ease;
    width: 3.5rem;
    border-radius: 0 0 30px 0;

    left: ${(props) => (props.isNavbarToggled ? '0' : '-3.5rem')};

    @media only screen and (min-width: ${(props) =>
            props.theme.BREAKPOINTS.medium}) {
        border-radius: ${(props) =>
            props.isNavbarToggled ? '0 30px 30px 0' : ' 0 0 30px 0'};
        left: 0;
        width: ${(props) => (props.isNavbarToggled ? '12rem' : '3.5rem')};
    }
`
const LogoutButton = styled.button`
    background: none;
    border: 0;
    color: inherit;
    /* cursor: default; */
    font: inherit;
    line-height: normal;
    overflow: visible;

    width: 100%;
    padding: 1rem 0;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    display: flex;
    padding-left: 1rem;

    &:hover {
        border-right: 3px solid ${(props) => props.theme.COLORS.purple};
    }

    svg {
        flex-shrink: 0;
        width: 1.5rem;
        height: auto;
        color: ${(props) => props.theme.COLORS.purple};
    }
`

const Sidebar = ({ notify }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const isNavbarToggled = useSelector((state) => state.isNavbarToggled)
    const user = useSelector((state) => state.user)

    const logout = async () => {
        toggle()
        try {
            await axios.get(process.env.REACT_APP_BASEURL + '/auth/logout')
            dispatch(setUser(null))
            notify('👋 See you around!')
            history.push('/profile')
        } catch ({ response }) {
            console.log(response)
        }
    }

    const toggle = () => {
        if (isNavbarToggled) dispatch(toggleNavbar())
    }

    return (
        <NavWrapper>
            <Nav isNavbarToggled={isNavbarToggled}>
                <BurgerWrapper>
                    <BurgerMenu />
                </BurgerWrapper>
                <Slickbar isNavbarToggled={isNavbarToggled}>
                    <Link
                        exact
                        to="/"
                        activeClassName="active"
                        onClick={toggle}
                    >
                        <Item>
                            <AiIcons.AiOutlineFire />
                            <Text isNavbarToggled={isNavbarToggled}>Hot</Text>
                        </Item>
                    </Link>

                    <Link
                        exact
                        to="/trending"
                        activeClassName="active"
                        onClick={toggle}
                    >
                        <Item>
                            <IoIcons.IoSparklesOutline />
                            <Text isNavbarToggled={isNavbarToggled}>
                                Trending
                            </Text>
                        </Item>
                    </Link>

                    <Link
                        to="/profile"
                        activeClassName="active"
                        onClick={toggle}
                    >
                        <Item>
                            <AiIcons.AiOutlineUser />
                            <Text isNavbarToggled={isNavbarToggled}>
                                Profile
                            </Text>
                        </Item>
                    </Link>
                    {user ? (
                        <Link
                            to="/chat"
                            activeClassName="active"
                            onClick={toggle}
                        >
                            <Item>
                                <AiIcons.AiOutlineMail />
                                <Text isNavbarToggled={isNavbarToggled}>
                                    Chat
                                </Text>
                            </Item>
                        </Link>
                    ) : (
                        ''
                    )}

                    {user ? (
                        <Link
                            to="/likes"
                            activeClassName="active"
                            onClick={toggle}
                        >
                            <Item>
                                <AiIcons.AiOutlineHeart />
                                <Text isNavbarToggled={isNavbarToggled}>
                                    Likes
                                </Text>
                            </Item>
                        </Link>
                    ) : (
                        ''
                    )}

                    {user ? (
                        <Link
                            to="/settings"
                            activeClassName="active"
                            onClick={toggle}
                        >
                            <Item>
                                <IoIcons.IoSettingsOutline />
                                <Text isNavbarToggled={isNavbarToggled}>
                                    Settings
                                </Text>
                            </Item>
                        </Link>
                    ) : (
                        ''
                    )}

                    {user ? (
                        <LogoutButton onClick={logout}>
                            <Item>
                                <FiIcons.FiLogOut />
                                <Text isNavbarToggled={isNavbarToggled}>
                                    Logout
                                </Text>
                            </Item>
                        </LogoutButton>
                    ) : (
                        ''
                    )}
                </Slickbar>
            </Nav>
        </NavWrapper>
    )
}

export default Sidebar
