import React from "react";
import { useEffect, useState } from "react";
import CloudCircleFrame from "../../components/CloudCircleFrame";
import styled from "styled-components";
import { Cloud01 } from "../../assets/cloudimages/Cloud01";
import { Chart } from "../../assets/profile/Chart";
import ProfileOngoingGoalBar from "../../components/ProfileOngoingGoalBar";
import ProfileCompletedGoalBar from "../../components/ProfileCompletedGoalBar";
import Checked from "../../assets/profile/Checked";
import { IonContent, IonPage } from "@ionic/react";
import { customAxios } from "../../lib/customAxios";
import { DoingPlan } from "../../types/DoingPlan";
import { DonePlan } from "../../types/DonePlan";

const ProfilePage = () => {
  const [doingPlan, setDoingPlan] = useState<DoingPlan>({
    yearPlans: [
      {
        yearPlanId: 24,
        yearPlan: "책 10권 읽기!!",
        miniCloud: 0,
        yearPlanSteam: 27,
        yearPlanDone: false,
      },
      {
        yearPlanId: 25,
        yearPlan: "물 많이 마시기",
        miniCloud: 0,
        yearPlanSteam: 32,
        yearPlanDone: false,
      },
    ],
    shortPlans: [
      {
        shortPlanId: 4,
        shortPlan: "다이어트 -5kg 빼기",
        period: 3,
        miniCloud: 0,
        steam: 6,
        done: false,
      },
    ],
  });
  const [donePlan, setDonePlan] = useState<DonePlan>({
    yearPlans: [
      {
        yearPlanId: 25,
        yearPlan: "물 많이 마시기",
        miniCloud: 0,
        yearPlanSteam: 0,
        yearPlanDone: true,
      },
    ],
    shortPlans: [
      {
        shortPlanId: 4,
        shortPlan: "다이어트 -5kg 빼기",
        period: 3,
        miniCloud: 0,
        steam: 4,
        done: true,
      },
    ],
  });
  // 진행중 목록 가져오기
  const getDoingPlans = async () => {
    await customAxios
      .get("/DoingPlan")
      .then((res) => {
        setDoingPlan(res.data);
        console.log("DoingPlans: ");
        console.log(res.data);
      })
      .catch((error) => {
        console.log("진행 목록 가져오기 실패");
        console.log(error);
      });
  };
  // 완료 목록 가져오기
  const getDonePlans = async () => {
    await customAxios
      .get("/DonePlan")
      .then((res) => {
        setDonePlan(res.data);
        console.log("DonePlans: ");
        console.log(res.data);
      })
      .catch((error) => {
        console.log("완료 목록 가져오기 실패");
        console.log(error);
      });
  };
  useEffect(() => {
    getDoingPlans();
    getDonePlans();
  }, []);

  return (
    <BaseDiv>
      <ContentBaseDiv>
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
          {doingPlan?.shortPlans ? (
            doingPlan.shortPlans.map((plan) => (
              <OngoingGoalBox key={plan.shortPlanId}>
                <ProfileOngoingGoalBar
                  id={String(plan.shortPlanId)}
                  goal={plan.shortPlan}
                  percentageValue={
                    String((100 * plan.steam) / (plan.period * 4)) + "%"
                  }
                  period={String(plan.period) + "개월"}
                  type="short"
                />
              </OngoingGoalBox>
            ))
          ) : (
            <></>
          )}
          {doingPlan?.yearPlans ? (
            doingPlan.yearPlans.map((plan) => (
              <OngoingGoalBox key={plan.yearPlanId}>
                <ProfileOngoingGoalBar
                  id={String(plan.yearPlanId)}
                  goal={plan.yearPlan}
                  percentageValue={
                    String((100 * plan.yearPlanSteam) / 52) + "%"
                  }
                  period="1년"
                  type="year"
                />
              </OngoingGoalBox>
            ))
          ) : (
            <></>
          )}
        </UserInfoMiddleDiv>
        <UserInfoBottomDiv>
          <CompletedGoalTitleBox>
            <Checked />
            <SpaceSpan />
            달성한 목표
          </CompletedGoalTitleBox>
          {donePlan?.shortPlans ? (
            donePlan.shortPlans.map((plan) => (
              <OngoingGoalBox key={plan.shortPlanId}>
                <ProfileCompletedGoalBar
                  goal={plan.shortPlan}
                  period={String(plan.period) + "개월"}
                />
              </OngoingGoalBox>
            ))
          ) : (
            <></>
          )}
          {donePlan?.yearPlans ? (
            donePlan.yearPlans.map((plan) => (
              <OngoingGoalBox key={plan.yearPlanId}>
                <ProfileCompletedGoalBar goal={plan.yearPlan} period="1년" />
              </OngoingGoalBox>
            ))
          ) : (
            <></>
          )}
        </UserInfoBottomDiv>
      </ContentBaseDiv>
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

const BaseDiv = styled(IonPage)`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

const ContentBaseDiv = styled(IonContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
