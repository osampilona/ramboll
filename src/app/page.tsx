import { LoginForm } from "@/components/loginForm/loginForm";
import styles from "./page.module.css";
import { Terms } from "@/components/terms/terms";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <LoginForm />
      <Terms />
    </main>
  );
}
