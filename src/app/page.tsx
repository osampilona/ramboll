"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect } from "react";

const isUserLoggedIn = false;
export default function Profile() {
  const router = useRouter();

  const checkRoute = () => {
    if (isUserLoggedIn) {
      return (
        <main className={styles.main}>
          <h1>Profile page</h1>
        </main>
      );
    }
    router.push("/login");
  };

  useEffect(() => {
    checkRoute();
  }, []);
}
