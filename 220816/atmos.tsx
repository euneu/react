import { atom } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDostate = atom<IToDo[]>({
  key: "ToDos",
  default: [],
});
