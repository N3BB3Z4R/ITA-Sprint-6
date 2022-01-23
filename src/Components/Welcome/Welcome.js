import React, { useRef } from 'react'
import styled from 'styled-components';


export const Welcome = (props) => {

  console.log('welcome', props)
  const inputName = useRef(null);

  if (props.nameVisit === 'convidat') {
    return <Modal nameVisit={props.nameVisit}>
        <p>Hola {props.nameVisit}!</p>
        <h6>Benvingut a la nostra plataforma on trobaràs una manera entretinguda de veure històries.</h6>
        <h6>Està desenvolupat en React usant useRef, useState i useEffect a més de Styled-Components per manejar el disseny.</h6>
        <form>
          <Input ref={inputName} minLength={3} maxLength={16} type="input" placeholder="Nombre" />
          <Button type="submit" onClick={() => props.setNameVisit(inputName.current.value)}>Començar</Button>
        </form>
      </Modal>
  } else {
    return <UserBar>Hola {props.nameVisit || 'convidat'}! <Settings onClick={() => props.setNameVisit('convidat')}>⚙️</Settings></UserBar>
  }
}


// boton para cambiar el nombre de usuario
const Settings = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.5rem;
  margin: 0 0.5rem;
  font-size: 1.8rem;
  transition: 400ms ease-in-out;

  &:hover {
    background-color: transparent;
    transform: scale(1.3);
  }
`;

// Si el usuario ha introducido su nombre, se muestra en el UserBar
const UserBar = styled.div`
  cursor:default;
  position:absolute;
  top:1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 75vw;
  max-width: 800px;
  height: 4rem;
  background-color: var(--color-light-primary);
  box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.6);
  border: 0.55rem var(--color-tertiary) solid;
  border-radius: 20px;
  /* margin: 2rem 0; */
`;

// Si el usuario todavia no ha introducido su nombre,
// se muestra una ventana modal que le pide el nombre
const Modal = styled.div`
	z-index: 100;
	display: ${({props}) => (props?.nameVisit === 'convidat' ? 'flex' : 'transparent')};
  justify-content: center;
  align-items: center;
	position: fixed;
  text-align: center;
  border-radius: 3rem;
  box-shadow: 0px 5px 20px hsla(210, 45%, 0%, 0.8);
  border: 0.55rem solid var(--color-tertiary);
	margin: auto auto;
	height: 90vh;
	width:90vw;
	background: rgba(0,0,0,0.75);
  backdrop-filter: blur(2px);
  transition: display 400ms ease-in-out;
`;

const Button = styled.button`
  border: 0.55rem solid orange;
  border-radius: 5px;
  padding: 1rem;
  background-color: orange;
  color: white;
  margin: 0 0.5rem;
  transition: 500ms ease-in-out;
  font-size: 1.2rem;

  &:hover {
    background-color: var(--color-light-primary);
    box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.6);
    cursor: pointer;
    transition: 300ms ease-in-out;
  }
`;

const Input = styled.input`
  border: 0.55rem solid orange;
  box-shadow: inset 0 0 0.7rem hsla(0, 0%, 0%, 0.6);
  border-radius: 5px;
  padding: 1rem;
  margin: 0 0.5rem;
  font-size: 1.2rem;
`;