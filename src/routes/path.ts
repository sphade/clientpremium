export const AUTHENTICATED_ROUTES = {
    signin: '/auth/signin',
    signup: '/auth/signup',
    signupsucces: '/auth/signup/success',
    singupProvideDetails: '/auth/signup/provide-details',
    signupotp: '/auth/signup/otp',
    forgotPassword: '/auth/forgot-password',
    terms: '/auth/terms',
    privacyNotice: '/auth/privacyNotice',

}


export const APP_ROUTES = {
    home: '/home',
    charter: (type: string) => `/charter/${type}`,
    airCharter: '/air-charter',
    landCharter: '/land-charter',
    seaCharter: '/sea-charter',
    detailPage: 'detail',
    charterDetailPage: (type: string, id: string) => `/charter/${type}/${id}`,
    charterSummary: '/charter-summary',
    paymentMethod: '/payment-method',
    getPaymentMethod:  `/payment-method`,
    bookedPage: '/booked-success',
    getBookedPage: ({type, id}: { type: string, id: string}) => `/booked-success/?type=${type}&id=${id}`,
    pickUpSummary: '/pickup-summary',
    carAddedSuccess: '/car-added-success',
    bookingSummary: '/booking-summary',
    jetPooling: '/jet-pooling',
    wallet: '/wallet',
    allTransactions: '/allTransactions',
    walletFunded: '/walletFunded',
    withdrawFunds: '/withdrawFunds',
    trip: '/trip',
    profile: '/profile',
    getHelp: '/getHelp',
    getBookingSummaryPrimary: ({type, id}: { type: string, id: string}) => `/booking-detail/?type=${type}&id=${id}`,
    bookingSummaryPrimary: '/booking-detail',
    verifyPayment: '/verify-payment',

}