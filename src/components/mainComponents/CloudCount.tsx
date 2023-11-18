import { IonLabel } from '@ionic/react';
import styled from 'styled-components'
import Caution from '../../assets/collection/Caution';
import CloudExplainModal from './CloudExplainModal';

type Props = {
  count: number;
}

function CloudCount({ count }: Props) {
  return (
    <Container>
      <IonLabel style={{ textAlign: 'left', color: 'var(--ion-color-dark)', marginRight: '1rem' }} color='dark'>미니 구름 완성까지</IonLabel>
      {
        [0, 1, 2, 3].map((e)=>(
          <CloudCircle isDone={e < count } key={'cloud' + e} />
        ))
      }
      <StyledCautionDiv id="cloudExplainModal">
        <Caution />
      </StyledCautionDiv>

      <CloudExplainModal isEditing={false} isYearly={true} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin: 1rem auto;
`;

const CloudCircle = styled.div<{isDone: boolean}>`
  margin: 0.2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: ${(props) => props.isDone ? 'var(--ion-color-primary-tint)' : 'var(--ion-color-secondary)'};
`;

const StyledCautionDiv = styled.div`
  display: flex;
  margin-left: 1rem;
`;

export default CloudCount