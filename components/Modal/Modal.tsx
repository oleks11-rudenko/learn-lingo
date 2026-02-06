'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  modalWidth?: number;
  onClose: () => void;
}

export default function Modal({ children, modalWidth, onClose }: ModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div onClick={handleBackdropClick} className={css.backdrop}>
      <div style={{ width: modalWidth }} className={css.modal}>
        <button onClick={onClose}>
          <svg className={css.modalCloseButton} width="32" height="32">
            <use href="/icons.svg#close"></use>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
