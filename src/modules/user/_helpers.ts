import { TaskCardsTypes } from "./_models";

export const getCardInformation = (list: TaskCardsTypes) => [
  { title: "Task Name:", info: list.name },
  { title: "Task Description:", info: list.description },
  { title: "Assign", info: list.assign.label },
  { title: "Date Created", info: list.createdAt },
];
