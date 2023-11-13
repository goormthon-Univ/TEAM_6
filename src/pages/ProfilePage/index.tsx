import React from "react";
import CloudCircleFrame from "../../components/CloudCircleFrame";
import styled from "styled-components";
import { Cloud01 } from "../../assets/cloudimages/Cloud01";
import { Chart } from "../../assets/profile/Chart";
import ProfileOngoingGoalBar from "../../components/ProfileOngoingGoalBar";
import ProfileCompletedGoalBar from "../../components/ProfileCompletedGoalBar";
import Checked from "../../assets/profile/Checked";

const ProfilePage = () => {
  return (
    <BaseDiv>
      <UserInfoTopDiv>
        <CloudCircleFrame CloudImg={Cloud01} />
        <StyledTextName>구르미</StyledTextName>
      </UserInfoTopDiv>
      <UserInfoMiddleDiv>
        <OngoingGoalTitleBox>
          <Chart />
          <SpaceSpan />
          진행중인 목표
        </OngoingGoalTitleBox>
        <OngoingGoalBox>
          <ProfileOngoingGoalBar
            id="1"
            goal="10kg 다이어트"
            percentageValue="40%"
            period="1년"
          />
        </OngoingGoalBox>
        <OngoingGoalBox>
          <ProfileOngoingGoalBar
            id="2"
            goal="디자인 완성"
            percentageValue="80%"
            period="1개월"
          />
        </OngoingGoalBox>
      </UserInfoMiddleDiv>
      <UserInfoBottomDiv>
        <CompletedGoalTitleBox>
          <Checked />
          <SpaceSpan />
          달성한 목표
        </CompletedGoalTitleBox>
        <CompletedGoalBox>
          <ProfileCompletedGoalBar goal="7kg 다이어트" period="1년" />
        </CompletedGoalBox>
      </UserInfoBottomDiv>
    </BaseDiv>
  );
};

export default ProfilePage;

const UserInfoTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  height: 13.5rem;
  width: 100%;

  justify-content: center;
  align-items: center;

  border: 0;
  border-bottom: 1px solid #9c9c9c;
`;

const BaseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

const StyledTextName = styled.div`
  margin-top: 0.5rem;

  text-align: center;
  background-color: white;

  color: #151515;
  font-size: 1.5rem;

  width: 8.5rem;

  border: 0;
  border-bottom: 1px solid #9c9c9c;

  &:focus {
    outline: none;
    border-bottom: 1px solid #9c9c9c;
  }
`;

const UserInfoMiddleDiv = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  border: 0;
  border-bottom: 1px solid #9c9c9c;
`;

const OngoingGoalTitleBox = styled.div`
  margin-top: 0.3rem;

  display: flex;
  align-items: center;

  text-align: left;
  font-size: 1rem;
  color: #5c5c5c;

  height: 2rem;
  width: 90%;
`;

const SpaceSpan = styled.span`
  margin-left: 0.2rem;
`;

const OngoingGoalBox = styled.div`
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 7.5rem;
  width: 80%;
`;

const UserInfoBottomDiv = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  border: 0;
  /* border-bottom: 1px solid #9c9c9c; */
`;

const CompletedGoalTitleBox = styled.div`
  margin-top: 0.3rem;

  display: flex;
  align-items: center;

  text-align: left;
  font-size: 1rem;
  color: #5c5c5c;

  height: 2rem;
  width: 90%;
`;

const CompletedGoalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 5.5rem;
  width: 80%;
`;
