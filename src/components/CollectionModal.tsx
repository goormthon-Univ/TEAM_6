import React from "react";
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonModal,
} from "@ionic/react";
import { RefObject, useEffect, useState } from "react";
import styled from "styled-components";
import DownArrow from "../assets/collection/DownArrow";
import CollectionCloudCard from "./CollectionCloudCard";

interface CollectionModalProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  title: string;
  GoalList: Goal[];
}
interface Goal {
  imgId: string;
  name: string;
}

const CollectionModal = ({
  modal,
  openId,
  title,
  GoalList,
}: CollectionModalProps) => {
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    getMoreCloud();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getMoreCloud = () => {
    const newItems: string[] = [];
    for (let i = 0; i < 30; i++) {
      newItems.push(`Cloud ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };
  return (
    <StyledIonModal
      ref={modal}
      trigger={openId}
      initialBreakpoint={1}
      breakpoints={[0, 1]}
    >
      <ModalContentContainer>
        <ModalTitleBox>
          <DownArrow />
          <SpaceSpan />
          <SpaceSpan />
          {title} 컬렉션
        </ModalTitleBox>
        <IonContent>
          <IonList>
            <ModalContentBox>
              {GoalList ? (
                GoalList.map(({ imgId, name }, index) => (
                  <CollectionCloudCard imgId={imgId} name={name} key={index} />
                ))
              ) : (
                <></>
              )}
              {items ? (
                items.map((name, index) => (
                  <CollectionCloudCard imgId="" name={name} key={index} />
                ))
              ) : (
                <></>
              )}
            </ModalContentBox>
          </IonList>
          <IonInfiniteScroll
            onIonInfinite={(ev) => {
              getMoreCloud();
              setTimeout(() => ev.target.complete(), 2000);
            }}
          >
            <IonInfiniteScrollContent></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonContent>
      </ModalContentContainer>
    </StyledIonModal>
  );
};

export default CollectionModal;

const StyledIonModal = styled(IonModal)`
  --height: 80%;
  --border-radius: 1rem;
`;

const ModalContentContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

const ModalTitleBox = styled.div`
  margin-bottom: 1rem;

  display: flex;
  align-items: center;

  text-align: left;

  height: 2rem;
  width: 90%;
`;

const SpaceSpan = styled.span`
  margin-left: 0.2rem;
`;
const ModalContentBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
