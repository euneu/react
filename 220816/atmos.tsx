import { atom, selector } from "recoil";

//따로 지정하지 않으면 숫자로 지정됨
// "TO_DO" -> 0 이렇게
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
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
