"use client";

import styles from "@/components/mainContainer/mainContainer.module.css";
import SignUpForm from "../signUpForm/signUpForm";
import { PageRoute } from "@/app/types";
import { AddItemButton } from "../addItemButton/addItemButton";
import { EditProfile } from "../edit-profile/editProfile";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { TodoItem } from "../todoItem/todoItem";

export interface EditInput {
  isEditable: boolean;
  setIsEditable: Dispatch<SetStateAction<boolean>>;
  handleEdit: () => void;
}

export const MainContainer: React.FC<PageRoute> = ({ page }) => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const items: any[] = [1];
  if (page === "login") {
    return (
      <div className={styles.container}>
        <SignUpForm page={"login"} />
      </div>
    );
  } else if (page === "register") {
    return (
      <div className={styles.container}>
        <SignUpForm page={"register"} />
      </div>
    );
  } else if (page === "profile") {
    if (items.length <= 0 || null) {
      return (
        <div className={styles.containeradd}>
          <div className={styles.add}>
            <p>Add your first item</p>
            <AddItemButton />
          </div>
        </div>
      );
    } else
      return (
        <div className={styles.containerlist}>
          {items.map((item, index) => (
            <div className={styles.listitem} key={index}>
              <TodoItem />
            </div>
          ))}
        </div>
      );
  } else if (page === "edit") {
    return (
      <div className={styles.editing}>
        <div className={styles.editicon}>
          <h3 className={styles.title}>Here you can change your user info</h3>
          <Image
            className={styles.icon}
            src="/edit.svg"
            alt="edit"
            width="24"
            height="24"
            onClick={handleEdit}
          />
        </div>
        <EditProfile
          page={"edit"}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
          handleEdit={handleEdit}
        />
      </div>
    );
  }
};
