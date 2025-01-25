import { classNames } from "shared";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ThemeSwitcher";
import styles from "./Navbar.module.scss";
import Modal from "shared/ui/Modal/Modal";
import { useState } from "react";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <LangSwitcher />
      <Button
       onClick={handleOpenModal} 
       variant={ButtonVariant.Secondary}>
        {t('login')}
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{t('modal_title')}</h2>
        <p>{t('modal_content')}</p>
      </Modal>
    </div>
  );
};
