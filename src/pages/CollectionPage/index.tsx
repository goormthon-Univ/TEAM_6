import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
import CloudCircleFrame from "../../components/CloudCircleFrame";
import Cloud02 from "../../assets/cloudimages/Cloud02";
import { Cloud01 } from "../../assets/cloudimages/Cloud01";
import { IonButton, IonPage } from "@ionic/react";
import BookMark from "../../assets/collection/BookMark";
import CollectionModal from "../../components/CollectionModal";
import Caution from "../../assets/collection/Caution";
import CollectionCautionModal from "../../components/CollectionCautionModal";
import { customAxios } from "../../lib/customAxios";
import { CloudList } from "../../types/CloudList";
import storage from "../../utils/storage";
import { useIonRouter } from "@ionic/react";
import { UserData } from "../../types/UserData";

const CollectionPage = () => {
  const ionRouter = useIonRouter();
  const [userData, setUserData] = useState<UserData>(storage.get("userData"));
  useEffect(() => {
    if (userData.userId === -1 && window.location.pathname === "/collection") {
      console.log(window.location.pathname);
      ionRouter.push("/login");
    } else {
      console.log("로그인?", userData);
    }
  }, [window.location.pathname]);

  const [isLoadingMiniCloud, setIsLoadingMiniCloud] = useState<boolean>(true);
  const [isLoadingCloud, setIsLoadingCloud] = useState<boolean>(true);
  const [miniCloudList, setMiniCloudList] = useState<CloudList>({
    clouds: [],
  });
  const [cloudList, setCloudList] = useState<CloudList>({
    clouds: [],
  });
  const miniCloudModal = useRef<HTMLIonModalElement>(null);
  const CloudModal = useRef<HTMLIonModalElement>(null);

  const miniCloudCautionModal = useRef<HTMLIonModalElement>(null);
  const CloudCautionModal = useRef<HTMLIonModalElement>(null);

  const getCloudList = async () => {
    await customAxios
      .get("/collection?type=2")
      .then((res) => {
        console.log("미니구름 컬렉션");
        console.log(res.data);
        setMiniCloudList(res.data);
        setIsLoadingMiniCloud(false);
      })
      .catch((error) => {
        console.log("미니 구름 컬렉션 가져오기 실패");
        console.log(error);
        setIsLoadingMiniCloud(false);
      });
    await customAxios
      .get("/collection?type=3")
      .then((res) => {
        console.log("구름 컬렉션");
        console.log(res.data);
        setCloudList(res.data);
        setIsLoadingCloud(false);
      })
      .catch((error) => {
        console.log("구름 컬렉션 가져오기 실패");
        console.log(error);
        setIsLoadingCloud(false);
      });
  };

  useEffect(() => {
    setUserData(storage.get("userData"));
  }, [window.location.pathname]);

  useEffect(() => {
    setIsLoadingMiniCloud(true);
    setIsLoadingCloud(true);
    if (userData.userId !== -1) {
      getCloudList();
    }
  }, [userData.userId]);

  return (
    <BaseDiv>
      <CollectionTopDiv>
        <BookMark />
      </CollectionTopDiv>
      <CollectionBottomDiv>
        <CollectionBtnContainer>
          <CloudCircleFrame CloudImg={Cloud01} />
          <CollectionBtnBox>
            <CollectionButton id="miniCloud">미니 구름 컬렉션</CollectionButton>
            <SpaceSpan />
            <StyledCautionDiv id="miniCloudCaution">
              <Caution />
            </StyledCautionDiv>
          </CollectionBtnBox>
        </CollectionBtnContainer>
        <CollectionBtnContainer>
          <CloudCircleFrame CloudImg={Cloud02} />
          <CollectionBtnBox>
            <CollectionButton id="cloud">구름 컬렉션</CollectionButton>
            <SpaceSpan />
            <StyledCautionDiv id="cloudCaution">
              <Caution />
            </StyledCautionDiv>
          </CollectionBtnBox>
        </CollectionBtnContainer>
      </CollectionBottomDiv>
      <CollectionModal
        modal={CloudModal}
        openId="cloud"
        title="구름"
        GoalList={cloudList?.clouds}
        type="cloud"
        isLoading={isLoadingCloud}
      />
      <CollectionModal
        modal={miniCloudModal}
        openId="miniCloud"
        title="미니 구름"
        GoalList={miniCloudList?.clouds}
        type="miniCloud"
        isLoading={isLoadingMiniCloud}
      />
      <CollectionCautionModal
        modal={CloudCautionModal}
        openId="cloudCaution"
        type={true}
      />
      <CollectionCautionModal
        modal={miniCloudCautionModal}
        openId="miniCloudCaution"
        type={false}
      />
    </BaseDiv>
  );
};

export default CollectionPage;

const BaseDiv = styled(IonPage)`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

const CollectionTopDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 20%;
  width: 100%;

  border: 0;
  border-bottom: 2px solid #ffdeda;
  position: relative;
  &::after {
    content: "컬렉션";
    position: absolute;
    bottom: -0.8rem;
    font-size: 1.1rem;
    left: 50%;

    transform: translateX(-50%);
    background-color: white;
    padding: 0 10px;
  }
`;

const CollectionBottomDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 30rem;
  min-height: 80%;
  width: 100%;

  border: 0;
`;

const CollectionBtnContainer = styled.div`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CollectionBtnBox = styled.div`
  padding-left: 1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 13rem;
`;

const CollectionButton = styled(IonButton)`
  margin-top: 0.5rem;
  --padding-top: 0.8rem;
  --padding-bottom: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  --color: #595959;
  --color-activated: #ffffff;
  font-size: 0.8rem;

  --background: #f1f1f1;
  --background-activated: #ffb8ae;
  --background-focused: #ffb8ae;
  --box-shadow: none;

  width: 9rem;

  border: 0;
  --border-radius: 0.5rem;

  position: relative;
`;
const StyledCautionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;

  height: 100%;

  cursor: pointer;
`;

const SpaceSpan = styled.span`
  margin-left: 0.2rem;
`;
