import { PageRoute } from "@/app/types";
import styles from "@/components/hero/hero.module.css";
import React from "react";

const Hero: React.FC<PageRoute> = ({ page }) => {
  if (page === "login") {
    return (
      <div className={styles.title}>
        <p>
          <span>Log in</span> or <span>Register </span>
          <br></br>
          with Ramboll’s credentials{" "}
        </p>
      </div>
    );
  } else if (page === "register") {
    return (
      <div className={styles.title}>
        <p>
          <span>Register </span>
          <br></br>
          with Ramboll’s credentials{" "}
        </p>
      </div>
    );
  }
};

export default Hero;
