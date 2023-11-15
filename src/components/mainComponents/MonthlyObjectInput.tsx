import React from 'react'
import styled from 'styled-components';

type Props = {
    month: number;
}

function MonthlyObjectInput({month}: Props) {
  return (
    <Container>
        <DayBox>
            { month }개월
        </DayBox>
        <DayInputBox placeholder={month + '개월 차의 목표를 적어주세요!'} />
    </Container>
  )
}

const Container = styled.div`
    
`;

const DayBox = styled.div`
    width: 62px;
    height: 34px;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--ion-color-medium);
    margin-top: 0.5rem;
`;

const DayInputBox = styled.textarea`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: var(--ion-color-secondary);
    margin-top: 0.5rem;
    font-size: 14px;
    border: none;
    color: var(--ion-color-medium);
    padding: 1rem 4rem;
    padding-bottom: 0rem;
    border-radius: 1rem;
    word-break: keep-all;
    text-align: center;
    margin-bottom: 1rem;
`;

export default MonthlyObjectInput