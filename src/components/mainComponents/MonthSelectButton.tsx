import { IonButton } from '@ionic/react';
import React from 'react'
import { styled } from 'styled-components';

type Props = {
    month: number;
}

function MonthSelectButton({month}: Props) {
  return (
    <Button>{month}개월</Button>
  )
}

const Button = styled.button`
  display: flex;
  border: none;
  border-radius: 1rem;
  width: 92px;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: var(--ion-color-dark);
`
export default MonthSelectButton