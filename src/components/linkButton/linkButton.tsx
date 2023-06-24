import { PageRoute } from "@/app/types";
import styles from "@/components/linkButton/linkButton.module.css";
import Link from "next/link";

export const LinkButton: React.FC<PageRoute> = ({ page }) => {
  if (page === "login") {
    return (
      <Link className={styles.link} href="/register">
        or register
      </Link>
    );
  } else {
    return (
      <Link className={styles.link} href="/login">
        or log in
      </Link>
    );
  }
};
