"use client";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.scss";
import cn from "clsx";
import { createPortal } from "react-dom";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isVisible, onClose, title, children }: ModalProps) => {
  return (
    <>
      {isVisible &&
        createPortal(
          <>
            <Backdrop isVisible={isVisible} close={onClose} />
            <div className={cn(styles.modal, isVisible && styles.show)}>
              <div className={styles.modal__body}>
                <header className={styles.modal__heading}>
                  <h1 className={styles.modal__title}>{title}</h1>
                </header>
                {children}
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};

export default Modal;
