/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import useCustomSnackbar from "../../../hooks/useSnackbar";
import {
  CustomPhoneInput,
  PrimaryButton,
  PrimaryInput,
} from "../../../reusables";
import { getHelpApi } from "../../../routes/api";
import { getHelpValidation } from "../../../validations";
import { helpInfo } from "./constant";

const GetHelp = () => {
  const queryClient = useQueryClient();
  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const { mutate, isLoading } = useMutation(getHelpApi, {
    onSuccess: async (data) => {
      succesSnackbar(data.message || "Success");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      errorSnackbar(error?.response?.data?.error || "Error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await mutate({ ...values, phone: `+${values.phone}` });

      resetForm();
    },
    validationSchema: getHelpValidation,
  });

  const { handleSubmit } = formik;

  return (
    <div className="help">
      <div className="center">
        <div className="help__left help__card">
          {helpInfo().map(({ header, content, hasDivider }) => (
            <div className="help__left--info" key={header}>
              <h4>{header}</h4>
              {content.map(
                ({
                  text,
                  icon: Icon,
                  isEmail = false,
                }: {
                  text?: string;
                  icon?: any;
                  isEmail?: boolean;
                }) => (
                  <div key={text}>
                    <div className="help__left--infoCard">
                      {Icon && <Icon />}
                      {isEmail ? (
                        <a
                          href={`mailto:${text}`}
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {text}
                        </a>
                      ) : (
                        <a>{text}</a>
                      )}
                    </div>
                  </div>
                )
              )}
              {hasDivider && <Divider className="help__left--divider" />}
            </div>
          ))}
        </div>
        <div className="help__right help__card">
          <div className="help__right--header card">
            <h3 className="h3">HOW CAN WE HELP?</h3>
            <h5>We are always eager to attend to your need.</h5>
            <p>
              Fill the below contact form and we make sure to get back to you as
              soon as possible.
            </p>
          </div>
          <form className="help__right--form" onSubmit={handleSubmit}>
            <PrimaryInput
              placeholder="Full Name"
              name="fullName"
              label="Full Name"
              formik={formik}
            />
            <PrimaryInput
              placeholder="Email"
              name="email"
              label="Email"
              formik={formik}
            />
            <CustomPhoneInput name="phone" formik={formik} />
            <PrimaryInput
              placeholder="Message"
              name="message"
              label="Message"
              multiline
              rows={4}
              formik={formik}
            />
            <PrimaryButton
              label="Submit"
              classes="!mt-10"
              isLoading={isLoading}
              onClick={handleSubmit}
              style={{ backgroundColor: "black" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
