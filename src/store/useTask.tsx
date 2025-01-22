import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AllTasksTypes, TaskStoreTypes } from "./core/_models";
import { TaskCardsTypes } from "../modules/user/_models";

export const useTask = create<TaskStoreTypes>()(
  devtools(
    persist(
      (set) => ({
        tasks: {
          todo: [],
          doing: [],
          done: [],
        },
        setTasks: (value: TaskCardsTypes, key: keyof AllTasksTypes) =>
          set((state) => ({
            tasks: { ...state.tasks, [key]: [...state.tasks[key], value] },
          })),
        deleteTask: (value: TaskCardsTypes[], key: keyof AllTasksTypes) =>
          set((state) => ({
            tasks: { ...state.tasks, [key]: value },
          })),
        editTask: (value: AllTasksTypes) => set(() => ({ tasks: value })),
      }),
      { name: "task" }
    )
  )
);

export default useTask;
