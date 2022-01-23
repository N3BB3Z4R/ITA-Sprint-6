import React from "react";
import styled from 'styled-components';

export const Controles = ({length, index, setIndex}) => {

  const selectBefore = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };

  const selectAfter = () => {
    if (index >= length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  return (
    <>
      <div>
        <Contador><ContadorNumber>{index + 1}</ContadorNumber></Contador>
        <Button onClick={() => selectBefore()}>Anterior</Button>
        <Button onClick={() => selectAfter()}>Següent</Button>
      </div>
    </>
  );
}

// Styled-component para botones de navegacion
export const Contador = styled.p`
  border-radius: 50%;
  border: 0.75rem var(--color-tertiary) solid;
  background-color: hsla(210, 65%, 40%, 0.45);
  backdrop-filter: blur(4.0px);
  font-weight: bold;
  color: var(--color-secondary);
  text-align: center;
  width: 8.8rem;
  margin: 0 auto;
  padding: 0rem 0.3rem 0.3rem 0rem;
  text-shadow: 5px 5px 20px #fff;
  transition: 400ms ease-in-out;
  animation: spin 2s ease-in-out infinite;
  box-shadow: inset 0 0 0.8rem hsla(0, 0%, 0%, 0.6);
  @keyframes spin {
    0% { transform: rotateY(0deg); }
    20% { transform: rotateY(-40deg); }
    70% { transform: rotateY(20deg) rotateX(25deg); }
    80% { transform: rotateY(-40deg); }
    100% { transform: rotateY(10deg); }
  }

  &:hover {
    content: "Super P";
    cursor: default;
    background-color: hsla(195, 100%, 25%, 0.65);
    border: 0px var(--color-secondary) ridge;
    padding: 1.5rem 1.8rem 1.8rem 1.5rem;
    color: hsl(30, 70%, 98%);
    transition: 400ms ease-in-out;
    animation: getHover 0.6s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-play-state: running;
    @keyframes getHover {
      0% { transform: rotateY(-0deg) }
      30% { transform: rotateY(0deg) rotateX(45deg) rotateZ(10deg) scale(1.3);}
      60% { transform: rotateY(10deg) rotateX(5deg) rotateZ(0deg); }
      100% { transform: rotateY(-0deg) scale(1.9); }
    }
  }
`;

// ContadorNumber aparte para hacer el numero separado en 3d
export const ContadorNumber = styled.span`
  font-size: 5.5rem;
  font-weight: bold;
  color: var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  width: 2.8rem;
  margin: 0 auto;
  padding: 0rem 0.3rem 0.3rem 0rem;
  text-shadow: 5px 5px 20px #fff, 5px 5px 3px hsl(20, 85%, 70%);
  transition: 400ms ease-in-out;
  animation: spin 2.3s ease-in-out infinite;
  animation-delay: 0.5s;
  @keyframes spin {
    0% { transform: rotateY(40deg); }
    50% { transform: rotateY(-20deg) rotateX(25deg); text-shadow: 5px 5px 1px #fff, 5px 5px 3px hsl(20, 85%, 70%); }
    100% { transform: rotateY(40deg); }
  }

  &:hover {
    content: "Super P";
    cursor: default;
    border: 0px var(--color-secondary) ridge;
    color: hsl(200, 70%, 98%);
    transition: 400ms ease-in-out;
  }
`;

export const Button = styled.button`
  cursor:pointer;
  border: 0.55rem solid var(--color-tertiary);
  box-shadow: inset 0px 0px 20px var(--color-tertiary);
  background-color: hsl(210, 65%, 10%);
  color: var(--color-secondary);
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  padding: 1rem 5rem;
  margin: 0.5rem;
  transition: 700ms;

  &:hover {
    background-color: var(--color-secondary);
    box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.6);
    transform: scale(1.1);
    color: white;
  }
  &:focus {
    animation: clickHit 0.8s ease-in-out;
  }
  @keyframes clickHit {
    15% {
      background-color: pink;
    }
    20% {
      background-color: hsl(0, 60%, 80%);
    }
    25% {
      background-color: white;
    }
    100% {
      background-color: hsl(30, 90%, 50%);
    }
  }
`;