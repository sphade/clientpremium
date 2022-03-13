/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { History } from "history";

export const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const history = useHistory();

    return <Component history={history} {...props} />;
  };

  return Wrapper;
};

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
