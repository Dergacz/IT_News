import { AppLink, classNames } from "shared";
import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
        <AppLink to="/" title={t('main')} />
        <AppLink to="/about" title={t('about')} />
      </div>
      <button onClick={onToggle}>
        {collapsed ? 'Open' : 'Close'}
      </button>
    </div>
  );
};
