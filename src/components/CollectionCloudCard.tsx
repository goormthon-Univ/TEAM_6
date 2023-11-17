import React from "react";
import styled from "styled-components";
import Lock from "../assets/collection/Lock";
import CloudImageById from "../assets/collection/CloudImageById";

interface CollectionCloudCardProps {
  imgId: number;
  name: string;
}

const CollectionCloudCard = ({
  imgId = 0,
  name = "",
}: CollectionCloudCardProps) => {
  return (
    <BaseDiv>
      {imgId !== 0 ? (
        <CollectionImageBox>
          <CloudImageById imgId={String(imgId)} />
          <br />
          {name}
        </CollectionImageBox>
      ) : (
        <NoImageBox>
          <Lock />
        </NoImageBox>
      )}
    </BaseDiv>
  );
};

export default CollectionCloudCard;

const BaseDiv = styled.div`
  margin: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 6.5rem;
  height: 6.5rem;
`;

const NoImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border: 0;
  border-radius: 1.5rem;
  background-color: #f1f1f1;
`;

const CollectionImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: 0.7rem;

  border: 1px solid rgba(255, 184, 174, 0.2);
  border-radius: 1.5rem;
  box-shadow: 2px 2px 4px rgba(255, 184, 174, 0.2);
`;
