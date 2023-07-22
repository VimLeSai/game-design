import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { AndarBaharPage, HiloPage, HomePage, RocketPage } from "./pages";

import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/roket":
        title = "";
        metaDescription = "";
        break;
      case "/hilo":
        title = "";
        metaDescription = "";
        break;
      case "/andar-bahar":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/andar-bahar" element={<AndarBaharPage />} />
      <Route path="/hilo" element={<HiloPage />} />
      <Route path="/rocket" element={<RocketPage />} />
    </Routes>
  );
}
export default App;
