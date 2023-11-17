import React from "react";
import { useEffect, useState } from "react";
import CloudCircleFrame from "../../components/CloudCircleFrame";
import styled from "styled-components";
import { Cloud01 } from "../../assets/cloudimages/Cloud01";
import { Chart } from "../../assets/profile/Chart";
import ProfileOngoingGoalBar from "../../components/ProfileOngoingGoalBar";
import ProfileCompletedGoalBar from "../../components/ProfileCompletedGoalBar";
import Checked from "../../assets/profile/Checked";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import { customAxios } from "../../lib/customAxios";
import { DoingPlan } from "../../types/DoingPlan";
import { DonePlan } from "../../types/DonePlan";
import storage from "../../utils/storage";
import { useIonRouter } from "@ionic/react";
import { Loading } from "../../assets/loading/Loading";

const ProfilePage = () => {
  const ionRouter = useIonRouter();
  const userData = storage.get("userData");
  useEffect(() => {
    if (userData.userId === -1 && window.location.pathname === "/profile") {
      console.log(window.location.pathname);
      ionRouter.push("/login");
    } else {
      console.log("로그인?", userData);
    }
  }, [window.location.pathname]);

  const [isLoadingOngoingGoalList, setIsLoadingOngoingGoalList] =
    useState<boolean>(true);
  const [isLoadingCompleteGoalList, setIsLoadingCompleteGoalList] =
    useState<boolean>(true);

  const [doingPlan, setDoingPlan] = useState<DoingPlan>({
    yearPlans: [],
    shortPlans: [],
  });
  const [donePlan, setDonePlan] = useState<DonePlan>({
    yearPlans: [],
    shortPlans: [],
  });
  // 진행중 목록 가져오기
  const getDoingPlans = async () => {
    await customAxios
      .get("/DoingPlan")
      .then((res) => {
        console.log(window.location.hostname);
        console.log("DoingPlans: ");
        console.log(res.data);
        setDoingPlan(res.data);
        setIsLoadingOngoingGoalList(false);
      })
      .catch((error) => {
        console.log(window.location.hostname);
        console.log("진행 목록 가져오기 실패");
        console.log(error);
        setIsLoadingOngoingGoalList(false);
      });
  };
  // 완료 목록 가져오기
  const getDonePlans = async () => {
    await customAxios
      .get("/DonePlan")
      .then((res) => {
        console.log(window.location.hostname);
        console.log("DonePlans: ");
        console.log(res.data);
        setDonePlan(res.data);
        setIsLoadingCompleteGoalList(false);
      })
      .catch((error) => {
        console.log(window.location.hostname);
        console.log("완료 목록 가져오기 실패");
        console.log(error);
        setIsLoadingCompleteGoalList(false);
      });
  };

  const handleLogout = () => {
    storage.remove("userData");
    ionRouter.push("/login");
  };

  useEffect(() => {
    if (userData.userId !== -1) {
      getDoingPlans();
      getDonePlans();
    }
  }, []);

  return (
    <BaseDiv>
      <ContentBaseDiv>
        <UserInfoTopDiv>
          <CloudCircleFrame CloudImg={Cloud01} />
          <StyledTextName>구르미</StyledTextName>
          <LogoutButton size="small" onClick={() => handleLogout()}>
            로그아웃
          </LogoutButton>
        </UserInfoTopDiv>
        <UserInfoMiddleDiv>
          <OngoingGoalTitleBox>
            <Chart />
            <SpaceSpan />
            진행중인 목표
          </OngoingGoalTitleBox>
          {doingPlan?.shortPlans ? (
            doingPlan.shortPlans.map((plan, index) => (
              <OngoingGoalBox key={plan.shortPlanId}>
                <ProfileOngoingGoalBar
                  id={String(plan.shortPlanId)}
                  goal={plan.shortPlan}
                  percentageValue={
                    String((100 * plan.steam) / (plan.period * 4)) + "%"
                  }
                  period={String(plan.period) + "개월"}
                  type="short"
                  tempId={String(index + 1)}
                />
              </OngoingGoalBox>
            ))
          ) : (
            <></>
          )}
          {doingPlan?.yearPlans ? (
            doingPlan.yearPlans.map((plan, index) => (
              <OngoingGoalBox key={plan.yearPlanId}>
                <ProfileOngoingGoalBar
                  id={String(plan.yearPlanId)}
                  goal={plan.yearPlan}
                  percentageValue={
                    String((100 * plan.yearPlanSteam) / 52) + "%"
                  }
                  period="1년"
                  type="year"
                  tempId={String(
                    index +
                      1 +
                      (doingPlan?.yearPlans?.length
                        ? doingPlan.yearPlans.length
                        : 0)
                  )}
                />
              </OngoingGoalBox>
            ))
          ) : (
            <></>
          )}
          {doingPlan?.yearPlans.length + doingPlan?.shortPlans.length === 0 ? (
            <EmptyGoalBox>
              {isLoadingOngoingGoalList ? (
                <Loading />
              ) : (
                "아직 진행 중인 목표가 없습니다"
              )}
            </EmptyGoalBox>
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

          {donePlan?.yearPlans.length + donePlan?.shortPlans.length === 0 ? (
            <EmptyGoalBox>
              {isLoadingCompleteGoalList ? (
                <Loading />
              ) : (
                "아직 달성한 목표가 없습니다"
              )}
            </EmptyGoalBox>
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
  font-size: 1.35rem;

  width: 8.5rem;

  border: 0;
  /* border-bottom: 1px solid #9c9c9c; */
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

const EmptyGoalBox = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-size: 0.9rem;

  width: 90%;
`;

const LogoutButton = styled(IonButton)`
  display: flex;
  align-items: center;

  text-align: center;
  font-size: 0.7rem;

  --color: #5c5c5c;
  --color-activated: #ffffff;
  --background: #f1f1f1;
  --background-activated: #ffb8ae;
  --background-focused: #ffb8ae;
  --box-shadow: none;
  --border-radius: 1rem;
  height: 0.7rem;

  border: 0;
  border-radius: 8px;
`;
