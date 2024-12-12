import { Button, ButtonVariant } from "shared/ui/Button/Button";
import { useTheme } from "app/providers/ThemeProvider/useTheme";
import SwitchThemeIcon from "shared/assets/icons/icon-colour.svg";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant={ButtonVariant.Primary} onClick={toggleTheme}>
      <SwitchThemeIcon />
    </Button>
  );
};
