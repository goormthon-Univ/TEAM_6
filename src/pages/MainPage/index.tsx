import React, { useEffect } from "react";
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
import { customAxios } from "../../lib/customAxios";
import { YearPlan } from "../../types/YearPlan";

const MainPage = () => {
  const [isObjectExist, setIsObjectExist] = React.useState(true);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isYearly, setIsYearly] = React.useState(false);

  const [planList, setPlanList] = React.useState<ShortPlan[] | YearPlan[] | undefined>(undefined);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [currentPlan, setCurrentPlan] = React.useState<ShortPlan | YearPlan | undefined>(undefined);
  
  const getPlanList = async () => {
    await customAxios
      .get("/main")
      .then((res) => {
        console.log(window.location.hostname);
        setPlanList([...res.data.shortPlans, ...res.data.yearPlans]);
      })
      .catch((error) => {
        console.log(window.location.hostname);
        console.log("메인 목록 가져오기 실패");
        console.log(error);
      });
  };

  useEffect(() => {
    getPlanList();
  }, []);

  useEffect(() => {
    if ( planList &&  planList[currentPage || 0] ) {
      setCurrentPlan(planList[currentPage || 0]);
      setIsObjectExist(true);
    } else {
      setIsObjectExist(false);
    }
    console.log(currentPage, planList, currentPlan);
  }, [planList]);


  useEffect(() => {
    if ( planList &&  planList[currentPage || 0] ) {
      setCurrentPlan(planList[currentPage || 0]);
      setIsObjectExist(true);
    } else {
      setIsObjectExist(false);
    }
    console.log(currentPage, planList, currentPlan);
  }, [currentPage]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSegment value={currentPage} mode="md" onIonChange={(e) => {
          e.target.value = e.detail.value;
          if ( e.detail.value !== undefined ) {
            setCurrentPage(parseInt(e.detail.value.toString()));
          }
        }}>
          <IonSegmentButton value={0}>
            <ObjectLabel>목표 1</ObjectLabel>
          </IonSegmentButton>
          <IonSegmentButton value={1}>
            <ObjectLabel>목표 2</ObjectLabel>
          </IonSegmentButton>
          <IonSegmentButton value={2}>
            <ObjectLabel>목표 3</ObjectLabel>
          </IonSegmentButton>
        </IonSegment>

        {isObjectExist ? (
          <>
            <ObjectContainer>
              <YearObjectTitle object={currentPlan?.yearPlan || currentPlan?.shortPlan} />
              { currentPlan?.halfPlan && <HalfYearObjectTitle object={currentPlan?.halfPlan} /> }
            </ObjectContainer>

            <StatusBar title="구름 완성까지" total={13} current={currentPlan?.miniCloud || 0} />
            <CloudCount count={currentPlan?.miniCloud || 0} />

            <HumidityStatus total={7} current={currentPlan?.steam || 0} />

            { currentPlan?.monthPlan && <MonthObjectTitle object={currentPlan?.monthPlan} /> }

            <TodayTodo
              day={"금"}
              todo={currentPlan?.dailyPlan}
              isDone={true}
              isPass={false}
              steam={currentPlan?.steam}
              waterDrop={currentPlan?.waterDrop}
              miniCloud={currentPlan?.miniCloud}
              isYearly={isYearly}
              id={currentPlan?.year_plan_id || currentPlan?.short_plan_id}
            />
          </>
        ) : (
          <>
            <IonLabel style={{ display: `${ isEditing ? 'none' : 'flex' }`, justifyContent: 'center', marginTop: '50%' }}>목표가 없습니다. 새로운 목표를 설정해보세요.</IonLabel>
            <MakeObjectBtnContainer $isEditing={isEditing}>
              <MakeObjectBtn onClick={()=>{
                setIsEditing(true);
                setIsYearly(true);
              }}>1년 목표</MakeObjectBtn>
              <MakeObjectBtn onClick={()=>{
                setIsEditing(true);
                setIsYearly(false);
              }}>단기 목표</MakeObjectBtn>
            </MakeObjectBtnContainer>
            <ObjectInputContainer $isEditing={isEditing}>
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

const MakeObjectBtnContainer = styled.div<{ $isEditing: boolean }>`
  display: ${(props) => props.$isEditing ? 'none' : 'flex' };
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

const ObjectInputContainer = styled.div<{ $isEditing: boolean }>`
  display: ${(props) => props.$isEditing ? 'flex' : 'none' };
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`
export default MainPage;
