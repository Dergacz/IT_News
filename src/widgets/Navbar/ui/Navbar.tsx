import React from "react";
import { classNames } from "shared";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};
