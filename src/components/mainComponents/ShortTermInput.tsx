import React from 'react'
import { styled } from 'styled-components';
import ObjectInputTitle from './ObjectInputTitle';
import ObjectInputBox from './ObjectInputBox';
import ObjectSubTitle from './ObjectSubTitle';
import { IonLabel } from '@ionic/react';
import MonthSelectButton from './MonthSelectButton';
import DailyInput from './DailyInput';
import CancelConfirmBtn from './CancelConfirmBtn';

type Props = {
  isYearly: boolean;
}

function ShortTermInput({isYearly}: Props) {
  return ( !isYearly &&
    <Container>
      <ObjectInputTitle numbering={1} title="단기 목표" />
      <ObjectSubTitle>
        <IonLabel color='primary'>몇 달 동안 목표를 이루고 싶나요?</IonLabel>
      </ObjectSubTitle>
      <MonthSelectContainer>
          {[1,2,3,4,5,6].map((e) => (
              <MonthSelectButton month={e}/>
          ))}
      </MonthSelectContainer>

      <ObjectInputTitle numbering={2} title="단기 목표" />
      <ObjectInputBox content="해당 기간 동안 이루고 싶은 목표를 적어주세요!"/>
      
      <ObjectSubTitle>
        <>
          <IonLabel color='medium'>다 왔어요!<br/>이번 주는 10월의 4주차예요!<br/>이번 주의 할 일을 적어봐요!</IonLabel>
          <Caution>
          꼭 매일을 다 적을 필요는 없어요!<br/>
          월, 화만 적어도 되고 월,수,금만 적어도 돼요!<br/>
          본인의 역량에 맞추어 계획을 세워봐요!<br/>
          </Caution>
        </>
      </ObjectSubTitle>

      <ObjectInputTitle numbering={3} title="일별 목표" />
      { ['월', '화', '수', '목', '금', '토', '일'].map((e) => (
        <DailyInput day={e} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
`;

const MonthSelectContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const Caution = styled.div`
  margin-top: 2.5rem;
  font-size: 12px;
  color: var(--ion-color-danger);
`;

export default ShortTermInput