import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-input-2/lib/material.css";

import App from "./App";
import "./index.css";
import "./app.scss";
import { Preloader } from "./reusables";
import { GlobalStoreProvider } from "./context";
import { ScrollToTop } from "./hooks";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      //   refetchOnmount: false,
      //   refetchOnReconnect: false,
      //   retry: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <GlobalStoreProvider>
        <SnackbarProvider
          hideIconVariant={false}
          preventDuplicate
          autoHideDuration={3000}
          maxSnack={2}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <ScrollToTop />
              <App />
            </BrowserRouter>
          </QueryClientProvider>
        </SnackbarProvider>
      </GlobalStoreProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
