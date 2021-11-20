import { lazy } from "react";

import { APP_ROUTES, AUTHENTICATED_ROUTES } from './path';
const SignIn = lazy(() => import('./../components/auth/Signin'));
const SignupSuccess = lazy(() => import('../components/auth/SignupSuccess'));
const SignupOtp = lazy(() => import('../components/auth/SignupOtp'));
const ProvideDetails = lazy(() => import('../components/auth/ProvideDetails'));
const ForgotPassword = lazy(() => import('../components/auth/ForgotPassword'));
const Home = lazy(() => import('../components/pages/Home'));
const AirCharter = lazy(() => import('../components/pages/AirCharter'));
const DetailPage = lazy(() => import('../components/pages/DetailPage'));
const PaymentMethod = lazy(() => import('../components/pages/Payment/PaymentMethod'));
const BookedPage = lazy(() => import('../components/pages/Payment/BookedPage'));


export const routeList = [
    {
        key: 'signin',
        path: AUTHENTICATED_ROUTES.signin,
        component: SignIn,

    },
    {
        key: 'signup-success',
        path: AUTHENTICATED_ROUTES.signupsucces,
        component: SignupSuccess,
    },
    {
        key: 'signup-otp',
        path: AUTHENTICATED_ROUTES.signupotp,
        component: SignupOtp,
    },
    {
        key: 'provide-details',
        path: AUTHENTICATED_ROUTES.singupProvideDetails,
        component: ProvideDetails,
    },
    {
        key: 'forgot-password',
        path: AUTHENTICATED_ROUTES.forgotPassword,
        component: ForgotPassword,
    },
]

export const appRoutes = [
    {
        key: 'home',
        path: APP_ROUTES.home,
        component: Home,

    },
    {
        key: 'air-charter',
        path: APP_ROUTES.airCharter,
        component: AirCharter,

    },
    {
        key: 'detail-page',
        path: APP_ROUTES.detailPage,
        component: DetailPage,

    },
    {
        key: 'payment-method',
        path: APP_ROUTES.paymentMethod,
        component: PaymentMethod,

    },
    {
        key: 'booked-page',
        path: APP_ROUTES.bookedPage,
        component: BookedPage,

    },
]

