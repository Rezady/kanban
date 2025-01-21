import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { statusTasks, TaskCardsTypes } from "../../modules/user/_models";
import { AllTasksTypes } from "../../store/core/_models";
import useTask from "../../store/useTask";

const ListTasks = () => {
  const { tasks } = useTask();
  const navigate = useNavigate();
  const handleClickCard = (detail: TaskCardsTypes) => {
    navigate("/detail", { state: detail });
  };
  return (
    <div className="flex gap-10 ">
      {statusTasks.map((status, key) => (
        <div className="flex flex-col gap-3 items-center" key={key}>
          <p>{status.label}</p>
          <Card border className="p-6 min-h-full flex flex-col gap-4">
            {tasks[status.value as keyof AllTasksTypes].map(
              (list, keyChild) => (
                <Card
                  border
                  key={keyChild}
                  onClick={() => handleClickCard(list)}
                  className="cursor-pointer"
                >
                  <p>{list.name}</p>
                  <p>{list.description}</p>
                  <p>{list.assign.label}</p>
                  <p>{list.createdAt}</p>
                </Card>
              )
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ListTasks;
