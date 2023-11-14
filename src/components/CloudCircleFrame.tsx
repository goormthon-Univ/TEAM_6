import styled from "styled-components";
import { Cloud01 } from "../assets/cloudimages/Cloud01";
import Cloud02 from "../assets/cloudimages/Cloud02";

interface CloudCircleFrameProps {
  CloudImg: typeof Cloud01 | typeof Cloud02;
}

const CloudCircleFrame = ({ CloudImg }: CloudCircleFrameProps) => {
  return (
    <CircleFrame>
      <CloudImg />
    </CircleFrame>
  );
};

export default CloudCircleFrame;

const CircleFrame = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  box-shadow: 2px 2px 10px 0px #0000001a inset;

  display: flex;
  align-items: center;
  justify-content: center;
`;
