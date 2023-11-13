import { IonModal } from "@ionic/react";
import React, { RefObject } from "react";
import styled from "styled-components";
import CautionRed from "../assets/collection/CautionRed";

interface CollectionCautionModalProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  type: boolean;
}

const CollectionCautionModal = ({
  modal,
  openId,
  type,
}: CollectionCautionModalProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      {type ? (
        <BaseDiv>
          <CautionRed />
          <CollectionButtonDiv>구름 컬렉션</CollectionButtonDiv>
          <StyledTextBox>
            구름 컬렉션은 1년 목표를
            <br />
            달성하면 받는 완성 구름이에요!
          </StyledTextBox>
          <StyledCautionTextBox>
            단기목표에서는 받을 수 없어요!
          </StyledCautionTextBox>
        </BaseDiv>
      ) : (
        <BaseDiv>
          <CautionRed />
          <CollectionButtonDiv>미니 구름 컬렉션</CollectionButtonDiv>
          <StyledTextBox>
            미니 구름은 한 달 동안 지속해서
            <br /> 수증기 4개를 모으면 받는 구름을 말해요!
          </StyledTextBox>
        </BaseDiv>
      )}
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
  --border-radius: 2rem;
`;

const BaseDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  width: 16.3rem;

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
  border-radius: 0.5rem;

  position: relative;
`;

const StyledTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  width: 14rem;
`;

const StyledCautionTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #fc8787;
  width: 10rem;
`;
