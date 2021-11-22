import { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../styles/theme'
import { random } from '../random'
import { range } from '../range'
import { useRandomInterval } from '../../hooks/useRandomInterval'
import { HeartEffect } from './HeartEffect'

const Wrapper = styled.span`
    display: inline-block;
    position: relative;
    letter-spacing: 0px;
    cursor: default;
`

const ChildWrapper = styled.strong`
    position: relative;
    z-index: 1;
    font-weight: 700;
    letter-spacing: 0px;
    color: ${(props) => props.theme.COLORS.foreground};
    cursor: default;
`

const generateHeart = (color) => {
    const heart = {
        id: String(random(1, 99999)),
        createdAt: Date.now(),
        color,
        size: random(20, 25),
        style: {
            top: random(-20, 100) + '%',
            left: random(-10, 100) + '%',
        },
    }
    return heart
}

const Hearts = ({ color = COLORS.red, children }) => {
    const [hearts, setHearts] = useState(() => {
        return range(1).map(() => generateHeart(color))
    })

    useRandomInterval(
        () => {
            const heart = generateHeart(color)
            const now = Date.now()
            const nextHearts = hearts.filter((sp) => {
                const delta = now - sp.createdAt
                return delta < 750
            })
            nextHearts.push(heart)
            setHearts(nextHearts)
        },
        300,
        450
    )
    return (
        <Wrapper>
            {hearts.map((heart) => (
                <HeartEffect
                    key={heart.id}
                    color={heart.color}
                    size={heart.size}
                    style={heart.style}
                />
            ))}
            <ChildWrapper>{children}</ChildWrapper>
        </Wrapper>
    )
}

export default Hearts
