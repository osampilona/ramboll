import styles from "@/components/profileInfo/profileInfo.module.css";
import Image from "next/image";

export const ProfileInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <p>Edit profile</p>
        <Image src="/logout.svg" alt="logout" width="24" height="24" />
      </div>
    </div>
  );
};
