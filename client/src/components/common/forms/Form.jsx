import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const FormElement = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Form = (props) => {
    return <FormElement onSubmit={props.onSubmit}>{props.children}</FormElement>
}

Form.propTypes = {
    label: PropTypes.string,
}
export default Form
