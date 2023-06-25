import styles from "@/components/todoItem/todoItem.module.css";
import Image from "next/image";
import { Line } from "../line/line";

export const TodoItem = () => {
  return (
    <>
      <div className={styles.item}>
        <input
          type="text"
          id="input"
          name="input"
          placeholder="Add todo item"
          className={styles.iteminput}
        ></input>
        <Image src="/close.svg" alt="close" width="24" height="24" />
      </div>
      <Line />
    </>
  );
};
