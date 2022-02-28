/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

function ScrollToTop({ history }: { history: History }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop as any);
