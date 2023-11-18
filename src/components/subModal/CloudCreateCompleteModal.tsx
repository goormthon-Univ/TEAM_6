import React from "react";
import { IonModal } from "@ionic/react";
import { RefObject } from "react";
import styled from "styled-components";
import CloudImageById from "../../assets/collection/CloudImageById";

interface CloudCreateCompleteModalProps {
  modal?: RefObject<HTMLIonModalElement>;
  openId: string;
  cloudImgId: number;
}

const CloudCreateCompleteModal = ({
  modal,
  openId,
  cloudImgId,
}: CloudCreateCompleteModalProps) => {
  return (
    <StyledIonModal ref={modal} trigger={openId}>
      <BaseDiv>
        <StyledTextBox>
          {cloudImgId > 4 ? "구름" : "미니 구름"}이 만들어졌어요!
        </StyledTextBox>
        <StyledDiv>
          <StyledCloudImageById imgId={String(cloudImgId)} />
        </StyledDiv>
      </BaseDiv>
    </StyledIonModal>
  );
};

export default CloudCreateCompleteModal;

const StyledIonModal = styled(IonModal)`
  --width: fit-content;
  --height: fit-content;
  --border-radius: 6px;
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

  width: 15rem;
  height: 10rem;

  background-color: #fff;
`;

const StyledTextBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  width: 14rem;
`;
const StyledDiv = styled.div`
  margin-top: 1rem;
`;

const StyledCloudImageById = styled(CloudImageById)`
  /* padding-top: 2rem; */
  /* padding: 1rem; */
`;
