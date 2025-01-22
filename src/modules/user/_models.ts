import { FormValue } from "../form/_models";

export const RoleList: FormValue[] = [
  { value: "design", label: "DESIGN" },
  { value: "backend", label: "BACKEND" },
  { value: "frontend", label: "FRONTEND" },
];

export const statusTasks: FormValue[] = [
  { label: "TODO", value: "todo" },
  { label: "DOING", value: "doing" },
  { label: "DONE", value: "done" },
];

export interface TasksTypes {
  id: string;
  name: string;
  description: string;
  assign: FormValue[];
  status?: FormValue;
  createdAt?: string;
}

export interface TaskCardsTypes extends Omit<TasksTypes, "assign"> {
  assign: FormValue;
}
