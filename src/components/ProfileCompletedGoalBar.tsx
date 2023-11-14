import React from "react";
import styled from "styled-components";

interface ProfileCompletedGoalBarProps {
  goal: string;
  period: string;
}

const ProfileCompletedGoalBar = ({
  goal,
  period,
}: ProfileCompletedGoalBarProps) => {
  return (
    <BaseDiv>
      <GoalTitle>
        <GoalSmallBox>{goal}</GoalSmallBox>
        <DescriptionBox>{period}</DescriptionBox>
      </GoalTitle>
      <ParameterGauge />
      <GoalParameterBox>
        <ParameterSpan>0%</ParameterSpan>
        <ParameterSpan>100%</ParameterSpan>
      </GoalParameterBox>
    </BaseDiv>
  );
};

export default ProfileCompletedGoalBar;

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

const ParameterGauge = styled.div`
  background-color: #ffdeda;
  background: linear-gradient(to right, #fdf6e8, #ffe4ae);

  height: 2rem;
  width: 100%;

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
