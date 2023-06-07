import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "..//pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "../pages/MainPage/MainPage.lazy";
import { Suspense } from "react";


const App = () => {
  return ( 
    <div className="app">
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