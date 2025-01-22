import { useFormik } from "formik";
import Input from "../../components/Input";
import { CreateTaskValidation, InitialCreateTasks } from "./core/_models";
import Dropdown from "../../components/Dropdown";
import { RoleList, statusTasks, TasksTypes } from "../../modules/user/_models";
import Button from "../../components/Button";
import useTask from "../../store/useTask";
import { AllTasksTypes } from "../../store/core/_models";
import { useLocation, useNavigate } from "react-router-dom";
import { getError } from "../../modules/form/_helpers";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const CreateTasks = () => {
  const { setTasks, tasks, editTask } = useTask();
  const { state } = useLocation();
  const navigate = useNavigate();
  const formik = useFormik<TasksTypes>({
    initialValues: InitialCreateTasks(state),
    validationSchema: CreateTaskValidation,
    onSubmit: (values) => {
      for (const assign of values.assign) {
        // condition edit invoice
        if (state) {
          const listTask = [
            ...tasks[state.status.value as keyof AllTasksTypes],
          ];
          // condition user change status
          if (state.status.value !== values?.status?.value) {
            const newTask = listTask.filter((each) => each.id !== values?.id);
            editTask({
              ...tasks,
              [state.status.value]: newTask,
              [values?.status?.value as string]: [
                ...tasks[values?.status?.value as keyof AllTasksTypes],
                { ...values, assign, createdAt: state.createdAt },
              ],
            });
          } else {
            const newTask = listTask.map((task) =>
              task.id === values?.id
                ? { ...values, assign, createdAt: state.createdAt }
                : task
            );
            editTask({ ...tasks, [values.status?.value as string]: newTask });
          }
        }
        // condition on create page
        else {
          setTasks(
            {
              ...values,
              id: `${values?.name}-${assign.value}-${
                tasks[values?.status?.value as keyof AllTasksTypes].length + 1
              }`,
              assign,
              createdAt: dayjs().format("DD MMMM YYYY"),
            },
            values.status?.value as keyof AllTasksTypes
          );
        }
      }
      toast.success(`successfully ${state ? "edit" : "create"} task`, {
        position: "bottom-center",
      });
      navigate("/");
    },
  });
  return (
    <div className="flex flex-col gap-4 items-center">
      <h5 className="text-3xl text-red-600 font-bold text-center">
        {state ? "Edit Task" : "Create Task"}
      </h5>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center gap-6 w-3/6"
      >
        {/* <div > */}
        <Input
          label="Name"
          error={getError<TasksTypes>(formik, "name")}
          placeholder="Name"
          {...formik.getFieldProps("name")}
        />
        <Input
          placeholder="Description"
          label="Description"
          {...formik.getFieldProps("description")}
        />
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
        <Button
          title={`${state ? "Edit" : "Create"} Task`}
          type="submit"
          size="full"
        />
        {/* </div> */}
      </form>
    </div>
  );
};

export default CreateTasks;
