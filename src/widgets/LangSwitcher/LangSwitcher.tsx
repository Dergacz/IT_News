import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';
import React from 'react';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      variant={ButtonVariant.Clear}
      onClick={toggle}
    >
      {t('language')}
    </Button>
  );
};
