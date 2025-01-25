import { AppRouter } from "app/providers/providers/router";
import { classNames } from "shared";
import { useTheme } from "./providers/ThemeProvider/useTheme";
import { Sidebar } from "widgets/Sidebar";
import { Navbar } from "widgets/Navbar";
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
    </div>
  );
}

export default App;
