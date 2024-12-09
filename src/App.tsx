import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/pages/AboutPage/AboutPage.async";
import Main from "./components/pages/MainPage/MainPage.async";
import './styles/index.scss';
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/className";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>change theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/about" Component={About} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
