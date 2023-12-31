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
import { Cloud } from "../types/CloudList";
import { Loading } from "../assets/loading/Loading";

interface CollectionModalProps {
  modal: RefObject<HTMLIonModalElement>;
  openId: string;
  title: string;
  GoalList: Cloud[];
  type: string;
  isLoading: boolean;
}

const CollectionModal = ({
  modal,
  openId,
  title,
  GoalList,
  type,
  isLoading,
}: CollectionModalProps) => {
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    getMoreCloud();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getMoreCloud = () => {
    const newItems: string[] = [];
    for (
      let i = 0;
      i < 60 - (((items.length % 60) + GoalList.length) % 60);
      i++
    ) {
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
            {isLoading ? (
              <ModalContentBox>
                <Loading />
              </ModalContentBox>
            ) : (
              <ModalContentBox>
                {GoalList ? (
                  GoalList.map(({ image_num, cloud_id }, index) => (
                    <CollectionCloudCard
                      imgId={image_num}
                      name={
                        type === "cloud"
                          ? "구름 No." + cloud_id
                          : "미니 구름 No." + cloud_id
                      }
                      key={index}
                    />
                  ))
                ) : (
                  <></>
                )}
                {items ? (
                  items.map((name, index) => (
                    <CollectionCloudCard imgId={0} name={name} key={index} />
                  ))
                ) : (
                  <></>
                )}
              </ModalContentBox>
            )}
          </IonList>
          {isLoading ? (
            <></>
          ) : (
            <IonInfiniteScroll
              onIonInfinite={(ev) => {
                getMoreCloud();
                setTimeout(() => ev.target.complete(), 2000);
              }}
            >
              <IonInfiniteScrollContent></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          )}
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
