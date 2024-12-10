import { AppRouter } from "app/providers/providers/router";
import { Link } from "react-router-dom";
import { classNames } from "shared";
import { useTheme } from "../providers/ThemeProvider/useTheme";
import '../styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>change theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
}

export default App;
