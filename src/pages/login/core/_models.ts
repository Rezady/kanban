import * as Yup from "yup";
export interface InitialLoginTypes {
  username: string;
  password: string;
}

export const InitialLogin = {
  username: "",
  password: "",
};

export const LoginValidation = Yup.object().shape({
  username: Yup.string()
    .min(3, "*minimum 3 letters")
    .required("*must input username"),
  password: Yup.string().required("*must input username"),
});
