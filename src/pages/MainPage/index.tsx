import React from "react";
import {
  IonContent,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import styled from "styled-components";
import YearObjectTitle from "../../components/mainComponents/YearObjectTitle";
import HalfYearObjectTitle from "../../components/mainComponents/HalfYearObjectTitle";
import StatusBar from "../../components/mainComponents/StatusBar";
import CloudCount from "../../components/mainComponents/CloudCount";
import HumidityStatus from "../../components/mainComponents/HumidityStatus";
import MonthObjectTitle from "../../components/mainComponents/MonthObjectTitle";
import TodayTodo from "../../components/mainComponents/TodayTodo";
import ShortTermInput from "../../components/mainComponents/ShortTermInput";
import YearlyInput from "../../components/mainComponents/YearlyInput";
import CancelConfirmBtn from "../../components/mainComponents/CancelConfirmBtn";

const MainPage = () => {
  const [isObjectExist, setIsObjectExist] = React.useState(true);
  const [isEditing, setIsEditing] = React.useState(true);
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSegment value="object1" mode="md">
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

        {isObjectExist ? (
          <>
            <ObjectContainer>
              <YearObjectTitle object="10kg 다이어트" />
              <HalfYearObjectTitle object="5kg 다이어트" />
            </ObjectContainer>

            <StatusBar title="구름 완성까지" total={13} current={3} />
            <CloudCount count={1} />

            <HumidityStatus total={7} current={3} />

            <MonthObjectTitle object="1kg 다이어트" />

            <TodayTodo
              day={"목"}
              todo="줄넘기 100회"
              isDone={false}
              isPass={false}
            />
          </>
        ) : (
          <>
            <IonLabel style={{ display: `${ isEditing ? 'none' : 'flex' }`, justifyContent: 'center', marginTop: '50%' }}>목표가 없습니다. 새로운 목표를 설정해보세요.</IonLabel>
            <MakeObjectBtnContainer isEditing={isEditing}>
              <MakeObjectBtn onClick={()=>{
                setIsEditing(true);
                setIsYearly(true);
              }}>1년 목표</MakeObjectBtn>
              <MakeObjectBtn onClick={()=>{
                setIsEditing(true);
                setIsYearly(false);
              }}>단기 목표</MakeObjectBtn>
            </MakeObjectBtnContainer>
            <ObjectInputContainer isEditing={isEditing}>
              <YearlyInput isYearly={isYearly} />
              <ShortTermInput isYearly={isYearly} />
              <CancelConfirmBtn hasCancel={true} confirmMessage='완료' onCancel={() => {setIsEditing(false)}} />
            </ObjectInputContainer>
          </>
        ) 
      }
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
  border-bottom: 1px solid #d9d9d9;
  padding: 0.2rem 0rem;
`;

const MakeObjectBtnContainer = styled.div<{ isEditing: boolean }>`
  display: ${(props) => props.isEditing ? 'none' : 'flex' };
  margin-top: 1rem;
  gap: 1.5rem;
  justify-content: center;
`;

const MakeObjectBtn = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  transition: 0.5s;

  &:hover {
    background: var(--ion-color-primary);
    color: white;
  }
`

const ObjectInputContainer = styled.div<{ isEditing: boolean }>`
  display: ${(props) => props.isEditing ? 'flex' : 'none' };
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`
export default MainPage;
