import styles from "@/components/hero/hero.module.css";

export function Hero() {
  return (
    <div className={styles.title}>
      <p>
        <span>Log in</span> or <span>Register </span>
        <br></br>
        with Ramboll’s credentials{" "}
      </p>
    </div>
  );
}
