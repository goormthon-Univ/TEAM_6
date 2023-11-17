import React from 'react'
import { styled } from 'styled-components';

type Props = {
    content: string;
    value?: string;
}

function ObjectInputBox({content, value}: Props) {

  const [currValue, setCurrValue] = React.useState(value);

  return (
    <Container placeholder={content} value={currValue || ''} onChange={(e) => {
      setCurrValue(e.target.value);
    }}/>
  )
}

const Container = styled.textarea`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: var(--ion-color-secondary);
    margin-top: 0.5rem;
    border: none;
    height: 5rem;
    color: var(--ion-color-medium);
    margin-top: 0.5rem;
    padding: 1rem 4rem;
    border-radius: 1rem;
    word-break: keep-all;
    text-align: center;
`

export default ObjectInputBox