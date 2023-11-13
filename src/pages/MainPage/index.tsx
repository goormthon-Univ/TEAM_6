import React from "react";
import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import styled from 'styled-components';
import YearObjectTitle from '../../assets/mainComponents/YearObjectTitle';


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
        <div>
          <YearObjectTitle object="10kg 다이어트" />
        </div>
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

export default MainPage;
