import styles from "./Backdrop.module.scss";

interface BackdropProps {
  isVisible: boolean;
  close: () => void;
}

const Backdrop = ({ isVisible, close }: BackdropProps) => {
  return isVisible ? <div className={styles.backdrop} onClick={close} /> : null;
};

export default Backdrop;
