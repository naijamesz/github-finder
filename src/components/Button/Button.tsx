import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
