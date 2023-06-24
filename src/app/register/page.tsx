import Hero from "@/components/hero/hero";
import styles from "../page.module.css";
import LoginForm from "@/components/loginForm/loginForm";
import { Terms } from "@/components/terms/terms";

export default function Register() {
  return (
    <main className={styles.main}>
      <Hero page="register" />
      <LoginForm page="register" />
      <Terms />
    </main>
  );
}
