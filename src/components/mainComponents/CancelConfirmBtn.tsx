import React from 'react'
import styled from 'styled-components'

type Props = {
  hasCancel: boolean;
  confirmMessage: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

function CancelConfirmBtn({hasCancel, confirmMessage, onCancel, onConfirm}: Props) {
  return (
    <Container>
        { hasCancel && <CancelButton onClick={onCancel}>취소</CancelButton> }
        <ConfirmButton onClick={onConfirm}>{confirmMessage}</ConfirmButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const CancelButton = styled.button`
  height: 2.5rem;
  display: flex;
  align-items: center;
  width: 72px;
  border-radius: 1rem;
  justify-content: center;
  color: var(--ion-color-dark);
  background: var(--ion-color-secondary);

  transition: 0.5s;

  &:hover {
    background: white;
    border: 1px solid var(--ion-color-medium);
  }
`;


const ConfirmButton = styled.button`
  height: 2.5rem;
  display: flex;
  align-items: center;
  width: 72px;
  border-radius: 1rem;
  justify-content: center;
  color: white;
  background: var(--ion-color-primary);
  transition: 0.5s;

  &:hover {
    background: white;
    color: var(--ion-color-primary);
    border: 1px solid var(--ion-color-primary);
  }
`;

export default CancelConfirmBtn