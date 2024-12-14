import { AppLink, classNames } from "shared";
import styles from "./Sidebar.module.scss";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={
      classNames(
        styles.Sidebar,
        {
          [styles.collapsed]: collapsed
        },
        [className]
      )}>
      <div className={styles.linksWrapper}>
        <AppLink to="/" title="Main" />
        <AppLink to="/about" title="About" />
      </div>
      <button onClick={onToggle}>
        {collapsed ? 'Open' : 'Close'}
      </button>
    </div>
  );
};
