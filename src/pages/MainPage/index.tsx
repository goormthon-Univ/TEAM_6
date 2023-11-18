import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import styled from "styled-components";
import YearObjectTitle from "../../components/mainComponents/YearObjectTitle";
import HalfYearObjectTitle from "../../components/mainComponents/HalfYearObjectTitle";
import StatusBar from "../../components/mainComponents/StatusBar";
import CloudCount from "../../components/mainComponents/CloudCount";
import HumidityStatus from "../../components/mainComponents/HumidityStatus";
import MonthObjectTitle from "../../components/mainComponents/MonthObjectTitle";
import TodayTodo from "../../components/mainComponents/TodayTodo";
import ShortTermInput from "../../components/mainComponents/ShortTermInput";
import YearlyInput from "../../components/mainComponents/YearlyInput";
import CancelConfirmBtn from "../../components/mainComponents/CancelConfirmBtn";
import { customAxios } from "../../lib/customAxios";
import { YearPlan } from "../../types/YearPlan";
import { ShortPlan } from "../../types/ShortPlan";
import dayjs from "dayjs";
import storage from "../../utils/storage";
import { useIonRouter } from "@ionic/react";
import { toDayString } from "../../utils/dayString";
import CloudExplainModal from "../../components/mainComponents/CloudExplainModal";
import { UserData } from "../../types/UserData";

const MainPage = () => {
  const ionRouter = useIonRouter();
  const [userData, setUserData] = useState<UserData>(storage.get("userData"));
  useEffect(() => {
    if (userData.userId === -1 && window.location.pathname === "/main") {
      ionRouter.push("/login");
    }
  }, [window.location.pathname]);

  const [isLoadingPlanList, setIsLoadingPlanList] = useState<boolean>(true);

  const [isObjectExist, setIsObjectExist] = React.useState(true);
  const [isEditing, setIsEditing] = React.useState(false);
  const [isYearly, setIsYearly] = React.useState(false);

  const [planList, setPlanList] = React.useState<
    ShortPlan[] | YearPlan[] | undefined
  >(undefined);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [currentPlan, setCurrentPlan] = React.useState<
    ShortPlan | YearPlan | undefined
  >(undefined);

  const modal = React.useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
    getPlanList();
    setIsEditing(false);
  }

  const getPlanList = async () => {
    await customAxios
      .get("/main")
      .then((res) => {
        console.log(window.location.hostname);
        setPlanList([...res.data.shortPlans, ...res.data.yearPlans]);
        setIsLoadingPlanList(false);
      })
      .catch((error) => {
        console.log(window.location.hostname);
        console.log("메인 목록 가져오기 실패");
        console.log(error);
        setIsLoadingPlanList(false);
      });
  };

  useEffect(() => {
    setUserData(storage.get("userData"));
  }, [window.location.pathname]);

  useEffect(() => {
    setIsLoadingPlanList(true);
    if (userData.userId !== -1) {
      getPlanList();
    }
  }, [userData.userId, userData.ischanged]);

  useEffect(() => {
    if (planList && planList[currentPage || 0]) {
      setCurrentPlan(planList[currentPage || 0]);
      setIsObjectExist(true);
    } else {
      setIsObjectExist(false);
    }
    console.log(currentPage, planList, currentPlan);
  }, [planList]);

  useEffect(() => {
    if (planList && planList[currentPage || 0]) {
      setCurrentPlan(planList[currentPage || 0]);
      setIsObjectExist(true);
    } else {
      setIsObjectExist(false);
    }
    console.log(currentPage, planList, currentPlan);
  }, [currentPage]);

  const addPlan = async (data: unknown) => {
    console.log(data);
    if (isYearly) {
      await customAxios
        .post("/YearPlans", data)
        .then((res) => {
          console.log(window.location.hostname);
          modal.current?.present();
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
        })
        .catch((error) => {
          console.log(window.location.hostname);
          console.log("1년 목표 등록 실패");
          modal.current?.present();
          console.log(error);
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
        });
    } else {
      await customAxios
        .post("/ShortPlans", data)
        .then((res) => {
          console.log(window.location.hostname);
          modal.current?.present();
          const user = storage.get("userData");
          storage.set("userData", {
            userId: user.userId,
            nickname: user.nickname,
            ischanged: !user.ischanged,
          });
        })
        .catch((error) => {
          console.log(window.location.hostname);
          modal.current?.present();
          console.log("단기 목표 등록 실패");
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

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSegment
          value={currentPage}
          mode="md"
          onIonChange={(e) => {
            e.target.value = e.detail.value;
            if (e.detail.value !== undefined) {
              setCurrentPage(parseInt(e.detail.value.toString()));
            }
          }}
        >
          <IonSegmentButton value={0}>
            <ObjectLabel>목표 1</ObjectLabel>
          </IonSegmentButton>
          <IonSegmentButton value={1}>
            <ObjectLabel>목표 2</ObjectLabel>
          </IonSegmentButton>
          <IonSegmentButton value={2}>
            <ObjectLabel>목표 3</ObjectLabel>
          </IonSegmentButton>
        </IonSegment>

        {isObjectExist ? (
          <>
            {isLoadingPlanList ? (
              <></>
            ) : (
              <>
                <ObjectContainer>
                  <YearObjectTitle
                    object_title={
                      currentPlan?.yearPlan || currentPlan?.shortPlan || ""
                    }
                  />
                  {currentPlan?.halfPlan && (
                    <HalfYearObjectTitle object={currentPlan?.halfPlan} />
                  )}
                </ObjectContainer>

                <StatusBar
                  title={
                    currentPlan?.yearPlan !== undefined
                      ? "구름 완성까지"
                      : "목표 달성까지"
                  }
                  total={13}
                  current={currentPlan?.miniCloud || 0}
                />
                <CloudCount count={currentPlan?.steam || 0} />

                <HumidityStatus
                  total={7}
                  current={currentPlan?.waterDrop || 0}
                />

                {currentPlan?.monthPlan && (
                  <MonthObjectTitle object={currentPlan?.monthPlan} />
                )}

                <TodayTodo
                  getPlanList={getPlanList}
                  day={toDayString(((dayjs().day() + 6) % 7) + 1)}
                  todo={currentPlan?.dailyPlan}
                  isDone={currentPlan?.done || false}
                  isPass={currentPlan?.exception || false}
                  steam={currentPlan?.steam}
                  waterDrop={currentPlan?.waterDrop}
                  miniCloud={currentPlan?.miniCloud}
                  isYearly={currentPlan?.yearPlan !== undefined}
                  plan_id={
                    currentPlan?.year_plan_id || currentPlan?.short_plan_id || 1
                  }
                />
              </>
            )}
          </>
        ) : (
          <Container>
            <IonLabel
              style={{
                display: `${isEditing ? "none" : "flex"}`,
                justifyContent: "center",
                marginTop: "40vh",
              }}
            >
              목표가 없습니다. 새로운 목표를 설정해보세요.
            </IonLabel>
            <MakeObjectBtnContainer $isEditing={isEditing}>
              <MakeObjectBtn
                onClick={() => {
                  setIsEditing(true);
                  setIsYearly(true);
                }}
              >
                1년 목표
              </MakeObjectBtn>
              <MakeObjectBtn
                onClick={() => {
                  setIsEditing(true);
                  setIsYearly(false);
                }}
              >
                단기 목표
              </MakeObjectBtn>
            </MakeObjectBtnContainer>
            <ObjectInputContainer $isEditing={isEditing}>
              <YearlyInput isYearly={isYearly} />
              <ShortTermInput isYearly={isYearly} />
              <CancelConfirmBtn
                hasCancel={true}
                confirmMessage="완료"
                onCancel={() => {
                  setIsEditing(false);
                }}
                onConfirm={() => {
                  let data;
                  let form;
                  if (isYearly) {
                    // 1년 목표
                    form = document.forms[0].getElementsByTagName("textarea");
                    const monthlyPlan = [];
                    for (let i = 2; i < 8; i++) {
                      monthlyPlan.push({
                        year: dayjs()
                          .add(i - 1, "month")
                          .year(),
                        month: dayjs()
                          .add(i - 1, "month")
                          .month(),
                        monthlyPlan: form[i].value,
                      });
                    }
                    const dailyPlan = [];
                    for (let i = 8; i < form.length; i++) {
                      dailyPlan.push({
                        day: i - 7,
                        plan: form[i].value,
                      });
                    }
                    data = {
                      userId: storage.get("userData").userId,
                      year: dayjs().year(),
                      yearPlan: form[0].value,
                      halfPlan: form[1].value,
                      monthlyPlan: monthlyPlan,
                      dailyPlan: dailyPlan,
                    };
                  } else {
                    // 단기 목표
                    form = document.forms[0].getElementsByTagName("textarea");
                    const dailyPlan = [];
                    let period;
                    for (let i = 0; i < 6; i++) {
                      if (
                        document.forms[0].getElementsByTagName("input")[i]
                          .checked === true
                      ) {
                        period = i + 1;
                      }
                    }
                    for (let i = 1; i < 8; i++) {
                      dailyPlan.push({
                        day: i,
                        plan: form[i].value,
                      });
                    }
                    data = {
                      userId: storage.get("userData").userId,
                      year: dayjs().year(),
                      period: period,
                      shortPlan: form[0].value,
                      dailyPlan: dailyPlan,
                    };
                  }

                  addPlan(data);
                }}
              />
            </ObjectInputContainer>
            <CloudExplainModal
              isEditing={true}
              modal={modal}
              dismiss={dismiss}
            />
          </Container>
        )}
      </IonContent>
    </IonPage>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ObjectLabel = styled(IonLabel)`
  .segment-button-checked &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--ion-color-primary);
    border-radius: 50%;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1.2rem;
  }
  color: var(--ion-color-dark);
  padding-top: 1rem;

  .segment-button-checked {
    color: var(--ion-color-dark);
  }
`;

const ObjectContainer = styled.div`
  border-bottom: 1px solid #d9d9d9;
  padding: 0.2rem 0rem;
`;

const MakeObjectBtnContainer = styled.div<{ $isEditing: boolean }>`
  display: ${(props) => (props.$isEditing ? "none" : "flex")};
  margin-top: 1rem;
  gap: 1.5rem;
  justify-content: center;
`;

const MakeObjectBtn = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  transition: 0.5s;

  &:hover {
    background: var(--ion-color-primary);
    color: white;
  }
`;

const ObjectInputContainer = styled.div<{ $isEditing: boolean }>`
  display: ${(props) => (props.$isEditing ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;
export default MainPage;
