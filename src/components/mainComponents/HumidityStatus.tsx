import React from 'react'
import { styled } from 'styled-components'

type Props = {
    total: number;
    current: number;
}

function HumidityStatus({total, current}: Props) {
  return (
    <Container>
        <Center>
            <img src='src/assets/main/Group 33661.png' style={{ width: '2.5rem'}}/>
            <HumidityLabel>습도 { parseFloat((current / total).toFixed(1))*100 }%</HumidityLabel>
        </Center>
        <Wave total={total} current={current} />
    </Container>
  )
}

const Container = styled.div`
    background: var(--ion-color-secondary);
    width: 16rem;
    height: 16rem;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Center = styled.div`
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    z-index: 11;
    border: 1px solid var(--ion-color-primary-tint);
`;

const Wave = styled.div<{total: number, current: number}>`
    position: absolute;
    background: linear-gradient(to bottom right, var(--ion-color-primary) 50%, #FDF6E8 100%);
    width: 30rem;
    height: 30rem;
    top: ${(props) => (1 - props.current / props.total) * 15}rem;
    transform-origin: 50% 54%;
    border-radius: 39%;
    animation: drift 7000ms infinite linear;

    @keyframes drift {
        from { transform: rotate(0deg); }
        from { transform: rotate(360deg); }
    }
`;

const HumidityLabel = styled.span`
    color: var(--ion-color-medium);
    font-size: 12px;
    margin-top: 0.5rem;
`

export default HumidityStatus