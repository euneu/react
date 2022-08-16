import React from "react";
import { constSelector, useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDostate } from "../atmos";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    //option의 value가 categortie 타입과 같다는 걸 인지 하지 못 해서 as any
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form>
        <select onInput={onInput}>
          <option value="TO_DO">TO DO</option>
          <option value="DOING">DOING</option>
          <option value="DONE">DONE</option>
        </select>
      </form>
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
