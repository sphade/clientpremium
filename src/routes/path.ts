export const AUTHENTICATED_ROUTES = {
    signin: '/auth/signin',
    signup: '/auth/signup',
    signupsucces: '/auth/signup/success',
    singupProvideDetails: '/auth/signup/provide-details',
    signupotp: '/auth/signup/otp',
    forgotPassword: '/auth/forgot-password',
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
    bookedPage: '/booked-success',
    pickUpSummary: '/pickup-summary',
    carAddedSuccess: '/car-added-success',
    bookingSummary: '/booking-summary',
    jetPooling: '/jet-pooling',
}