import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { statusTasks, TaskCardsTypes } from "../../modules/user/_models";
import { AllTasksTypes } from "../../store/core/_models";
import useTask from "../../store/useTask";
import { getCardInformation } from "../../modules/user/_helpers";

const ListTasks = () => {
  const { tasks } = useTask();
  const navigate = useNavigate();
  const handleClickCard = (detail: TaskCardsTypes) => {
    navigate("/detail", { state: detail });
  };
  return (
    <>
      <h5 className="text-3xl text-red-600 font-bold mb-6 text-center">
        List Tasks
      </h5>
      <div className="flex gap-10 justify-center">
        {statusTasks.map((status, key) => (
          <div className="flex flex-col gap-3 items-center" key={key}>
            <p className="font-bold text-gray-500 text-xl">{status.label}</p>
            <Card
              border
              className="p-6 min-h-full flex flex-col gap-4 min-w-[250px]"
            >
              {tasks[status.value as keyof AllTasksTypes].map(
                (list, keyChild) => (
                  <Card
                    border
                    key={keyChild}
                    onClick={() => handleClickCard(list)}
                    className="cursor-pointer flex flex-col gap-3"
                  >
                    {getCardInformation(list).map((info, keyInfo) => (
                      <div className="flex flex-col" key={keyInfo}>
                        <p className="text-gray-800 text-sm font-medium">
                          {info.title}
                        </p>
                        <p className="text-gray-600 text-xs">- {info.info}</p>
                      </div>
                    ))}
                  </Card>
                )
              )}
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListTasks;
