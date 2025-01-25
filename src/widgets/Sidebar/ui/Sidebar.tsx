import { AppLinks } from "entities/AppLinks/ui/AppLinks";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CollapsedIcon from "shared/assets/icons/collapse-icon.svg";
import { classNames } from "shared/helpers/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import styles from "./Sidebar.module.scss";

export interface SidebarProps {
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
      data-testid="sidebar"
      className={
      classNames(
        styles.Sidebar,
        {
          [styles.collapsed]: collapsed
        },
        [className]
      )}>
      <div className={styles.headerWrapper}>
        <Button
          data-testid="sidebar-toggle"
          onClick={onToggle} 
          className={styles.toggleButton}
          variant={ButtonVariant.Clear}
        >
          <CollapsedIcon />
        </Button>
        {
          !collapsed && <p className={styles.header}>{t('news')}</p>
        }
      </div>
      <AppLinks isCollapsed={collapsed} />
    </div>
  );
};
