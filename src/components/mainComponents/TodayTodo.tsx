import { IonCheckbox, IonIcon, IonLabel } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { checkmarkOutline } from 'ionicons/icons'
import { customAxios } from '../../lib/customAxios';

type Props = {
  day: string;
  todo?: string;
  isDone: boolean;
  isPass: boolean;
  steam?: number;
  waterDrop?: number;
  miniCloud?: number;
  isYearly: boolean;
  plan_id: number;
  getPlanList: () => Promise<void>;
}

function TodayTodo({day, todo, isDone, isPass, steam, waterDrop, miniCloud, isYearly, plan_id, getPlanList}: Props) {

  const [currDone, setCurrDone] = useState(isDone);
  const [currPass, setCurrPass] = useState(isPass);

  console.log(isYearly);

  const setDone = async (exception: boolean) => {
    let uri = '/main/DailyDone?';

    let request_body = isYearly ? {
      "year_plan_id": plan_id,
    } : {
      "short_plan_id": plan_id,
    }

    if ( waterDrop && waterDrop >= 6 ) { // 수증기가 완성되는 경우
      if ( steam && steam >= 3 ) { // 미니 구름이 완성되는 경우
        if ( miniCloud && miniCloud >= 12) { // 구름이 완성되는 경우
          console.log('구름 완성');
          uri += 'type=3&';
          request_body = Object.assign(request_body, {
            'image_num' : Math.floor(Math.random() * 8) + 1
          })
        } else {
          console.log('미니 구름 완성');
          uri += 'type=2&';
          request_body = Object.assign(request_body, {
            'image_num' : Math.floor(Math.random() * 4) + 1
          })
        }
      } else {
        console.log('수증기 생성');
        uri += 'type=1&';
      }
    } else {
      uri += 'type=0&';
    }

    if ( exception ) {
      uri += 'exception=1';
    } else {
      uri += 'exception=0';
    }

    await customAxios
      .post(uri, request_body)
      .then((res) => {
        console.log(res);
        console.log(window.location.hostname);
      })
      .then(() => {
        getPlanList();
      })
      .catch((error) => {
        console.log(window.location.hostname);
        console.log(uri, request_body);
        console.log("달성한 일 등록 실패");
        console.log(error);
      });
  }

  const setUndone = async (exception: boolean) => {

    const request_body = isYearly ? {
      year_plan_id : plan_id
    } : {
      short_plan_id : plan_id
    };

    await customAxios
      .put('/main/DailyDone?exception=' + ( exception ? 1 : 0), request_body)
      .then((res) => {
        console.log(res);
        //  console.log(window.location.hostname);
      })
      .then(() => {
        getPlanList();
      })
      .catch((error) => {
        console.log(window.location.hostname);
        console.log("달성한 일 취소 실패");
        console.log(error);
      });
  }

  return (
    <Container>
      <IonLabel color='dark'><IonIcon color='medium' icon={checkmarkOutline} /> 오늘 달성할 일</IonLabel>
      <TodoContainer>
        <TodoBox>
          <DayBox>{day}</DayBox>
          <TodoCheck checked={currDone} color='medium' 
          disabled={currPass || waterDrop===0 && steam===0 && (isDone===true||isPass===true)}
          onIonChange={(e) => {
            setCurrDone(e.detail.checked);
            if ( e.detail.checked === true ) {
              setDone(false)
            } else {
              setUndone(false)
            }
          }}>{todo}</TodoCheck>
        </TodoBox>
        <PassBox>
          <PassCheck checked={currPass} color='medium' 
          disabled={currDone || waterDrop===0 && steam===0 && (isDone===true||isPass===true)}
          onIonChange={(e) => {
            setCurrPass(e.detail.checked);
            if ( e.detail.checked === true ) {
              setDone(true)
            } else {
              setUndone(true)
            }
          }}>😔 오늘은 사정이 있어서 못했어요</PassCheck>
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
  width: 2.4rem;
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