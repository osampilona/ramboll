import styles from "../page.module.css";
import { Terms } from "@/components/terms/terms";
import Hero from "@/components/hero/hero";
import { MainContainer } from "@/components/mainContainer/mainContainer";

export const LoginPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Hero page="login" />
      <MainContainer page="login" />
      <Terms />
    </main>
  );
};

export default LoginPage;
