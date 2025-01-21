import * as Yup from "yup";

export const InitialCreateTasks = {
  id: "",
  name: "",
  description: "",
  assign: [],
};

export const CreateTaskValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum letters is 3")
    .required("input name required"),
});
