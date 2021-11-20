import axios from "axios"

export const baseURL = 'https://bossbus-premium-api-staging.herokuapp.com/api/v1';


axios.defaults.baseURL = baseURL;

export const apiRoutes = {
    signup: '/user/signup',
    createUser: '/user/create',
    resendOtp: '/user/resend-verify-otp',
    forgotPassword: '/user/forgot-password',
    resetPassword: '/user/reset-password',
    login: '/user/login'
}


export const signUserUp =  async (data: Record<string, unknown>) => {
    const response = await axios.post(apiRoutes.signup, data )

    return response.data;
}


export const createUser =  async (data: Record<string, unknown> ) => {
    const response = await axios.post(apiRoutes.createUser, data )
    return response.data;
}
export const login =  async (data: Record<string, unknown> ) => {
    const response = await axios.post(apiRoutes.login, data )
    return response.data;
}
export const forgotPassword =  async (data: Record<string, unknown> ) => {
    const response = await axios.post(apiRoutes.forgotPassword, data )
    return response.data;
}

export const resetPassword =  async (data: Record<string, unknown> ) => {
    const response = await axios.post(apiRoutes.forgotPassword, data )
    return response.data;
}






