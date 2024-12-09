import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import '../styles/index.scss';
import { classNames } from "shared";
import { AboutPage, MainPage } from "pages";
import { useTheme } from "../providers/ThemeProvider/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>change theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/about" Component={AboutPage} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
