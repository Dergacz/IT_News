import { useTranslation } from "react-i18next";
import styles from "./MainPage.module.scss";

const Main = () => {
  const { t } = useTranslation();
  return <div className={styles.content}>{t('main')}</div>;
}

export default Main;
