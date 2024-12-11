import { AppLink, classNames } from "shared";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={classNames(styles.Sidebar, {}, [className])}>
      <div className={styles.linksWrapper}>
        <AppLink to="/" title="Main" />
        <AppLink to="/about" title="About" />
      </div>
    </div>
  );
};
