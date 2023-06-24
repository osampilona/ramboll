import CtaButton from "../ctaButton/ctaButton";
import Link from "next/link";
import styles from "@/components/loginForm/loginForm.module.css";
import { PageRoute } from "@/app/types";
import { LinkButton } from "../linkButton/linkButton";

const LoginForm: React.FC<PageRoute> = ({ page }) => {
  if (page === "login") {
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
          <CtaButton page={page} />
          <LinkButton page={page} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <input className={styles.input} placeholder="Full Name"></input>
          <input
            className={styles.input}
            placeholder="Your.email@ramboll.com"
          ></input>
          <input className={styles.input} placeholder="Enter password"></input>
        </div>
        <div className={styles.actions}>
          <CtaButton page={page} />
          <LinkButton page={page} />
        </div>
      </div>
    );
  }
};

export default LoginForm;
