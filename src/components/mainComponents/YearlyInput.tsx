import { IonLabel } from '@ionic/react';
import React from 'react'
import styled from 'styled-components';
import DailyInput from './DailyInput';
import MonthSelectButton from './MonthSelectButton';
import ObjectInputBox from './ObjectInputBox';
import ObjectInputTitle from './ObjectInputTitle';
import ObjectSubTitle from './ObjectSubTitle';
import MonthlyObjectInput from './MonthlyObjectInput';
import { YearPlanInput } from '../../types/YearPlan';

type Props = {
  isYearly: boolean;
}

function YearlyInput({isYearly}: Props) {

  const yearlyPlanInput = React.useRef<YearPlanInput | undefined>(undefined);

  const setYealryPlan = () => {
    
  }

    return ( isYearly &&
      <Container name='yearInput'>
        <ObjectInputTitle numbering={1} title="1년 목표" />
        <ObjectInputBox content="1년 동안 이루고 싶은 목표를 적어주세요!" value={yearlyPlanInput.current?.yearPlan}/>

        <ObjectInputTitle numbering={2} title="반년 목표" />
        <ObjectInputBox content="반년 동안 이루고 싶은 목표를 적어주세요!"/>
        
        <ObjectSubTitle>
            <IonLabel color='medium'>잘하셨어요! <br /> 이제 이 목표를 <b>6개로</b>나눠보아요!</IonLabel>
        </ObjectSubTitle>

        <ObjectInputTitle numbering={3} title="월 별 목표" />
        { [1, 2, 3, 4, 5, 6].map((e) => (
          <MonthlyObjectInput month={e} key={'month' + e} />
        ))}
  
        <Caution>* 반 년이 지난 후 나머지 목표는 반 년 이후에 쓸 거예요!</Caution>
        <ObjectInputTitle numbering={4} title="일 별 목표" />
        { ['월', '화', '수', '목', '금', '토', '일'].map((e) => (
          <DailyInput day={e} key={'day' + e} />
        ))}
      </Container>
    )
  }
  
  const Container = styled.form`
    margin: 0 auto;
  `;
  
  const Caution = styled.div`
    margin-top: 1rem;
    font-size: 12px;
    color: var(--ion-color-danger);
  `;
  

export default YearlyInput