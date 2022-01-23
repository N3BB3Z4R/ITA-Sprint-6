import React from 'react';
import styled from 'styled-components';


export const Escena = (props) =>
{
  console.log(props)
  return (
  <div>
    <Story index={props.index} idNum={props.idNum}>{props.story}</Story>
  </div>
)}

const Story = styled.p`
  transition: all 0.5s ease-in-out;
  color: ${(props) => (props.index === props.idNum ? 'white' : 'gray')};
  font-weight: bold;
  font-size: 1rem;
  padding: ${(props) => (props.index === props.idNum ? '2rem 2rem' : '1rem 2rem')};
  border: ${(props) => (props.index === props.idNum ? '0.55rem solid hsla(30, 100%, 50%, 0.9)' : '0.55rem solid hsla(30, 50%, 50%, 0.5)')};
  border-radius: 5rem;
  backdrop-filter: blur(4px);
  background-color: ${(props) => (props.index === props.idNum ? 'hsla(0, 90%, 45%, 0.9)' : 'hsla(210, 65%, 10%, 0.7)')};
  box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.7);
`;
