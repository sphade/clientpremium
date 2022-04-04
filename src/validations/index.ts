import * as Yup from "yup";
import { TCharter } from "./types";

export const provideDetailsValidation = () =>
  Yup.lazy((formValues) => {
    const password = formValues["password"];
    const confirmPassword = formValues["confirmPassword"];

    return Yup.object({
      email: Yup.string()
        .trim()
        .email("Enter a valid email")
        .required("Enter a valid email"),
      phoneNumber: Yup.string()
        .trim()
        .required("Enter your phone number")
        .min(10, "Phone number must be greater than 10 "),
      name: Yup.string()
        .trim()

        .required("Enter your name"),
      password: Yup.string()
        .min(4, "Password must be greater than 3 characters")
        .required("Enter your password")
        .test({
          message: "Password do not match",
          test: (value) => value === confirmPassword,
        }),
      confirmPassword: Yup.string()
        .required("Re-enter your password")
        .test({
          message: "Password do not match",
          test: (value) => value === password,
        }),
    });
  });

export const loginValidation = Yup.object({
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Enter a valid email"),

  password: Yup.string()
    .required("Enter your password")
    .min(4, "Password must be greater than 3 characters"),
});
export const changePasswordValidation = () =>
  Yup.lazy((formValues) => {
    const newPassword = formValues["newPassword"];
    const confirmPassword = formValues["confirmPassword"];

    return Yup.object({
      oldPassword: Yup.string()
        .required("Enter your old password")
        .min(4, "Password must be greater than 3 characters"),
      newPassword: Yup.string()
        .min(4, "Password must be greater than 3 characters")
        .required("Enter your new password")
        .test({
          message: "Password do not match",
          test: (value) => value === confirmPassword,
        }),
      confirmPassword: Yup.string()
        .min(4, "Password must be greater than 3 characters")
        .required("Re-enter your new password")
        .test({
          message: "Password do not match",
          test: (value) => value === newPassword,
        }),
    });
  });

export const changePhoneValidation = Yup.object({
  phone: Yup.string().trim().required("Enter your phone number"),
  name: Yup.string().trim(),
});
export const fundWalletValidation = Yup.object({
  amount: Yup.number().required("Enter a valid amount"),
});

export const forgotPasswordValidaiton = Yup.object({
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Enter a valid email"),
});

export const resetPasswordValidation = () =>
  Yup.lazy((formValues) => {
    const password = formValues["password"];
    const confirmPassword = formValues["confirmPassword"];

    return Yup.object({
      password: Yup.string()
        .required("Enter your password")
        .test({
          message: "Password do not match",
          test: (value) => value === confirmPassword,
        }),
      confirmPassword: Yup.string()
        .required("Re-enter your password")
        .test({
          message: "Password do not match",
          test: (value) => value === password,
        }),
    });
  });

export const getHelpValidation = Yup.object({
  fullName: Yup.string().trim().required("Enter your full name"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Enter a valid email"),
  phone: Yup.string()
    .trim()
    .required("Enter your phone number")
    .min(4, "Password must be greater than 3 characters"),
  message: Yup.string()
    .required("Enter your message")
    .min(10, "Password must be greater than 9 characters")
    .trim(),
});
export const withdrawalValidation = Yup.object({
  amount: Yup.number().required("Enter a valid amount"),
  accountName: Yup.string().trim().required("Enter your account name"),
  narration: Yup.string().trim().required("Enter narration"),
  bankCode: Yup.number().required("Pick a bank"),
  bankAccountNumber: Yup.number().required("Enter your account number"),
});

export const charterValidation = ({ type }: { type: TCharter }) =>
  Yup.lazy((formValues) => {
    const tripType = formValues["tripType"];

    const defaultMessage = "This field is required";

    const validations = {
      air: Yup.object({
        pickup: Yup.string().trim().required(defaultMessage),
        destination: Yup.string().trim().required(defaultMessage),
        departureDate: Yup.string().trim().required(defaultMessage),
        returnDate: Yup.string().trim().required(defaultMessage),
        passenger: Yup.number().required(defaultMessage),
        tripType: Yup.string().trim().required(defaultMessage),
        transitType: Yup.string().trim().required(defaultMessage),
      }),
      sea: Yup.object({
        pickup: Yup.string().trim().required(defaultMessage),
        ...(tripType === "boat trip"
          ? { destination: Yup.string().trim().required(defaultMessage) }
          : { duration: Yup.number().required(defaultMessage) }),
        departureDate: Yup.string().trim().required(defaultMessage),
        departureTime: Yup.string().trim().required(defaultMessage),
        passenger: Yup.number().required(defaultMessage),
        tripType: Yup.string().trim().required(defaultMessage),
        transitType: Yup.string().trim().required(defaultMessage),
      }),
      land: Yup.object({
        pickup: Yup.string().trim().required(defaultMessage),
        duration: Yup.number().required(defaultMessage),
        departureDate: Yup.string().trim().required(defaultMessage),
        departureTime: Yup.string().trim().required(defaultMessage),
        passenger: Yup.number().required(defaultMessage),
        transitType: Yup.string().trim().required(defaultMessage),
      }),
    };
    return validations[type];
  });

export const getJetPoolingValidation = Yup.object({});
