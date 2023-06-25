import { useState } from "react";
import { PageRoute } from "@/app/types";
import Link from "next/link";
import styles from "@/components/edit-profile/editProfile.module.css";
import { EditInput } from "../mainContainer/mainContainer";

export const EditProfile: React.FC<PageRoute & EditInput> = ({
  page,
  isEditable,
  setIsEditable,
  handleEdit,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isEditable) {
      if (password !== repeatPassword) {
        setErrorPassword("Your password doesn't match");
      } else {
        setErrorPassword("Passwords are correct");
      }
    } else {
      console.log("No changes, submit at least one field!");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "name" && value !== name) {
      setName(value);
    } else if (name === "email" && value !== email) {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "repeatPassword") {
      setRepeatPassword(value);
    }

    setIsChanged(
      value !== name ||
        value !== email ||
        (name === "password" && repeatPassword !== value) ||
        (name === "repeatPassword" && password !== value)
    );
  };

  if (page === "edit") {
    return (
      <div className={styles.edit}>
        <form
          action="/update-profile"
          method="POST"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.questions}>
            <div className={styles.single}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className={styles.input}
                onChange={handleInputChange}
                disabled={!isEditable}
                required
              />
            </div>
            <div className={styles.single}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={styles.input}
                onChange={handleInputChange}
                disabled={!isEditable}
                required
              />
            </div>
            <div className={styles.single}>
              {errorPassword && <p>{errorPassword}</p>}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Change password"
                className={styles.input}
                onChange={handleInputChange}
                disabled={!isEditable}
                required
              />
            </div>
            <div className={styles.single}>
              {errorPassword && <p>{errorPassword}</p>}
              <input
                type="password"
                id="repeatPassword"
                name="repeatPassword"
                placeholder="Repeat new password"
                className={styles.input}
                onChange={handleInputChange}
                disabled={!isEditable}
                required
              />
            </div>
            <Link href="/" className={styles.btn}>
              <button
                type="submit"
                className={`${styles.button} ${!isChanged && styles.disabled}`}
                disabled={!isChanged || !!errorPassword}
              >
                Confirm
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }

  return null;
};
