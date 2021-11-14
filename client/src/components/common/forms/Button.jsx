import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ButtonElement = styled.button`
    font-family: "Source Sans Pro", sans-serif;
    background-color: ${(props) => props.theme.COLORS.purple};
    color: ${(props) => props.theme.COLORS.background};
    padding: 12px 24px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 1em;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    touch-action: manipulation;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transition: 0.2s;
    margin-top: 36px;

    &:hover {
        background-color: ${(props) => props.theme.COLORS.purple};
    }
`

const Button = (props) => {
    return (
        <ButtonElement
            type={props.type}
            label={props.label}
            value={props.value}
            onClick={props.onClick}
        >
            {props.label}
        </ButtonElement>
    )
}

Button.propTypes = {
    label: PropTypes.string,
}

export default Button
