import { PageRoute } from "@/app/types";
import styles from "@/components/edit-profile/editProfile.module.css";

export const EditProfile: React.FC<PageRoute> = ({ page }) => {
  if (page === "edit")
    return (
      <div className={styles.edit}>
        <div className={styles.single}>
          <p>Full name:</p>
          <p>Your Name</p>
        </div>
        <div className={styles.single}>
          <p>Email:</p>
          <p>your.email@ramboll.com</p>
        </div>
        <div className={styles.single}>
          <p>Password:</p>
          <p>********</p>
        </div>
      </div>
    );
};
