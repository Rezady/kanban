import { useFormik } from "formik";
import Input from "../../components/Input";
import { CreateTaskValidation, InitialCreateTasks } from "./core/_models";
import Dropdown from "../../components/Dropdown";
import { RoleList, statusTasks, TasksTypes } from "../../modules/user/_models";
import Button from "../../components/Button";
import useTask from "../../store/useTask";
import { AllTasksTypes } from "../../store/core/_models";
import { useNavigate } from "react-router-dom";
import { getError } from "../../modules/form/_helpers";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const CreateTasks = () => {
  const { setTasks, tasks } = useTask();
  const navigate = useNavigate();
  const formik = useFormik<TasksTypes>({
    initialValues: InitialCreateTasks,
    validationSchema: CreateTaskValidation,
    onSubmit: (values) => {
      for (const assign of values.assign) {
        setTasks(
          {
            ...values,
            id: `${values?.status?.value as string}-${assign.value}-${
              tasks[values?.status?.value as keyof AllTasksTypes].length + 1
            }`,
            assign: assign,
            createdAt: dayjs().format("DD MMMM YYYY"),
          },
          values.status?.value as keyof AllTasksTypes
        );
      }
      toast.success("successfully create task", {
        position: "bottom-center",
      });
      navigate("/");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-6 w-3/6 ">
        <Input
          label="Name"
          error={getError<TasksTypes>(formik, "name")}
          {...formik.getFieldProps("name")}
        />
        <Input label="Description" {...formik.getFieldProps("description")} />
        <Dropdown
          label="Assign"
          placeholder="Assign"
          data={RoleList}
          selected={formik.values.assign}
          onSelect={(value) =>
            formik.setValues({
              ...formik.values,
              assign: [...formik.values.assign, value],
            })
          }
          multipleValue={true}
        />
        <Dropdown
          label="Status"
          placeholder="Status"
          data={statusTasks}
          selected={formik.values.status}
          onSelect={(value) =>
            formik.setValues({
              ...formik.values,
              status: value,
            })
          }
        />
        <Button title="Create Task" type="submit" />
      </div>
    </form>
  );
};

export default CreateTasks;
