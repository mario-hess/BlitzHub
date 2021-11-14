import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const InputElement = styled.input`
    background-color: #fafafa;
    color: ${(props) => props.theme.COLORS.foreground};
    padding: 10px 18px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1.1em;
    letter-spacing: 0.8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin: 10px 0;

    &:focus {
        outline: 3px solid ${(props) => props.theme.COLORS.purple};
    }
`
const Input = (props) => {
    return (
        <InputElement
            id={props.id}
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        >
            {props.children}
        </InputElement>
    )
}

Input.propTypes = {
    label: PropTypes.string,
}

export default Input
