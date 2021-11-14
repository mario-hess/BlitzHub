import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import BurgerMenu from '../burger-menu'

import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'

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

    left: ${(props) => (props.isNavbarToggled ? '0' : '-3.5rem')};

    @media only screen and (min-width: ${(props) =>
            props.theme.BREAKPOINTS.medium}) {
        border-radius: ${(props) =>
            props.isNavbarToggled ? '0 30px 30px 0' : '0 0 30px 0'};
        left: 0;
        width: ${(props) => (props.isNavbarToggled ? '12rem' : '3.5rem')};
    }
`

const Sidebar = () => {
    const isNavbarToggled = useSelector((state) => state.isNavbarToggled)

    return (
        <NavWrapper>
            <Nav isNavbarToggled={isNavbarToggled}>
                <BurgerWrapper>
                    <BurgerMenu />
                </BurgerWrapper>
                <Slickbar isNavbarToggled={isNavbarToggled}>
                    <Link exact to="/" activeClassName="active">
                        <Item>
                            <AiIcons.AiOutlineFire />
                            <Text isNavbarToggled={isNavbarToggled}>Hot</Text>
                        </Item>
                    </Link>

                    <Link exact to="/trending" activeClassName="active">
                        <Item>
                            <IoIcons.IoSparklesOutline />
                            <Text isNavbarToggled={isNavbarToggled}>
                                Trending
                            </Text>
                        </Item>
                    </Link>

                    <Link to="/auth" activeClassName="active">
                        <Item>
                            <AiIcons.AiOutlineUser />
                            <Text isNavbarToggled={isNavbarToggled}>
                                Profile
                            </Text>
                        </Item>
                    </Link>

                    <Link to="/chat" activeClassName="active">
                        <Item>
                            <AiIcons.AiOutlineMail />
                            <Text isNavbarToggled={isNavbarToggled}>Chat</Text>
                        </Item>
                    </Link>

                    <Link to="/likes" activeClassName="active">
                        <Item>
                            <AiIcons.AiOutlineHeart />
                            <Text isNavbarToggled={isNavbarToggled}>Likes</Text>
                        </Item>
                    </Link>

                    <Link to="/settings" activeClassName="active">
                        <Item>
                            <IoIcons.IoSettingsOutline />
                            <Text isNavbarToggled={isNavbarToggled}>
                                Settings
                            </Text>
                        </Item>
                    </Link>
                </Slickbar>
            </Nav>
        </NavWrapper>
    )
}

export default Sidebar
