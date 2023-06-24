import { ProfileInfo } from "@/components/profileInfo/profileInfo";
import { MainContainer } from "@/components/mainContainer/mainContainer";
import styles from "../page.module.css";

export const EditPage: React.FC = () => {
  return (
    <main className={styles.settings}>
      <ProfileInfo page={"edit"} />
      <MainContainer page={"edit"} />
    </main>
  );
};

export default EditPage;
