import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const AuthView = lazy(() => import('./pages/AuthView'));
const AppView = lazy(() => import('./pages/AppView'));

const App = (): JSX.Element => {
    const theme = createTheme({
        typography: {
            htmlFontSize: 12,
        },
        palette: {
            secondary: {
                main: '#E33E7F',
            },
        },

        components: {
            // MuiRadio: {
            //     styleOverrides: {
            //         root: {
            //             color: '#FF481A',
            //         },
            //         colorSecondary: {
            //             '&$checked': {
            //                 color: '#FF481A',
            //             },
            //         },
            //         colorPrimary: {
            //             '&$checked': {
            //                 color: '#FF481A',
            //             },
            //             color: '#FF481A',
            //         },
            //         checked: {
            //             '&$checked': {
            //                 color: '#FF481A',
            //             },
            //             color: '#FF481A',
            //         },
            //     },
            // },
            MuiInput: {
                styleOverrides: {
                    root: {
                        fontSize: '16px',
                    },
                },
            },
            MuiInputAdornment: {
                styleOverrides: {
                    root: {
                        fontSize: '20px',
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
                <Route path="/auth" component={AuthView} />
                <Route path="/" component={AppView} />
            </Switch>
        </ThemeProvider>
    );
};

export default App;
