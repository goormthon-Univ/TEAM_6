import React, { useRef } from "react";
import styled from "styled-components";
import CloudCircleFrame from "../../components/CloudCircleFrame";
import Cloud02 from "../../assets/cloudimages/Cloud02";
import { Cloud01 } from "../../assets/cloudimages/Cloud01";
import { IonButton } from "@ionic/react";
import BookMark from "../../assets/collection/BookMark";
import CollectionModal from "../../components/CollectionModal";
import Caution from "../../assets/collection/Caution";
import CollectionCautionModal from "../../components/CollectionCautionModal";

const CollectionPage = () => {
  const miniCloudModal = useRef<HTMLIonModalElement>(null);
  const CloudModal = useRef<HTMLIonModalElement>(null);

  const miniCloudCautionModal = useRef<HTMLIonModalElement>(null);
  const CloudCautionModal = useRef<HTMLIonModalElement>(null);

  return (
    <BaseDiv>
      <CollectionTopDiv>
        <BookMark />
      </CollectionTopDiv>
      <CollectionBottomDiv>
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
      </CollectionBottomDiv>
      <CollectionModal
        modal={CloudModal}
        openId="cloud"
        title="구름"
        GoalList={[
          { imgId: "5", name: "구름 No.1" },
          { imgId: "6", name: "구름 No.2" },
          { imgId: "7", name: "구름 No.3" },
          { imgId: "8", name: "구름 No.4" },
        ]}
      />
      <CollectionModal
        modal={miniCloudModal}
        openId="miniCloud"
        title="미니 구름"
        GoalList={[
          { imgId: "1", name: "미니 구름 No.1" },
          { imgId: "2", name: "미니 구름 No.2" },
          { imgId: "3", name: "미니 구름 No.3" },
          { imgId: "4", name: "미니 구름 No.4" },
        ]}
      />
      <CollectionCautionModal
        modal={CloudCautionModal}
        openId="cloudCaution"
        title="구름 컬렉션"
        content="구름 컬렉션은 1년 목표를 
        달성하면 받는 완성 구름이에요!"
      />
      <CollectionCautionModal
        modal={miniCloudCautionModal}
        openId="miniCloudCaution"
        title="미니 구름 컬렉션"
        content="미니 구름은 한 달 동안 지속해서 수증기 4개를
        모으면 받는 구름을 말해요!"
      />

      <></>
    </BaseDiv>
  );
};

export default CollectionPage;

const BaseDiv = styled.div`
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
    content: "컬렉션"; /* 추가할 텍스트 */
    position: absolute; /* 부모 요소에 상대적으로 위치 */
    bottom: -0.8rem; /* border-bottom 아래에 위치하도록 조정 */
    font-size: 1.1rem;
    left: 50%; /* 왼쪽에서 50%의 위치 */

    transform: translateX(-50%); /* 정 중앙에 오도록 조정 */
    background-color: white; /* 배경색 지정 */
    padding: 0 10px; /* 텍스트 양 옆의 여백 */
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

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* --ion-color-primary: #f1f1f1; */
  /* --ion-color-primary-shade: #ffb8ae; */
  --color: #595959;
  /* --color-focused: #ffffff; */
  --color-activated: #ffffff;
  /* --color-hover: #ffffff; */
  /* background-color: #f1f1f1; */
  font-size: 0.8rem;
  /* color: #595959; */

  --background: #f1f1f1;
  --background-activated: #ffb8ae;
  --background-focused: #ffb8ae;

  height: 1rem;
  width: 9rem;

  border: 0;
  border-radius: 10px;

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
