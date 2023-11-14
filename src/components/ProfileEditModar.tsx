import { IonModal } from "@ionic/react";
import React, { RefObject } from "react";
import styled from "styled-components";
interface ProfileEditModarProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  editGoalId: string;
}

const ProfileEditModar = ({
  modal,
  openId,
  editGoalId,
}: ProfileEditModarProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      <BaseDiv>수정 대상 Goal Id : {editGoalId}</BaseDiv>
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
  --border-radius: 1rem;
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
