import { IonModal } from '@ionic/react'
import React from 'react'
import styled from 'styled-components'

type Props = {
    isEditing: boolean;
}

function CloudExplainModal({isEditing}: Props) {
  return (
    <ModalContainer trigger='cloudExplainModal' >
        { isEditing && (
           <CheerMessage>목표 설정이 끝났어요!<br/>1년 동안의 목표를 달성할 수 있게<br/>당신을 응원할게요!</CheerMessage>
        ) }
        <CloudExplain>
        </CloudExplain>
        { isEditing && (
           <CheerMessageTwo>목표 설정이 끝났어요!<br/>1년 동안의 목표를 달성할 수 있게<br/>당신을 응원할게요!</CheerMessageTwo>
        ) }
    </ModalContainer>
  )
}

const ModalContainer = styled(IonModal)`
    --width: fit-content;
    --min-width: 20rem;
    --background: none;
    --height: 30rem;
    --border-radius: 1rem;
    --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
`;

const CheerMessage = styled.div`
    background: var(--ion-color-primary);
    border-radius: 1rem;
    color: white;
    font-weight: 700;
`;

const CloudExplain = styled.div``;

const CheerMessageTwo = styled.div``;

export default CloudExplainModal