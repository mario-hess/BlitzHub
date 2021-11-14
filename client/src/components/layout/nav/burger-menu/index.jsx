import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../styles/theme'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNavbar } from '../../../../redux/actions'

const BurgerMenuWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
`
const BurgerMenuSvg = styled.svg`
    display: flex;
    align-items: center;
    justify-content: center;
`

const FirstPath = styled.path`
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: none;
    stroke: ${(props) => props.theme.COLORS.purple};
    stroke-width: 1.5875;
    stroke-dasharray: 16 207;
    stroke-dashoffset: 0;

    stroke-dasharray: ${(props) => (props.isNavbarToggled ? '15 207;' : null)};

    stroke-dashoffset: ${(props) => (props.isNavbarToggled ? '-37;' : null)};
`

const SecondPath = styled.path`
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: none;
    stroke: ${(props) => props.theme.COLORS.purple};
    stroke-width: 1.5875;
    stroke-dasharray: 16 16;
    stroke-dashoffset: 0;

    stroke-dashoffset: ${(props) => (props.isNavbarToggled ? '-16;' : null)};
`
const ThirdPath = styled.path`
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: none;
    stroke: ${(props) => props.theme.COLORS.purple};
    stroke-width: 1.5875;
    stroke-dasharray: 16 207;
    stroke-dashoffset: 0;

    stroke-dasharray: ${(props) => (props.isNavbarToggled ? '15 207;' : null)};

    stroke-dashoffset: ${(props) => (props.isNavbarToggled ? '-37;' : null)};
`

export const BurgerMenu = () => {
    const isNavbarToggled = useSelector((state) => state.isNavbarToggled)

    const dispatch = useDispatch()

    const firstDash =
        'M 5.2916667,7.6729163 H 21.166667 c 0,0 3.788163,-0.633206 3.919767,10.1440967 0.03434,2.812289 -1.573829,3.296036 -2.6112,3.281 C 21.081528,21.077812 19.84375,19.84375 19.84375,19.84375 L 6.6145833,6.6145833'
    const secondDash = 'M 5.2916667,13.229167 H 21.166668'
    const thirdDash =
        'M 5.2916667,18.772184 H 21.166667 c 0,0 3.788163,0.633206 3.919767,-10.144097 0.03434,-2.8122891 -1.573829,-3.2960361 -2.6112,-3.2810001 -1.393706,0.020201 -2.631484,1.254263 -2.631484,1.254263 L 6.6145833,19.830517'

    return (
        <BurgerMenuWrapper
            onClick={() => {
                dispatch(toggleNavbar())
            }}
        >
            <BurgerMenuSvg
                viewBox="0 0 26.458333 26.458333"
                fill={COLORS.purple}
            >
                <FirstPath
                    isNavbarToggled={isNavbarToggled}
                    d={firstDash}
                    fill={COLORS.purple}
                />
                <SecondPath
                    isNavbarToggled={isNavbarToggled}
                    d={secondDash}
                    fill={COLORS.purple}
                />

                <ThirdPath
                    isNavbarToggled={isNavbarToggled}
                    d={thirdDash}
                    fill={COLORS.purple}
                />
            </BurgerMenuSvg>
        </BurgerMenuWrapper>
    )
}

export default BurgerMenu
