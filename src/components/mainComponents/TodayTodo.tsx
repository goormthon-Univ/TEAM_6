import { IonCheckbox, IonIcon, IonLabel } from '@ionic/react';
import React from 'react'
import styled from 'styled-components'
import { checkmarkOutline } from 'ionicons/icons'

type Props = {
  day: string;
  todo?: string;
  isDone: boolean;
  isPass: boolean;
}

function TodayTodo({day, todo, isDone, isPass}: Props) {
  return (
    <Container>
      <IonLabel color='dark'><IonIcon color='medium' icon={checkmarkOutline} /> 오늘 달성할 일</IonLabel>
      <TodoContainer>
        <TodoBox>
          <DayBox>{day}</DayBox>
          <TodoCheck color='medium'>{todo}</TodoCheck>
        </TodoBox>
        <PassBox>
          <PassCheck color='medium'>😔 오늘은 사정이 있어서 못했어요</PassCheck>
        </PassBox>
      </TodoContainer>
    </Container>
  )
}


const Container = styled.div`
  width: 80%;
  margin: 0px auto;
  margin-top: 1rem;
`;

const TodoContainer = styled.div`
  background: var(--ion-color-secondary);
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 4px;
`;

const DayBox = styled.div`
  background: var(--ion-color-secondary-shade);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

const TodoBox = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`;

const PassBox = styled.div`
  background: var(--ion-color-secondary-shade);
  border-radius: 1rem;
  height: 2rem;
  display: flex;
  font-size: 12px;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
`;

const TodoCheck = styled(IonCheckbox)`
  --size: 2rem;
  width: 100%;
  --checkbox-background-checked: var(--ion-color-primary);
  --border-width: 0;
  --checkmark-color: white;
  --border-radius: 0.2rem;
`;

const PassCheck = styled(IonCheckbox)`
  width: 95%;
  --size: 1.2rem;
  --checkbox-background-checked: var(--ion-color-primary);
  --checkmark-color: white;
  --border-radius: 0.2rem;
  --border-width: 0;
`;


export default TodayTodo