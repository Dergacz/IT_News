import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

export interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('Unexpected error occurred')}</p>
      <Button onClick={reloadPage}>
        {t('Refresh page')}
      </Button>
    </div>
  );
};
