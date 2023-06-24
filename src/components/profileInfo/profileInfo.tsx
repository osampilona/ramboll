import styles from "@/components/profileInfo/profileInfo.module.css";
import Image from "next/image";
import Link from "next/link";
import { PageRoute } from "@/app/types";

export const ProfileInfo: React.FC<PageRoute> = ({ page }) => {
  if (page === "profile") {
    return (
      <div className={styles.navigation}>
        <Link href="/edit">
          <button>
            <p>Edit profile</p>
          </button>
        </Link>
        <Image src="/logout.svg" alt="logout" width="24" height="24" />
      </div>
    );
  } else {
    return (
      <div className={styles.navigation}>
        <Link href="/">
          <Image src="/arrow_back.svg" alt="back" height="24" width="24" />
        </Link>
        <Image src="/logout.svg" alt="logout" width="24" height="24" />
      </div>
    );
  }
};
