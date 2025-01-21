import { FormikState } from "formik";

export const getError = <T>(formik: FormikState<T>, field: keyof T) => {
  if (formik.errors[field] && formik.touched[field])
    return formik.errors[field] as string;
  return "";
};
