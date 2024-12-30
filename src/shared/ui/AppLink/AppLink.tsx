import { classNames } from "shared";
import React from "react";
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
  variant?: AppLinkVariants;
}

export const AppLink = ({ 
  className,
  to, 
  title, 
  variant = AppLinkVariants.Primary
}: AppLinkProps) => {
  return (
    <Link 
      className={classNames(styles.AppLink, {}, [className, styles[variant]])}
      to={to}
    >
      {title}
    </Link>
  );
};
