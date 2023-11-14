import { IonButton, IonModal } from "@ionic/react";
import { RefObject } from "react";
import styled from "styled-components";
import CautionRed from "../assets/collection/CautionRed";

interface ProfileDeleteModarProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  handle: () => void;
  dismiss: () => void;
}

const ProfileDeleteModar = ({
  modal,
  openId,
  handle,
  dismiss,
}: ProfileDeleteModarProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      <BaseDiv>
        <CautionRed />
        <StyledTextBox>정말 목표를 삭제하시겠습니까?</StyledTextBox>
        <StyledBtnBox>
          <StyledIonButton01
            size="small"
            onClick={() => {
              handle();
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
      </BaseDiv>
    </StyledIonModal>
  );
};

export default ProfileDeleteModar;
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
  width: 80%;
`;

const StyledIonButton01 = styled(IonButton)`
  width: 4rem;
`;

const StyledIonButton02 = styled(IonButton)`
  width: 4rem;
`;
