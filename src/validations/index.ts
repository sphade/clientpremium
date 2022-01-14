import * as Yup from 'yup';


export const provideDetailsValidation = () => Yup.lazy( formValues => {

    const password = formValues['password'];
    const confirmPassword = formValues['confirmPassword']

    return Yup.object({
        email: Yup.string()
          .trim()
          .email('Enter a valid email')
          .required('Enter a valid email'),
        phoneNumber: Yup.string()
          .trim()
          .required('Enter your phone number')
          .min(4, "Password must be greater than 3 characters")
          ,
          
          name: Yup.string()
        .trim()
       
        .required('Enter your name'),
        password: Yup.string().min(4, "Password must be greater than 3 characters").required('Enter your password').test(
            {
                message: 'Password do not match',
                test: (value) => value === confirmPassword
            }
        ),
        confirmPassword: Yup.string().required('Re-enter your password').test(
            {
                message: 'Password do not match',
                test: (value) => value === password
            }
        )
    })
})
 
export const loginValidation = Yup.object({
        email: Yup.string()
          .trim()
          .email('Enter a valid email')
          .required('Enter a valid email'),
       
        password: Yup.string().required('Enter your password').min(4, "Password must be greater than 3 characters")
        
    });
    export const changePasswordValidation = () => Yup.lazy( formValues => {
        
        const newPassword = formValues['newPassword'];
        const confirmPassword = formValues['confirmPassword']
        
        return Yup.object({
            
        oldPassword: Yup.string().required('Enter your old password').min(4, "Password must be greater than 3 characters"),
        newPassword: Yup.string()
        .min(4, "Password must be greater than 3 characters")
        .required('Enter your new password').test(
            {
                message: 'Password do not match',
                test: (value) => value === confirmPassword
            }
        ),
        confirmPassword: Yup.string().min(4, "Password must be greater than 3 characters").required('Re-enter your new password').test(
            {
                message: 'Password do not match',
                test: (value) => value === newPassword
            }
        )
    })
})
 
export const changePhoneValidation = Yup.object({
         phone: Yup.string()
          .trim()
          .required('Enter your phone number'),
          name: Yup.string()
        .trim()
       
 
  });


export const forgotPasswordValidaiton = Yup.object({
        email: Yup.string()
          .trim()
          .email('Enter a valid email')
          .required('Enter a valid email'), 
 
  });


  export const resetPasswordValidation = () => Yup.lazy( formValues => {

    const password = formValues['password'];
    const confirmPassword = formValues['confirmPassword']

    return Yup.object({
      
        password: Yup.string().required('Enter your password').test(
            {
                message: 'Password do not match',
                test: (value) => value === confirmPassword
            }
        ),
        confirmPassword: Yup.string().required('Re-enter your password').test(
            {
                message: 'Password do not match',
                test: (value) => value === password
            }
        )
    })
})


export const getHelpValidation =  Yup.object({
        fullName: Yup.string()
          .trim()
          .required('Enter your full name'),
        email: Yup.string()
          .trim()
          .email('Enter a valid email')
          .required('Enter a valid email'),
        phone: Yup.string()
          .trim()
          .required('Enter your phone number')
          .min(4, "Password must be greater than 3 characters")
          ,
          message: Yup.string().required('Enter your message').min(10, "Password must be greater than 9 characters").trim()
       
    })