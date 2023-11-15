import React from 'react'
import styled from 'styled-components'

type Props = {
    children?: React.ReactElement
}

function ObjectSubTitle({children}: Props) {
  return (
    <Container>{children ? children : 'ObjectSubTitle'}</Container>
  )
}

const Container = styled.div`
    border-radius: 1rem;
    border: 2px solid var(--ion-color-primary);
    font-weight: 500;
    padding: 0.3rem;
    text-align: center;
    margin: 0.8rem 0rem;
`;

export default ObjectSubTitle