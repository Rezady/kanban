import { TaskCardsTypes } from "../../modules/user/_models";

export interface AuthTypes {
  user: string;
  setUser: (user: string) => void;
}

export type AllTasksTypes = Record<"todo" | "doing" | "done", TaskCardsTypes[]>;

export interface TaskStoreTypes {
  tasks: AllTasksTypes;
  setTasks: (value: TaskCardsTypes, key: keyof AllTasksTypes) => void;
  deleteTask: (value: TaskCardsTypes[], key: keyof AllTasksTypes) => void;
  editTask: (value: AllTasksTypes) => void;
}
