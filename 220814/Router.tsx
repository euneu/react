import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface IRouterProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}
function Router({ toggleDarkMode, isDarkMode }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/:coinId*"
          element={<Coin isDarkMode={isDarkMode} />}
        ></Route>
        <Route
          path="/"
          element={<Coins toggleDarkMode={toggleDarkMode} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
