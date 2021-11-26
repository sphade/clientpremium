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
          .required('Enter your phone number'),
          name: Yup.string()
        .trim()
       
        .required('Enter your name'),
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
 
export const loginValidation = Yup.object({
        email: Yup.string()
          .trim()
          .email('Enter a valid email')
          .required('Enter a valid email'),
       
        password: Yup.string().required('Enter your password')
 
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