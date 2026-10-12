import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Every route change starts at the top of the new page — whether it came
// from the navbar, an in-page link or the browser's back/forward buttons.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
