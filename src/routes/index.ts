import { lazy } from "react";
import { Preloader } from '../reusables';

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
const PickupSummary = lazy(() => import('../components/pages/Payment/PickupSummary'));
const CarAddedSuccess = lazy(() => import('../components/pages/Payment/CarAddedSuccess'));
const BookingSummary = lazy(() => import('../components/pages/BookingSummary'));
const JetPooling = lazy(() => import('../components/pages/JetPooling'));
const Wallet = lazy(() => import('../components/pages/Wallet'));
const AllTransactions = lazy(() => import('../components/pages/Wallet/AllTransactions'));
const WalletFunded = lazy(() => import('../components/pages/Wallet/WalletFunded'));
const WithdrawFunds = lazy(() => import('../components/pages/Wallet/WithdrawFunds'));
const Trip = lazy(() => import('../components/pages/Trip'));
const Profile = lazy(() => import('../components/pages/Profile'));
const GetHelp = lazy(() => import('../components/pages/GetHelp'));
const Terms = lazy(() => import('../components/pages/Company/Terms'));
const PrivacyNotice = lazy(() => import('../components/pages/Company/PrivacyNotice'));


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
        key: 'terms',
        path: AUTHENTICATED_ROUTES.terms,
        component: Terms,

    },
    {
        key: 'privacy-notice',
        path: AUTHENTICATED_ROUTES.privacyNotice,
        component: PrivacyNotice,

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
        path: [APP_ROUTES.airCharter ,  APP_ROUTES.landCharter, '/charter/:type'],
        component: AirCharter,

    },
    {
        key: 'detail-page',
        path: [APP_ROUTES.detailPage, '/charter/:type/:id'],
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
    {
        key: 'pickup-summary',
        path: APP_ROUTES.pickUpSummary,
        component: PickupSummary,

    },
    {
        key: 'car-added-success',
        path: APP_ROUTES.carAddedSuccess,
        component: CarAddedSuccess,

    },
    {
        key: 'booking-summary',
        path: APP_ROUTES.bookingSummary,
        component: BookingSummary,

    },
    {
        key: 'jet-pooling',
        path: APP_ROUTES.jetPooling,
        component: JetPooling,

    },
    {
        key: 'wallet',
        path: APP_ROUTES.wallet,
        component: Wallet,

    },
    {
        key: 'trip',
        path: APP_ROUTES.trip,
        component: Trip,

    },
    {
        key: 'profile',
        path: APP_ROUTES.profile,
        component: Profile,

    },
    {
        key: 'allTransactions',
        path: APP_ROUTES.allTransactions,
        component: AllTransactions,

    },
    {
        key: 'walletFunded',
        path: APP_ROUTES.walletFunded,
        component: WalletFunded,

    },
    {
        key: 'withdrawFunds',
        path: APP_ROUTES.withdrawFunds,
        component: WithdrawFunds,

    },
    {
        key: 'getHelp',
        path: APP_ROUTES.getHelp,
        component: GetHelp,

    },
    
    {
        key: 'pre-loader',
        path: '/loader',
        component: Preloader,

    },
]

