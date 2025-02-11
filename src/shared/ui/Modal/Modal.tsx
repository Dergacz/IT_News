import React from 'react';
import Portal from 'shared/ui/Portal/Portal';
import { classNames } from 'shared';
import styles from './Modal.module.scss';
import { useTheme } from 'app/providers/ThemeProvider/useTheme';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, className, children }) => {
  const { theme } = useTheme();
  if (!isOpen) return null;

  return (
    <Portal>
      <div className={classNames(styles.Modal, {}, [className, theme])} data-testid="modal">
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
