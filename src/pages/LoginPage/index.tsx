import { IonButton, IonInput, IonPage } from "@ionic/react";
import React, { useState } from "react";
import styled from "styled-components";
import MainImage from "../../assets/login/MainImage";

const LoginPage = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const requestLogin = () => {};

  const handleSubmit = () => {};
  return (
    <BaseDiv>
      <MainImage />
      <StyledContent>
        <form onSubmit={handleSubmit} action="">
          <IonIdInputBox>
            <StyledIonInput
              aria-label="Primary input"
              color="primary"
              type="text"
              value={id}
              onIonInput={(e) => setId(e?.detail?.value ? e.detail.value : "")}
              placeholder="아이디를 입력해주세요"
            />
          </IonIdInputBox>
          <IonInputBox>
            <StyledIonInput
              aria-label="Primary input"
              color="primary"
              type="password"
              value={password}
              onIonInput={(e) =>
                setPassword(e?.detail?.value ? e.detail.value : "")
              }
              placeholder="비밀번호를 입력해주세요"
            />
          </IonInputBox>
          <IonBtnBox>
            <StyledIonButton type="submit">로그인</StyledIonButton>
          </IonBtnBox>
        </form>
      </StyledContent>
    </BaseDiv>
  );
};

export default LoginPage;

const BaseDiv = styled(IonPage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const StyledContent = styled.div`
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 25rem;
`;

const IonIdInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;

  position: relative;
`;

const IonInputBox = styled.div`
  margin-top: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20rem;

  position: relative;
`;

const StyledIonInput = styled(IonInput)`
  --padding-top: 1.2rem;
  --padding-bottom: 1.2rem;
  --padding-start: 1rem;
  --padding-end: 1rem;

  width: 20rem;
  border: 2px solid var(--5, #f1f1f1);
  border-radius: 1rem;

  font-size: 0.8rem;

  position: relative;
`;

const IonBtnBox = styled.div`
  margin-top: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledIonButton = styled(IonButton)`
  --padding-top: 1rem;
  --padding-bottom: 1rem;

  --border-radius: 1rem;

  --box-shadow: none;
  width: 9rem;
`;
