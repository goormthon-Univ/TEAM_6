import { IonButton, IonInput, IonPage } from "@ionic/react";
import React, { useState } from "react";
import styled from "styled-components";
import MainImage from "../../assets/login/MainImage";
import LockImage from "../../assets/login/LockImage";
import { customAxios } from "../../lib/customAxios";
import { useHistory } from "react-router";
import storage from "../../utils/storage";
import { UserData } from "../../types/UserData";

const LoginPage = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();

  const requestLogin = async () => {
    await customAxios
      .post("/auth/login", {
        data: {
          nickname: id,
          password: password,
        },
      })
      .then((res) => {
        console.log("로그인 성공");
        console.log(res.data);
        resisterloginData(res.data);
        history.push("/main");
      })
      .catch((error) => {
        console.log("로그인 실패");
        console.log(error);
      });
  };

  const resisterloginData = (prop: UserData) => {
    storage.set("userData", prop);
    console.log("로컬 저장 완료");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    requestLogin();
  };
  return (
    <BaseDiv>
      <MainImage />
      <StyledContent>
        <form onSubmit={(e) => handleSubmit(e)} action="">
          <StyledInputBox>
            <StyledInput
              type="text"
              value={id}
              onChange={(e) => setId(e?.target?.value ? e.target.value : "")}
              placeholder="닉네임을 입력해주세요"
            />
            <StyledLock isOpen={true} />
          </StyledInputBox>
          <StyledInputBox>
            <StyledInput
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e?.target?.value ? e.target.value : "")
              }
              placeholder="비밀번호를 입력해주세요"
            />
            <StyledLock isOpen={false} />
          </StyledInputBox>
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

const StyledInputBox = styled.div`
  margin-top: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.5rem;
  width: 18rem;

  border: 2px solid #f1f1f1;
  border-radius: 1rem;
`;

const StyledInput = styled.input`
  width: 15rem;
  border: none;

  font-size: 0.8rem;

  &:focus {
    outline: none;
  }
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

const StyledLock = styled(LockImage)``;
