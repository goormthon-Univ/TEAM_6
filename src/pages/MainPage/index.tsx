import React from "react";
import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import styled from 'styled-components';
import YearObjectTitle from '../../components/mainComponents/YearObjectTitle';
import HalfYearObjectTitle from "../../components/mainComponents/HalfYearObjectTitle";
import StatusBar from "../../components/mainComponents/StatusBar";
import CloudCount from "../../components/mainComponents/CloudCount";
import HumidityStatus from "../../components/mainComponents/HumidityStatus";
import MonthObjectTitle from "../../components/mainComponents/MonthObjectTitle";
import TodayTodo from "../../components/mainComponents/TodayTodo";


const MainPage = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <IonSegment value="object1" mode='md'>
            <IonSegmentButton value="object1">
              <ObjectLabel>목표 1</ObjectLabel>
            </IonSegmentButton>
            <IonSegmentButton value="object2">
              <ObjectLabel>목표 2</ObjectLabel>
            </IonSegmentButton>
            <IonSegmentButton value="object3">
              <ObjectLabel>목표 3</ObjectLabel>
            </IonSegmentButton>
          </IonSegment>

        <ObjectContainer>
          <YearObjectTitle object="10kg 다이어트" />
          <HalfYearObjectTitle object="5kg 다이어트"/>
        </ObjectContainer>

        <StatusBar title='구름 완성까지' total={13} current={3} />
        <CloudCount count={1} />

        <HumidityStatus total={7} current={3}/>

        <MonthObjectTitle object='1kg 다이어트' />

        <TodayTodo day={"목"} todo="줄넘기 100회" isDone={false} isPass={false} />
      </IonContent>
    </IonPage>
  );
};

const ObjectLabel = styled(IonLabel)`
  .segment-button-checked &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--ion-color-primary);
    border-radius: 50%;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1.2rem;
  }
  color: var(--ion-color-dark);
  padding-top: 1rem;

  .segment-button-checked {
    color: var(--ion-color-dark);
  }
`;


const ObjectContainer = styled.div`
  border-bottom: 1px solid #D9D9D9;
  padding: 0.2rem 0rem;
`


export default MainPage;
