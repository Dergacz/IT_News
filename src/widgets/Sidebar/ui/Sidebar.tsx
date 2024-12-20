import styles from "./Sidebar.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/helpers/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

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
    <div
      data-testId="sidebar"
      className={
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
      <button onClick={onToggle} data-testId="sidebar-toggle">
        {collapsed ? 'Open' : 'Close'}
      </button>
    </div>
  );
};
