import React, {  FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface MyFormValues {
  email: string;
}
const NewsLetterInput: FC = () => {
  const initialValues: MyFormValues = { email: "" };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid Email Address")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      <>
        <Form className="subscribe--input">
          <Field name="email" type="text" placeholder="Email Address" />
          <div className="subscribe--button">
            <button type="submit"> Subscribe</button>
            <Form />
          </div>
        </Form>
        <ErrorMessage name="email" className="!text-red-500 !p-2">
          {(err) => <h1 className="!text-red-500 p-2">{err}</h1>}
        </ErrorMessage>
      </>
    </Formik>
  );
};

export default NewsLetterInput;
