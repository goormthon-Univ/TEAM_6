import React from 'react'
import styled from 'styled-components';

type Props = {
  object: string;
}

function MonthObjectTitle({object}: Props) {
  return (
    <Container>
      <FrontButton>이번 달 목표</FrontButton>
      <TitleContainer>{object}</TitleContainer>
    </Container>
    
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.8rem auto;
  font-size: 12px;
  width: 80%;
  margin-top: 1.5rem;
`

const TitleContainer = styled.div`
  border: 1px solid var(--ion-color-primary);
  color: var(--ion-color-dark);
  border-radius: 1rem;
  vertical-align: center;
  text-align: center;
  height: 1.5rem;
  padding-top: 0.2rem;
  width: 100%;
`;

const FrontButton = styled.div`
  background-color: var(--ion-color-primary);
  color: white;
  width: 6rem;
  border-radius: 1rem;
  margin-right: -2rem;
  z-index: 10;
  text-align: center;
  padding-top: 0.3rem;
`;


export default MonthObjectTitle