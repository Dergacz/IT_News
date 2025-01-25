import React from 'react';
import Portal from 'shared/ui/Portal/Portal';
import { classNames } from 'shared';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className={classNames(styles.Modal)} data-testid="modal">
        <div className={styles.overlay} onClick={onClose} data-testid="modal-overlay" />
        <div className={styles.content}>
          <button className={styles.closeButton} onClick={onClose} data-testid="close-button" aria-label="Close">
            &times;
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
