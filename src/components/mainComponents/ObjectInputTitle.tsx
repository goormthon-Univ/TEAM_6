import React from 'react'
import styled from 'styled-components';
import MonthSelectButton from './MonthSelectButton';

type Props = {
    numbering: number;
    title: string;
}

function ObjectInputTitle({numbering, title}: Props) {
  return (
    <Container>
        <Numbering>{numbering}</Numbering>
        <Title>{title}</Title>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.5rem;
    justify-content: flex-start;
`;

const Numbering = styled.div`
    background: var(--ion-color-primary);
    color: white;
    padding: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    background: var(--ion-color-primary-tint);
    width: 9rem;
    padding: 0.2rem 1rem; 
    text-align: center;
    border-radius: 1rem;
    height: 1.5rem;
`;

export default ObjectInputTitle