import { useTranslation } from "react-i18next";
import styles from "./AboutPage.module.scss";

const About = () => {
  const { t } = useTranslation();
  return <div className={styles.content}>{t('about')}</div>;
}

export default About;
