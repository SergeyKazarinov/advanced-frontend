import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/routing";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return ( 
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;