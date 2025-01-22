import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { useState } from "react";
import Modal from "../../components/Modal";
import IconDelete from "../../components/icons/IconDelete";
import useTask from "../../store/useTask";
import { AllTasksTypes } from "../../store/core/_models";
import { toast } from "react-toastify";

const DetailTasks = () => {
  const { state } = useLocation();
  const { tasks, deleteTask } = useTask();
  const navigate = useNavigate();
  const [isConfirmDelete, setIsConfirmDelete] = useState(false);
  const handleDelete = () => {
    const listTask = [...tasks[state.status.value as keyof AllTasksTypes]];
    const taskFiltered = listTask.filter((task) => task.id !== state.id);
    deleteTask(taskFiltered, state.status.value);
    setIsConfirmDelete(false);
    toast.success("successfully delete task", {
      position: "top-right",
    });
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-6">
      <Card border>
        <p>{state.name}</p>
        <p>{state.description}</p>
        <p>{state.assign.label}</p>
        <p>{state.createdAt}</p>
      </Card>
      <div className="flex justify-between gap-10">
        <Button
          title={"Delete Task"}
          background="red"
          size="full"
          onClick={() => setIsConfirmDelete(true)}
        />
        <Button
          title="Edit Task"
          size="full"
          background="green"
          onClick={() => navigate("/edit", { state })}
        />
      </div>
      <Modal
        isOpen={isConfirmDelete}
        onClose={() => setIsConfirmDelete(false)}
        onProceed={handleDelete}
      >
        <IconDelete />
        <p>Are you sure delete this task ?</p>
      </Modal>
    </div>
  );
};

export default DetailTasks;
