import styles from "@/components/mainContainer/mainContainer.module.css";
import SignUpForm from "../signUpForm/signUpForm";
import { PageRoute } from "@/app/types";
import { AddItemButton } from "../addItemButton/addItemButton";

export const MainContainer: React.FC<PageRoute> = ({ page }) => {
  const items = [];
  if (page === "login") {
    return (
      <div className={styles.container}>
        <SignUpForm page={"login"} />
      </div>
    );
  } else if (page === "register") {
    return (
      <div className={styles.container}>
        <SignUpForm page={"register"} />
      </div>
    );
  } else {
    if (items.length <= 0 || null) {
      return (
        <div className={styles.containeradd}>
          <div className={styles.add}>
            <p>Add your first item</p>
            <AddItemButton />
          </div>
        </div>
      );
    } else return <div className={styles.container}>{items.length}</div>;
  }
};
