import styles from "@/components/terms/terms.module.css";
import Link from "next/link";

export function Terms() {
  return (
    <div className={styles.container}>
      <Link className={styles.terms} href="">
        Terms & Conditions
      </Link>
      <hr className={styles.line} />
    </div>
  );
}
