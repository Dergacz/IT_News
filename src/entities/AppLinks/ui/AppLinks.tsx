import { AppLink } from "shared/ui/AppLink/AppLink"; // Import AppLink
import { useTranslation } from "react-i18next";
import MainIcon from "shared/assets/icons/icon-home.svg";
import AboutIcon from "shared/assets/icons/icon-about_app.svg";
import styles from "./AppLinks.module.scss";

const links = [
  { to: "/", titleKey: 'main', icon: <MainIcon /> },
  { to: "/about", titleKey: 'about', icon: <AboutIcon /> },
];

export interface AppLinksProps {
  isCollapsed: boolean;
}

export const AppLinks = ({ isCollapsed }: AppLinksProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.linksWrapper}>
      {links.map(link => (
        <AppLink
          key={link.to}
          isCollapsed={isCollapsed}
          icon={link.icon}
          to={link.to} 
          title={t(link.titleKey)}
        />
      ))}
    </div>
  );
};
