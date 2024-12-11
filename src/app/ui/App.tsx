import { AppRouter } from "app/providers/providers/router";
import { classNames } from "shared";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar";
import { useTheme } from "../providers/ThemeProvider/useTheme";
import '../styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Sidebar />
      <div>
        <button onClick={toggleTheme}>change theme</button>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
