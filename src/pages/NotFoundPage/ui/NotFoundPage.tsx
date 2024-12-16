import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  
  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t('Page not found')}
    </div>
  );
};

export default NotFoundPage;
