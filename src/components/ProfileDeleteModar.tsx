import { IonButton, IonModal } from "@ionic/react";
import React, { RefObject, useEffect, useState } from "react";
import styled from "styled-components";
import CautionRed from "../assets/collection/CautionRed";

interface ProfileDeleteModarProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  handle: () => void;
}

const ProfileDeleteModar = ({
  modal,
  openId,
  handle,
}: ProfileDeleteModarProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      <BaseDiv>
        <CautionRed />
        <StyledTextBox>정말 목표를 삭제하시겠습니까?</StyledTextBox>
        <IonButton
          onClick={() => {
            handle();
          }}
        >
          예
        </IonButton>
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
  --border-radius: 3rem;
`;

const BaseDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 16.3rem;
  height: 11.8rem;

  border-radius: 16px;
`;

const StyledTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #fc8787;
  width: 15rem;
`;

const EditDiv = styled.div`
  width: 16.3rem;
  height: 20rem;
`;
