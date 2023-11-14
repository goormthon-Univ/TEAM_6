import { IonButton } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProfileEditModar from "./ProfileEditModar";
import ProfileDeleteModar from "./ProfileDeleteModar";

interface ProfileOngoingGoalBarProps {
  id: string;
  goal: string;
  percentageValue: string;
  period: string;
}

const ProfileOngoingGoalBar = ({
  id,
  goal,
  percentageValue,
  period,
}: ProfileOngoingGoalBarProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const editGoalModal = useRef<HTMLIonModalElement>(null);
  const deleteGoalModal = useRef<HTMLIonModalElement>(null);
  useEffect(() => {
    const setPercentageValue = ref.current;
    if (setPercentageValue) {
      setPercentageValue.style.width = percentageValue;
    }
  }, []);

  const handleSubmitWeekGoal = () => {
    console.log("수정 완료");
  };

  const handleDeleteGoal = () => {
    console.log("삭제 완료");
  };

  const handleIsEdit = () => {
    setIsEdit(true);
  };
  const dismissEditGoalModar = () => {
    editGoalModal.current?.dismiss();
  };
  const dismissDeleteGoalModal = () => {
    deleteGoalModal.current?.dismiss();
  };

  return (
    <BaseDiv>
      <GoalTitle>
        <GoalSmallBox>
          <DescriptionBox>목표{id}</DescriptionBox>
          <SpaceSpan />
          {goal}
        </GoalSmallBox>
        <DescriptionBox>{period}</DescriptionBox>
      </GoalTitle>
      <ParameterBar>
        <ParameterGauge ref={ref} />
      </ParameterBar>
      <GoalParameterBox>
        <ParameterSpan>0%</ParameterSpan>
        <ParameterSpan>100%</ParameterSpan>
      </GoalParameterBox>
      <GoalBtnContainer>
        <GoalCancleButton
          id={`editGoal${id}`}
          size="small"
          onClick={() => setIsEdit(false)}
        >
          고정 주 목표 해지
        </GoalCancleButton>
        <SpaceSpan />
        <SpaceSpan />
        <GoalDeleteButton id={`deleteGoal${id}`} size="small">
          목표 삭제
        </GoalDeleteButton>
      </GoalBtnContainer>

      <ProfileEditModar
        modal={editGoalModal}
        openId={`editGoal${id}`}
        isEdit={isEdit}
        handleSubmit={handleSubmitWeekGoal}
        handleIsEdit={handleIsEdit}
        dismiss={dismissEditGoalModar}
      />
      <ProfileDeleteModar
        modal={deleteGoalModal}
        openId={`deleteGoal${id}`}
        handle={handleDeleteGoal}
        dismiss={dismissDeleteGoalModal}
      />
    </BaseDiv>
  );
};

export default ProfileOngoingGoalBar;

const BaseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GoalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2rem;
  width: 100%;
`;

const GoalSmallBox = styled.div`
  display: flex;
  align-items: center;

  text-align: left;

  font-size: 1rem;
  color: #5c5c5c;
`;

const SpaceSpan = styled.span`
  margin-left: 0.2rem;
`;

const DescriptionBox = styled.div`
  padding-left: 0.2rem;
  padding-right: 0.2rem;

  display: flex;
  align-items: center;

  text-align: center;
  background-color: #f1f1f1;
  font-size: 0.8rem;
  color: #5c5c5c;

  height: 1.2rem;

  border: 0;
  border-radius: 8px;
`;

const ParameterBar = styled.div`
  background-color: #f1f1f1;

  height: 2rem;
  width: 100%;

  border: 0;
  border-radius: 8px;
`;
const ParameterGauge = styled.div`
  background-color: #ffdeda;
  background: linear-gradient(to right, #ffb8ae1a, #ffb8ae);

  height: 2rem;

  border: 0;
  border-radius: 8px;
`;

const GoalParameterBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  height: 1rem;
  width: 100%;
`;

const ParameterSpan = styled.span`
  font-size: 0.5rem;
  color: #9c9c9c;
`;

const GoalBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  height: 1.4rem;
  width: 100%;
`;

const GoalCancleButton = styled(IonButton)`
  display: flex;
  align-items: center;

  text-align: center;
  font-size: 0.7rem;

  --color: #5c5c5c;
  --color-activated: #ffffff;
  --background: #f1f1f1;
  --background-activated: #ffb8ae;
  --background-focused: #ffb8ae;

  height: 0.7rem;

  border: 0;
  border-radius: 8px;
`;
const GoalDeleteButton = styled(IonButton)`
  display: flex;
  align-items: center;

  text-align: center;
  font-size: 0.7rem;

  --color: #ffffff;
  --color-activated: #ffffff;
  --background: #9c9c9cf1;
  --background-activated: #5c5c5c;
  --background-focused: #5c5c5c;

  height: 1.2rem;

  border: 0;
  border-radius: 8px;
`;
