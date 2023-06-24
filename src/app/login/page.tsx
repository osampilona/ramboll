import LoginForm from "@/components/loginForm/loginForm";
import styles from "../page.module.css";
import { Terms } from "@/components/terms/terms";
import Hero from "@/components/hero/hero";

const LoginPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <Hero page="login" />
      <LoginForm page="login" />
      <Terms />
    </main>
  );
};

export default LoginPage;
