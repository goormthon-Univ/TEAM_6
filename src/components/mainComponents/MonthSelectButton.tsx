import { IonButton } from '@ionic/react';
import React from 'react'
import { styled } from 'styled-components';

type Props = {
    month: number;
}

function MonthSelectButton({month}: Props) {
  return (
     <Button>
      <Radio name='period' type='radio' value={month} id={'radio'+month}/>
      <Label htmlFor={'radio'+month}>{month}개월</Label>
    </Button>
  )
}

const Button = styled.div``;

const Radio = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  border: none;
  border-radius: 1rem;
  width: 92px;
  background: var(--ion-color-secondary);
  height: 48px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: var(--ion-color-dark);
  ${Radio}:checked + & {
    background: var(--ion-color-primary);
  }
`;

export default MonthSelectButton