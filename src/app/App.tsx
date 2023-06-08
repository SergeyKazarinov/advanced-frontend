import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPageLazy } from "pages/AboutPage";
import { MainPageLazy } from "pages/MainPage";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return ( 
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/about'}>О сайте</Link>
      <Link to={'/'}>Главная</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />}/>
          <Route path={'/'} element={<MainPageLazy />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;