import styles from "@/components/ctaButton/ctaButton.module.css";
import Link from "next/link";

export function CtaButton() {
  return (
    <Link href="/profile">
      <button className={styles.button}>Log in</button>
    </Link>
  );
}
