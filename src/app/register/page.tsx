import Hero from "@/components/hero/hero";
import styles from "../page.module.css";
import { Terms } from "@/components/terms/terms";
import { MainContainer } from "@/components/mainContainer/mainContainer";

export default function Register() {
  return (
    <main className={styles.main}>
      <Hero page="register" />
      <MainContainer page="register" />
      <Terms />
    </main>
  );
}
