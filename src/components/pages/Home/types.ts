import { FormikProps, FormikValues } from "formik";

export enum ECharterType {
    air = 'air',
    land = 'land',
    sea = 'sea'
}

export type FormikType = FormikProps<FormikValues>