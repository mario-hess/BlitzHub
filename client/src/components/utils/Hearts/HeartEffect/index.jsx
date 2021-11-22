import styled, { keyframes } from 'styled-components'

const comeInOut = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`

const spin = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-24px);
    }
`

const Wrapper = styled.span`
    position: absolute;
    display: block;
    animation: ${comeInOut} 1000ms forwards;
`

const HeartSvg = styled.svg`
    display: block;
    animation: ${spin} 2000ms linear;
`

export const HeartEffect = ({ size, color, style }) => {
    const path =
        'M100,9.8C80.16,2.54,64,23.65,64,23.65S48.53,3.5,28.36,9.75 C-3.25,19.55-0.42,58.7,15.14,78.82C30.03,98.07,61,117.61,64,119.57v0.12c0,0.02,0.01,0.03,0.01,0.03s0.02-0.03,0.06-0.06 c0.04,0.03-0.02,0.06-0.02,0.06S64,119.71,64,119.69v-0.12c3-1.96,33.87-23.01,48.75-42.26C128.31,57.18,130.75,21.05,100,9.8z'
    return (
        <Wrapper style={style}>
            <HeartSvg
                width={size}
                height={size}
                viewBox="0 0 128 128"
                fill="none"
            >
                <path d={path} fill={color} />
            </HeartSvg>
        </Wrapper>
    )
}
