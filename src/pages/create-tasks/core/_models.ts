import * as Yup from "yup";
import { TaskCardsTypes } from "../../../modules/user/_models";

export const InitialCreateTasks = (state?: TaskCardsTypes) => ({
  id: state?.id ?? "",
  name: state?.name ?? "",
  description: state?.description ?? "",
  assign: state?.assign ? [state?.assign] : [],
  status: state?.status ?? undefined,
});

export const CreateTaskValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum letters is 3")
    .required("input name required"),
});
