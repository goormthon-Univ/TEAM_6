import React from "react";
import { IonModal } from "@ionic/react";
import { RefObject } from "react";
import styled from "styled-components";
import CautionRed from "../../assets/collection/CautionRed";
import Sad from "../../assets/submodal/Sad.png";

interface MainUndoCautionModalProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
}

const MainUndoCautionModal = ({ modal, openId }: MainUndoCautionModalProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      <BaseDiv>
        <CautionRed />
        <StyledButtonDiv>
          <img src={Sad} alt="Login" />
          오늘은 사정이 있어서 못했어요
        </StyledButtonDiv>
        <StyledTextBox>
          오늘은 사정이 있어서 못했어요
          <br />
          목표를 이루지 못했을때 이부분을 체크하면
          <br />이 날의 일정을 쓰지 않은 것으로 대체해줘요!
        </StyledTextBox>
        <StyledCautionTextBox>
          대신 정말 사정이 있어서 못했을때 누르기!
          <br />
          당신의 양심을 믿어요!
        </StyledCautionTextBox>
      </BaseDiv>
    </StyledIonModal>
  );
};

export default MainUndoCautionModal;

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
  width: 16rem;

  width: 16.3rem;

  background-color: #fff;
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

  height: 2rem;
  width: 15.5rem;

  border: 0;
  border-radius: 0.5rem;
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
  width: 13rem;
`;
