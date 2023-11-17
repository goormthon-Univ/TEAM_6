import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import React, { useState } from "react";
import styled from "styled-components";
import MainImage from "../../assets/login/MainImage";
import LockImage from "../../assets/login/LockImage";
import { customAxios } from "../../lib/customAxios";
import { Link, useHistory } from "react-router-dom";
import { useIonRouter } from "@ionic/react";

const SignupPage = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");
  const [isDifferent, setIsDifferent] = useState<boolean>(false);
  const [isOkNickname, setIsOkNickname] = useState<boolean>(true);
  const history = useHistory();
  const ionRouter = useIonRouter();

  const requestSignup = async () => {
    await customAxios
      .post("/auth/signup", {
        nickname: id,
        password: password,
      })
      .then((res) => {
        console.log("회원가입 성공");
        console.log(res.data);
        ionRouter.push("/login");
      })
      .catch((error) => {
        console.log("회원가입 실패");
        console.log(error);
      });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ionRouter.push("/login");
    if (password === repassword) {
      setIsDifferent(false);
    } else {
      setIsDifferent(true);
    }
    const checkNicknameres = await checkNickname();
    if (checkNicknameres && !isDifferent) {
      requestSignup();
    }
  };

  const checkNickname = async (): Promise<boolean> => {
    const res = await customAxios
      .get(`/auth/${id}/exists`)
      .then((res) => {
        console.log("닉네임 체크 성공");
        console.log(res.data);
        setIsOkNickname(res?.data?.exists ? false : true);
        return res?.data?.exists ? false : true;
      })
      .catch((error) => {
        console.log("닉네임 체크 실패");
        console.log(error);
        setIsOkNickname(false);
        return false;
      });
    return res;
  };

  return (
    <BaseDiv>
      <StyledHeader>
        <MainImage />
      </StyledHeader>

      <StyledContent>
        <form onSubmit={(e) => handleSubmit(e)} action="">
          <StyledIdInputBox $isOkNickname={isOkNickname}>
            <StyledInput
              type="text"
              value={id}
              onChange={(e) => setId(e?.target?.value ? e.target.value : "")}
              placeholder="닉네임을 입력해주세요"
            />
            <StyledLock isOpen={true} />
          </StyledIdInputBox>
          {isOkNickname ? (
            <></>
          ) : (
            <StyledAlertDiv>중복된 닉네임입니다.</StyledAlertDiv>
          )}
          <StyledPasswordInputBox $isDifferent={isDifferent}>
            <StyledInput
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e?.target?.value ? e.target.value : "")
              }
              placeholder="비밀번호를 입력해주세요"
            />
            <StyledLock isOpen={false} />
          </StyledPasswordInputBox>
          <StyledPasswordInputBox $isDifferent={isDifferent}>
            <StyledInput
              type="password"
              value={repassword}
              onChange={(e) =>
                setRepassword(e?.target?.value ? e.target.value : "")
              }
              placeholder="비밀번호를 다시 입력해주세요"
            />
            <StyledLock isOpen={false} />
          </StyledPasswordInputBox>
          {isDifferent ? (
            <StyledAlertDiv>비밀번호가 일치하기 않습니다.</StyledAlertDiv>
          ) : (
            <></>
          )}

          <IonBtnBox>
            <StyledIonButton type="submit">회원가입</StyledIonButton>
          </IonBtnBox>
        </form>

        <StyledLinkBox>
          <StyledLink href="/login">로그인</StyledLink>
        </StyledLinkBox>
      </StyledContent>
    </BaseDiv>
  );
};

export default SignupPage;

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

const StyledIdInputBox = styled.div<{ $isOkNickname: boolean }>`
  margin-top: 0.8rem;

  display: flex;
  /* justify-content: center; */
  align-items: center;

  height: 3.5rem;
  width: 18rem;

  border: 2px solid ${(props) => (props?.$isOkNickname ? "#f1f1f1" : "#FC8787")};
  border-radius: 1rem;
`;

const StyledPasswordInputBox = styled.div<{ $isDifferent: boolean }>`
  margin-top: 0.8rem;

  display: flex;
  /* justify-content: center; */
  align-items: center;

  height: 3.5rem;
  width: 18rem;

  border: 2px solid ${(props) => (props?.$isDifferent ? "#FC8787" : "#f1f1f1")};
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
