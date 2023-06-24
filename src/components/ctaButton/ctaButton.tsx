import { PageRoute } from "@/app/types";
import styles from "@/components/ctaButton/ctaButton.module.css";
import Link from "next/link";

const CtaButton: React.FC<PageRoute> = ({ page }) => {
  if (page === "login") {
    return (
      <Link href="/">
        <button className={styles.button}>Log in</button>
      </Link>
    );
  } else {
    return (
      <Link href="/login">
        <button className={styles.button}>Register</button>
      </Link>
    );
  }
};

export default CtaButton;
