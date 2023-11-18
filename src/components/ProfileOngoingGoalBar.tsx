import React from "react";
import { IonButton } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProfileEditModar from "./ProfileEditModar";
import ProfileDeleteModar from "./ProfileDeleteModar";
import { customAxios } from "../lib/customAxios";
import { DailyPlanRequest } from "../types/DailyPlan";
import { useIonRouter } from "@ionic/react";
import storage from "../utils/storage";
interface ProfileOngoingGoalBarProps {
  id: string;
  goal: string;
  percentageValue: string;
  period: string;
  type: string;
  tempId: string;
}

const ProfileOngoingGoalBar = ({
  id,
  goal,
  percentageValue,
  period,
  type,
  tempId,
}: ProfileOngoingGoalBarProps) => {
  const ionRouter = useIonRouter();
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

  const setRequestDailyPlanElement = async (prop: DailyPlanRequest) => {
    if (type === "short") {
      await customAxios
        .put(`/DailyPlan/shortPlan/${id}`, prop)
        .then((res) => {
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
          dismissEditGoalModar();
        })
        .catch((error) => {
          console.log("short 고정 주 목표 설정 실패");
          console.log(error);
        });
    } else if (type === "year") {
      await customAxios
        .put(`/DailyPlan/yearPlan/${id}`, prop)
        .then((res) => {
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
          dismissEditGoalModar();
        })
        .catch((error) => {
          console.log("year 고정 주 목표 설정 실패");
          console.log(error);
        });
    } else {
      console.log("고정 주 목표 설정 type 불명확");
    }
  };

  const handleSubmitWeekGoal = async (prop: DailyPlanRequest) => {
    await setRequestDailyPlanElement(prop);
  };

  const handleDeleteGoal = async () => {
    if (type === "short") {
      await customAxios
        .delete("/DoingPlan", { data: { shortPlanId: id } })
        .then((res) => {
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
          ionRouter.push("/main");
        })
        .catch((error) => {
          console.log("단기 목표 삭제 실패");
          console.log(error);
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
        });
    } else if (type === "year") {
      await customAxios
        .delete("/DoingPlan", { data: { yearPlanId: id } })
        .then((res) => {
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
          ionRouter.push("/main");
        })
        .catch((error) => {
          console.log("장기 목표 삭제 실패");
          console.log(error);
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
        });
    }
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
          <DescriptionBox>목표{tempId}</DescriptionBox>
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
          id={`editGoal${id}${type}`}
          size="small"
          onClick={() => setIsEdit(false)}
        >
          고정 주 목표 수정
        </GoalCancleButton>
        <SpaceSpan />
        <SpaceSpan />
        <GoalDeleteButton id={`deleteGoal${id}${type}`} size="small">
          목표 삭제
        </GoalDeleteButton>
      </GoalBtnContainer>

      <ProfileEditModar
        modal={editGoalModal}
        openId={`editGoal${id}${type}`}
        isEdit={isEdit}
        handleSubmit={handleSubmitWeekGoal}
        handleIsEdit={handleIsEdit}
        dismiss={dismissEditGoalModar}
        id={id}
        type={type}
      />
      <ProfileDeleteModar
        modal={deleteGoalModal}
        openId={`deleteGoal${id}${type}`}
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

  font-size: 0.95rem;
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
  --box-shadow: none;

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
  --box-shadow: none;

  height: 1.2rem;

  border: 0;
  border-radius: 8px;
`;
