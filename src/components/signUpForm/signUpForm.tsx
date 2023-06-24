import CtaButton from "../ctaButton/ctaButton";
import { PageRoute } from "@/app/types";
import { LinkButton } from "../linkButton/linkButton";
import styles from "@/components/signUpForm/signUpForm.module.css";

const SignUpForm: React.FC<PageRoute> = ({ page }) => {
  if (page === "login") {
    return (
      <>
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
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
};

export default SignUpForm;
