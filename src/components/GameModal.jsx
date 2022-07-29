import React from "react";
import styled from "styled-components";

export default function GameModal({ gameModal }) {
  return (
    <Modal>
      <Message>{gameModal.message}</Message>
      <ButtonWrap>{gameModal.button}</ButtonWrap>
    </Modal>
  );
}

const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s 0.8s ease-in;
  & {
    opacity: 1;
  }
`;

const Message = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: #30335d;
`;

const ButtonWrap = styled.div`
  button {
    color: white;
    border-radius: 4px;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 2rem;
  }
`;
