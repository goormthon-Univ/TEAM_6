import { IonModal } from "@ionic/react";
import React, { RefObject } from "react";
import styled from "styled-components";
import CautionRed from "../assets/collection/CautionRed";

interface CollectionCautionModalProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  title: string;
  content: string;
}

const CollectionCautionModal = ({
  modal,
  openId,
  title,
  content,
}: CollectionCautionModalProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      <BaseDiv>
        <CautionRed />
        <CollectionButtonDiv>{title}</CollectionButtonDiv>
        <StyledTextBox>{content}</StyledTextBox>
      </BaseDiv>
    </StyledIonModal>
  );
};

export default CollectionCautionModal;

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
  background-color: #fff;
`;

const CollectionButtonDiv = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #595959;
  font-size: 1rem;

  background-color: #f1f1f1;

  height: 2.5rem;
  width: 9rem;

  border: 0;

  position: relative;
`;

const StyledTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  width: 10rem;
`;
