import { classNames } from "shared";
import React, { ReactNode } from "react";
import styles from "./AppLink.module.scss";
import { Link } from "react-router-dom";

export enum AppLinkVariants {
  Primary = "primary",
  Secondary = "secondary",
}

interface AppLinkProps {
  className?: string;
  to: string;
  title: string;
  icon: ReactNode;
  isCollapsed?: boolean;
  variant?: AppLinkVariants;
}

export const AppLink = ({ 
  className,
  to,
  title,
  icon,
  isCollapsed = false,
  variant = AppLinkVariants.Primary
}: AppLinkProps) => {
  return (
    <Link 
      className={classNames(styles.AppLink, {}, [className, styles[variant]])}
      to={to}
    >
      <span className={
        classNames(
          styles.icon, 
          {
            [styles.collapsed]: isCollapsed
          }
        )}
      >
        {icon}
      </span>
      {
        !isCollapsed && <span className={styles.title}>{title}</span>
      }
    </Link>
  );
};
