import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

//selector d어떤 state를 가져다가 다른 state를 만들 수 있다
// atom은 그냥 배열
// seletor은 atom의 output을 변경시킬 수 있다
// state 원본은 건들지 않음!
export const toDostate = atom<IToDo[]>({
  key: "ToDos",
  default: [],
});

//get function이 있어야 atom를 받을 수 있음
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDostate);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
