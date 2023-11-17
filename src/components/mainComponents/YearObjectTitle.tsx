import React from 'react'
import styled from 'styled-components';

type Props = {
  object_title: string;
}

function YearObjectTitle({object_title}: Props) {
  return (
    <Container>{object_title}</Container>
  );
}

const Container = styled.div`
  background-color: var(--ion-color-primary);
  color: white;
  border-radius: 1rem;
  font-size: 12px;
  vertical-align: center;
  text-align: center;
  width: 80%;
  height: 1.5rem;
  margin: 0.8rem auto;
  margin-top: 1rem;
  padding-top: 0.3rem;
`


export default YearObjectTitle