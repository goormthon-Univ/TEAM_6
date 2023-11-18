import React, { useEffect, useState } from "react";
import { IonButton, IonInput, IonModal } from "@ionic/react";
import { RefObject } from "react";
import styled from "styled-components";
import CautionRed from "../assets/collection/CautionRed";
import {
  DailyPlan,
  DailyPlanElement,
  DailyPlanRequest,
} from "../types/DailyPlan";
import { customAxios } from "../lib/customAxios";

interface ProfileEditModarProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  isEdit: boolean;
  handleSubmit: (prop: DailyPlanRequest) => void;
  handleIsEdit: () => void;
  dismiss: () => void;
  id: string;
  type: string;
}

const ProfileEditModar = ({
  modal,
  openId,
  isEdit,
  handleSubmit,
  handleIsEdit,
  dismiss,
  id,
  type,
}: ProfileEditModarProps) => {
  const [dailyPlan, setDailyPlan] = useState<DailyPlan>();
  const [mon, setMon] = useState<string>("불러오기 실패");
  const [tue, setTue] = useState<string>("불러오기 실패");
  const [wed, setWed] = useState<string>("불러오기 실패");
  const [thu, setThu] = useState<string>("불러오기 실패");
  const [fri, setFri] = useState<string>("불러오기 실패");
  const [sat, setSat] = useState<string>("불러오기 실패");
  const [sun, setSun] = useState<string>("불러오기 실패");

  const handleSubmitDailyPlanElement = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    handleSubmit({
      dailyPlans: [
        {
          day: 1,
          plan: mon,
        },
        {
          day: 2,
          plan: tue,
        },
        {
          day: 3,
          plan: wed,
        },
        {
          day: 4,
          plan: thu,
        },
        {
          day: 5,
          plan: fri,
        },
        {
          day: 6,
          plan: sat,
        },
        {
          day: 7,
          plan: sun,
        },
      ],
    });
  };

  useEffect(() => {
    getDailyPlanElement();
  }, []);

  useEffect(() => {
    setMon(dailyPlan?.dailyPlans[0]?.plan ? dailyPlan.dailyPlans[0].plan : "");
    setTue(dailyPlan?.dailyPlans[1]?.plan ? dailyPlan.dailyPlans[1].plan : "");
    setWed(dailyPlan?.dailyPlans[2]?.plan ? dailyPlan.dailyPlans[2].plan : "");
    setThu(dailyPlan?.dailyPlans[3]?.plan ? dailyPlan.dailyPlans[3].plan : "");
    setFri(dailyPlan?.dailyPlans[4]?.plan ? dailyPlan.dailyPlans[4].plan : "");
    setSat(dailyPlan?.dailyPlans[5]?.plan ? dailyPlan.dailyPlans[5].plan : "");
    setSun(dailyPlan?.dailyPlans[6]?.plan ? dailyPlan.dailyPlans[6].plan : "");
  }, [dailyPlan]);

  const getDailyPlanElement = async () => {
    if (type === "short") {
      await customAxios
        .get(`/DailyPlan/shortPlan/${id}`)
        .then((res) => {
          setDailyPlan(filterDailyPlan(res.data));
        })
        .catch((error) => {
          console.log("short 고정 주 목표 로드 실패");
          console.log(error);
        });
    } else if (type === "year") {
      await customAxios
        .get(`/DailyPlan/yearPlan/${id}`)
        .then((res) => {
          setDailyPlan(filterDailyPlan(res.data));
        })
        .catch((error) => {
          console.log("year 고정 주 목표 로드 실패");
          console.log(error);
        });
    } else {
      console.log("고정 주 목표 요청 type 불명확");
    }
  };

  const filterDailyPlan = (data: DailyPlan): DailyPlan => {
    return {
      dailyPlans: [
        {
          day: "MONDAY",
          plan: data?.dailyPlans[0]?.plan ? data.dailyPlans[0].plan : "",
        },
        {
          day: "TUESDAY",
          plan: data?.dailyPlans[1]?.plan ? data.dailyPlans[1].plan : "",
        },
        {
          day: "WEDNESDAY",
          plan: data?.dailyPlans[2]?.plan ? data.dailyPlans[2].plan : "",
        },
        {
          day: "THURSDAY",
          plan: data?.dailyPlans[3]?.plan ? data.dailyPlans[3].plan : "",
        },
        {
          day: "FRIDAY",
          plan: data?.dailyPlans[4]?.plan ? data.dailyPlans[4].plan : "",
        },
        {
          day: "SATURDAY",
          plan: data?.dailyPlans[5]?.plan ? data.dailyPlans[5].plan : "",
        },
        {
          day: "SUNDAY",
          plan: data?.dailyPlans[6]?.plan ? data.dailyPlans[6].plan : "",
        },
      ],
    };
  };

  return (
    <StyledIonModal ref={modal} trigger={openId}>
      {isEdit ? (
        <form onSubmit={(e) => handleSubmitDailyPlanElement(e)} action="">
          <EditDiv>
            <EditTitleBox>
              <EditTitleTextBox>일 별 목표</EditTitleTextBox>
            </EditTitleBox>
            <EditTitleBox>
              <EditSubTitleTextBox>월</EditSubTitleTextBox>
            </EditTitleBox>

            <EditContentTextBox
              type="text"
              value={mon}
              onChange={(e) => setMon(e.target.value)}
              placeholder="월요일의 목표를 적어주세요!"
            />
            <EditTitleBox>
              <EditSubTitleTextBox>화</EditSubTitleTextBox>
            </EditTitleBox>
            <EditContentTextBox
              type="text"
              value={tue}
              onChange={(e) => setTue(e.target.value)}
              placeholder="화요일의 목표를 적어주세요!"
            />
            <EditTitleBox>
              <EditSubTitleTextBox>수</EditSubTitleTextBox>
            </EditTitleBox>
            <EditContentTextBox
              type="text"
              value={wed}
              onChange={(e) => setWed(e.target.value)}
              placeholder="수요일의 목표를 적어주세요!"
            />
            <EditTitleBox>
              <EditSubTitleTextBox>목</EditSubTitleTextBox>
            </EditTitleBox>
            <EditContentTextBox
              type="text"
              value={thu}
              onChange={(e) => setThu(e.target.value)}
              placeholder="목요일의 목표를 적어주세요!"
            />
            <EditTitleBox>
              <EditSubTitleTextBox>금</EditSubTitleTextBox>
            </EditTitleBox>
            <EditContentTextBox
              type="text"
              value={fri}
              onChange={(e) => setFri(e.target.value)}
              placeholder="금요일의 목표를 적어주세요!"
            />
            <EditTitleBox>
              <EditSubTitleTextBox>토</EditSubTitleTextBox>
            </EditTitleBox>
            <EditContentTextBox
              type="text"
              value={sat}
              onChange={(e) => setSat(e.target.value)}
              placeholder="토요일의 목표를 적어주세요!"
            />
            <EditTitleBox>
              <EditSubTitleTextBox>일</EditSubTitleTextBox>
            </EditTitleBox>
            <EditContentTextBox
              type="text"
              value={sun}
              onChange={(e) => setSun(e.target.value)}
              placeholder="일요일의 목표를 적어주세요!"
            />
            <StyledBtnBox>
              <StyledIonButton01 type="submit" size="small">
                예
              </StyledIonButton01>
              <StyledIonButton02
                size="small"
                onClick={() => {
                  dismiss();
                }}
              >
                아니오
              </StyledIonButton02>
            </StyledBtnBox>
          </EditDiv>
        </form>
      ) : (
        <BaseDiv>
          <CautionRed />
          <StyledTextBox>고정 주 목표를 수정하시겠습니까?</StyledTextBox>
          <StyledAlertBtnBox>
            <StyledIonButton01
              size="small"
              onClick={() => {
                handleIsEdit();
              }}
            >
              예
            </StyledIonButton01>
            <StyledIonButton02
              size="small"
              onClick={() => {
                dismiss();
              }}
            >
              아니오
            </StyledIonButton02>
          </StyledAlertBtnBox>
        </BaseDiv>
      )}
    </StyledIonModal>
  );
};

export default ProfileEditModar;
const StyledIonModal = styled(IonModal)`
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --border-radius: 1.5rem;
`;

const BaseDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 16.3rem;

  border-radius: 16px;
`;

const StyledTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #fc8787;
  width: 15rem;
`;

const StyledBtnBox = styled.div`
  margin: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const StyledAlertBtnBox = styled.div`
  margin: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const StyledIonButton01 = styled(IonButton)`
  width: 4rem;
`;

const StyledIonButton02 = styled(IonButton)`
  width: 4rem;
`;

const EditDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.5rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 20rem;
  height: 20rem;

  overflow: auto;

  border-radius: 16px;
`;

const EditTitleBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;

  width: 90%;
  height: 3rem;
`;

const EditTitleTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 9.25rem;
  height: 1.5rem;

  background-color: #ffdeda;
  color: #5c5c5c;
  border-radius: 1rem;
`;
const EditSubTitleTextBox = styled.div`
  margin-top: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 3.875rem;
  height: 1.6rem;

  background-color: #ffffff;
  color: #9c9c9c;

  border: 1px solid #9c9c9c;
  border-radius: 1rem;
`;
const EditContentTextBox = styled.input`
  margin-top: 0.3rem;
  padding: 0.9rem 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 90%;

  font-size: 0.9rem;

  background-color: #f1f1f1;
  color: #9c9c9c;

  border: 0;
  border-radius: 1rem;
`;
