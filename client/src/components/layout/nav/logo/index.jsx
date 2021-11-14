import styled from "styled-components"
import Zap from "../../../base/icons/Zap"

const LogoWrapper = styled.div`
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
`

const Logo = () => {
    return (
        <LogoWrapper>
            <Zap />
        </LogoWrapper>
    )
}

export default Logo
