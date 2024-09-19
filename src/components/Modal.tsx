import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  position: relative; /* Ajouté pour positionner le bouton "X" */
`;

const CloseButton = styled.button`
  position: absolute; /* Ajouté pour positionner le bouton "X" */
  top: 10px; /* Ajustez selon vos besoins */
  right: 10px; /* Ajustez selon vos besoins */
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`;

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                {children}
            </ModalContent>
        </ModalBackground>
    );
};

export default Modal;
