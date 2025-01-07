import { Theme } from "app/providers/ThemeProvider/ThemeContext";
import { useTheme } from "app/providers/ThemeProvider/useTheme";
import { classNames } from "shared";
import SwitchThemeDarkIcon from "shared/assets/icons/icon-colour-black.svg";
import SwitchThemeIcon from "shared/assets/icons/icon-colour.svg";
import { Button, ButtonVariant } from "shared/ui/Button/Button";
import styles from "./ThemeSwitcher.module.scss";
import React from "react";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      variant={ButtonVariant.Clear} 
      onClick={toggleTheme}
    >
      {
        theme === Theme.LIGHT ? <SwitchThemeIcon /> : <SwitchThemeDarkIcon />
      }
    </Button>
  );
};
