import React from "react";
import styled from "styled-components";

type Props = {
  object: string;
};

function HalfYearObjectTitle({ object }: Props) {
  return (
    <Container>
      <FrontButton>반년 목표</FrontButton>
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
`

const TitleContainer = styled.div`
  background-color: var(--ion-color-secondary);
  color: var(--ion-color-dark);
  border-radius: 1rem;
  vertical-align: center;
  text-align: center;
  height: 1.5rem;
  padding-top: 0.3rem;
  width: 100%;
`;

const FrontButton = styled.div`
  background-color: var(--ion-color-primary);
  color: white;
  width: 4rem;
  border-radius: 1rem;
  margin-right: -2rem;
  z-index: 10;
  text-align: center;
  padding-top: 0.3rem;
`;

export default HalfYearObjectTitle;
