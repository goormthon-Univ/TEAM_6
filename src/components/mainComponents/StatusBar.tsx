import { IonLabel } from '@ionic/react';
import React from 'react'
import styled from 'styled-components';

type Props = {
    title: string;
    total: number;
    current: number;
}

function StatusBar({title, total, current}: Props) {
  return (
    <Container>
        <IonLabel style={{ textAlign: 'left', width: '80%' }} color='dark'>{ title }</IonLabel>
        <Bar>
            <Left total={total} current={current}/>
            <Right />
        </Bar>
        <Percent>
            <MiniLabel>0%</MiniLabel>
            <MiniLabel>100%</MiniLabel>
        </Percent>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
`;

const Bar = styled.div`
    height: 1rem;
    width: 80%;
    border-radius: 1rem;
    display: flex;
    margin-top: 4px;
`

const Left = styled.div<{ total: number, current: number }>`
    border-radius: 1rem;
    flex: calc(${props => props.current / props.total });
    background: var(--ion-color-tertiary);
    z-index: 10;
`

const Right = styled.div`
    border-radius: 1rem;
    flex: 1;
    padding-left: 1rem;
    margin-left: -1rem;
    background: var(--ion-color-secondary);
`

const Percent = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-top: 4px;
`

const MiniLabel = styled.span`
    font-size: 0.5rem;
    color: var(--ion-color-medium);
`

export default StatusBar