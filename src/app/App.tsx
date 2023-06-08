import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/routing";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return ( 
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/about'}>О сайте</Link>
      <Link to={'/'}>Главная</Link>
      <AppRouter />
    </div>
  );
}

export default App;