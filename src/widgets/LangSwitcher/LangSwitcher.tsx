import { useTranslation } from 'react-i18next';
import { classNames } from 'shared';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

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
      className={classNames('', {}, [className])}
      variant={ButtonVariant.Clear}
      onClick={toggle}
    >
      {t('example')}
    </Button>
  );
};