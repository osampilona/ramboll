import styles from "@/components/addItemButton/addItemButton.module.css";

export const AddItemButton = () => {
  return (
    <button className={styles.circle}>
      <div className={styles.plus}>
        <div className={styles.vertical}></div>
        <div className={styles.horizontal}></div>
      </div>
    </button>
  );
};
