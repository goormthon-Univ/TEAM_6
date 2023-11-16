import React from 'react'
import styled from 'styled-components'

type Props = {
  isSelected: boolean;
  href: string;
  children?: React.ReactElement;
}

function BottomNavBarItem({isSelected, href, children}: Props) {
  return (
    <Container href={href} isSelected={isSelected} className={isSelected ? 'cloud' : ''}> 
      { children ? children : <></> }
    </Container>
  )
}

const Container = styled.a<{isSelected: boolean}>`
  display: flex;
  height: 75px;
  width: 100%;
  color: ${(props) => props.isSelected ? 'var(--ion-color-primary' : 'var(--ion-color-medium'};
  margin-top:70px;
  width:350px;
  height:120px;
  background:#ECEFF1;
  box-shadow: 10px 10px rgba(0,0,0,0.2);
  border-radius:100px;

  &.cloud::after{
    width:100px;
    height:100px;
    top:-220px;
    left:50px;
}
  &.cloud::before{
    width:180px;
    height:180px;
    top: -70px;
    left:130px;
  } 
`;

export default BottomNavBarItem