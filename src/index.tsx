import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App';
import './app.scss';
import { Preloader } from './reusables';
import { GlobalStoreProvider } from './context';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Preloader />}>
            <GlobalStoreProvider>
                <SnackbarProvider
                    hideIconVariant={false}
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <QueryClientProvider client={queryClient}>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </QueryClientProvider>
                </SnackbarProvider>
            </GlobalStoreProvider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
