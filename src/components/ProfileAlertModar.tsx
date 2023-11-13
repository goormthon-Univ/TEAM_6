import { IonModal } from "@ionic/react";
import React, { RefObject } from "react";
import styled from "styled-components";
import CautionRed from "../assets/collection/CautionRed";

interface ProfileAlertModarProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  content: string;
}

const ProfileAlertModar = ({
  modal,
  openId,
  content,
}: ProfileAlertModarProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      <BaseDiv>
        <CautionRed />
        <StyledTextBox>{content}</StyledTextBox>
      </BaseDiv>
    </StyledIonModal>
  );
};

export default ProfileAlertModar;
const StyledIonModal = styled(IonModal)`
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --border-radius: 6px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --border-radius: 3rem;
`;

const BaseDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  width: 16.3rem;
  height: 11.8rem;

  border-radius: 16px;
`;

const StyledTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #fc8787;
  width: 10rem;
`;
