import { classNames } from "shared";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ThemeSwitcher";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
    </div>
  );
};
