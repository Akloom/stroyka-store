import styles from "./Payment.module.scss"


export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      
      <div className={styles.loser}>
      
      </div>
      {children}
    </div>
  );
}
