import React from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: any;
};

const Modal: React.FunctionComponent<ModalProps> = ({ children }) => {
  let element = document.createElement('div');

  // Faded background generic to all modals. NOTE: Because of this, you  need to set `pointer-events: auto;` in your modal to allow click events
  const styles =
    'height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center; pointer-events: none;';
  element.setAttribute('style', styles);

  React.useEffect(() => {
    const modalRoot = document.getElementById('portal');
    if (modalRoot) {
      modalRoot.appendChild(element);
    }
    return () => {
      if (modalRoot) {
        modalRoot.removeChild(element);
      }
    };
  }, [element]);

  return createPortal(children, element);
};

export default Modal;