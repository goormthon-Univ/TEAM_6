import { IonButton, IonInput, IonModal } from "@ionic/react";
import { RefObject } from "react";
import styled from "styled-components";
import CautionRed from "../assets/collection/CautionRed";

interface ProfileEditModarProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  isEdit: boolean;
  handleSubmit: () => void;
  handleIsEdit: () => void;
  dismiss: () => void;
}

const ProfileEditModar = ({
  modal,
  openId,
  isEdit,
  handleSubmit,
  handleIsEdit,
  dismiss,
}: ProfileEditModarProps) => {
  // const [dailyPlanElement, setDailyPlanElement] = useState<DailyPlanElement>({
  //   Mon: "~~~가 목표임",
  //   Tue: "~~~가 목표임",
  //   Wed: "~~~가 목표임",
  //   Thu: "~~~가 목표임",
  //   Fri: "~~~가 목표임",
  //   Sat: "~~~가 목표임",
  //   Sun: "~~~가 목표임",
  // });
  // const getDailyPlanElement = async () => {};
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      {isEdit ? (
        <EditDiv>
          <EditTitleBox>
            <EditTitleTextBox>일 별 목표</EditTitleTextBox>
          </EditTitleBox>
          <EditTitleBox>
            <EditSubTitleTextBox>월</EditSubTitleTextBox>
          </EditTitleBox>
          <EditContentTextBox placeholder="월요일의 목표를 적어주세요!" />
          <EditTitleBox>
            <EditSubTitleTextBox>화</EditSubTitleTextBox>
          </EditTitleBox>
          <EditContentTextBox placeholder="화요일의 목표를 적어주세요!" />
          <EditTitleBox>
            <EditSubTitleTextBox>수</EditSubTitleTextBox>
          </EditTitleBox>
          <EditContentTextBox placeholder="수요일의 목표를 적어주세요!" />
          <EditTitleBox>
            <EditSubTitleTextBox>목</EditSubTitleTextBox>
          </EditTitleBox>
          <EditContentTextBox placeholder="목요일의 목표를 적어주세요!" />
          <EditTitleBox>
            <EditSubTitleTextBox>금</EditSubTitleTextBox>
          </EditTitleBox>
          <EditContentTextBox placeholder="금요일의 목표를 적어주세요!" />
          <EditTitleBox>
            <EditSubTitleTextBox>토</EditSubTitleTextBox>
          </EditTitleBox>
          <EditContentTextBox placeholder="토요일의 목표를 적어주세요!" />
          <EditTitleBox>
            <EditSubTitleTextBox>일</EditSubTitleTextBox>
          </EditTitleBox>
          <EditContentTextBox placeholder="일요일의 목표를 적어주세요!" />
          <StyledBtnBox>
            <StyledIonButton01
              size="small"
              onClick={() => {
                handleSubmit();
                dismiss();
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
          </StyledBtnBox>
        </EditDiv>
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 3.875rem;
  height: 2.125rem;

  background-color: #ffffff;
  color: #9c9c9c;

  border: 1px solid #9c9c9c;
  border-radius: 1rem;
`;
const EditContentTextBox = styled(IonInput)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 90%;
  height: 3rem;

  background-color: #f1f1f1;
  color: #9c9c9c;

  border: 0;
  border-radius: 1rem;
`;
