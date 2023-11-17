import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
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
  const [isLoginFailed, setIsLoginFailed] = useState<boolean>(false);
  const history = useHistory();

  const requestLogin = async () => {
    await customAxios
      .post("/auth/login", {
        nickname: id,
        password: password,
      })
      .then((res) => {
        console.log("로그인 성공");
        console.log(res.data);
        setIsLoginFailed(false);
        resisterloginData(res.data);
        history.push("/main");
      })
      .catch((error) => {
        console.log("로그인 실패");
        setIsLoginFailed(true);
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
      <StyledHeader>
        <MainImage />
      </StyledHeader>

      <StyledContent>
        <form onSubmit={(e) => handleSubmit(e)} action="">
          <StyledInputBox $isLoginFailed={isLoginFailed}>
            <StyledInput
              type="text"
              value={id}
              onChange={(e) => setId(e?.target?.value ? e.target.value : "")}
              placeholder="닉네임을 입력해주세요"
            />
            <StyledLock isOpen={true} />
          </StyledInputBox>
          <StyledInputBox $isLoginFailed={isLoginFailed}>
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
          {isLoginFailed ? (
            <StyledAlertDiv>잘못된 닉네임/비밀번호 입니다.</StyledAlertDiv>
          ) : (
            <></>
          )}
          <IonBtnBox>
            <StyledIonButton type="submit">로그인</StyledIonButton>
          </IonBtnBox>
        </form>
        <StyledLinkBox>
          <StyledLink href="/signup">회원가입</StyledLink>
        </StyledLinkBox>
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

  background-color: white;

  width: 100%;
  height: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 7rem;
`;

const StyledContent = styled.div`
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 25rem;
`;

const StyledInputBox = styled.div<{ $isLoginFailed: boolean }>`
  margin-top: 0.8rem;

  display: flex;
  /* justify-content: center; */
  align-items: center;

  height: 3.5rem;
  width: 18rem;

  border: 2px solid
    ${(props) => (props?.$isLoginFailed ? "#FC8787" : "#f1f1f1")};
  border-radius: 1rem;
`;

const StyledInput = styled.input`
  padding-left: 1rem;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  margin-right: 1rem;
  border-radius: 1rem;

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

const StyledAlertDiv = styled.div`
  width: 18rem;
  text-align: right;
  color: #fc8787;
  font-size: 0.7rem;
`;

const StyledLinkBox = styled.div`
  margin-top: 0.2rem;

  display: flex;
  justify-content: end;
  align-items: center;
  width: 18rem;
  text-align: right;
`;

const StyledLink = styled.a`
  text-decoration: none;

  text-align: right;
  color: #b4b4b4;
  font-size: 0.8rem;

  cursor: pointer;
`;
