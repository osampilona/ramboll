import { CtaButton } from "../ctaButton/ctaButton";
import Link from "next/link";
import styles from "@/components/loginForm/loginForm.module.css";

export function LoginForm() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          className={styles.input}
          placeholder="Your.email@ramboll.com"
        ></input>
        <input className={styles.input} placeholder="Enter password"></input>
      </div>
      <div className={styles.actions}>
        <CtaButton />
        <Link className={styles.link} href="/register">
          or register
        </Link>
      </div>
    </div>
  );
}
