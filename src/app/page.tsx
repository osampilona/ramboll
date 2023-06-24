"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ProfileInfo } from "@/components/profileInfo/profileInfo";
import { MainContainer } from "@/components/mainContainer/mainContainer";
import styles from "./page.module.css";

//PROFILE PAGE
const isUserLoggedIn = true;
export const ProfilePage: React.FC = () => {
  const router = useRouter();
  const checkRoute = () => {
    if (isUserLoggedIn) {
      console.log("components: ", ProfileInfo);
      return (
        <main className={styles.profile}>
          <ProfileInfo page={"profile"} />
          <MainContainer page={"profile"} />
        </main>
      );
    }
    router.push("/login");
  };

  useEffect(() => {
    checkRoute();
  }, []);
  const renderPage = checkRoute();
  return renderPage;
};

export default ProfilePage;
