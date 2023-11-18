import React from "react";
import { IonModal } from "@ionic/react";
import { RefObject } from "react";
import styled from "styled-components";
import CautionRed from "../../assets/collection/CautionRed";

interface MainGoalCompleteModalProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
}

const MainGoalCompleteModal = ({
  modal,
  openId,
}: MainGoalCompleteModalProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      <BaseDiv>
        <StyledTextBox>
          목표를 100%
          <br />
          달성했어요! 축하해요!!
          <br />
          앞으로도 더 빛날 당신을 응원해요!
        </StyledTextBox>
      </BaseDiv>
    </StyledIonModal>
  );
};

export default MainGoalCompleteModal;

const StyledIonModal = styled(IonModal)`
  --width: fit-content;
  --min-width: 250px;
  --height: fit-content;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --border-radius: 1rem;
`;

const BaseDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 10rem;
  width: 16rem;

  background: linear-gradient(to top, #ffe4ae, #ffb8ae);
`;

const StyledButtonDiv = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #595959;
  font-size: 0.8rem;

  background-color: #d9d9d9;

  height: 10rem;
  width: 15.5rem;

  border: 0;
  border-radius: 0.5rem;
`;

const StyledTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1rem;
  width: 14rem;
`;

const StyledCautionTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: #fc8787;
  width: 13rem;
`;
