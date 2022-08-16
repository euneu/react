import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDostate } from "../atmos";

//TODO의 카테고리 수정하기
// 1. 타켓의 경로를 찾아야 하니 id를 찾아라 인덱스 찾기
// 2. new to do 만들기 (카테고리를 수정한)
// 3. 찾은 타켓의 경로(인덱스) to do를 new to do로 바꿔줌
//3-1. 타켓 위치의 앞과 뒤로 자른 후 앞배열 + new to do + 뒷배열
// [...food.slice(0,target), "감", ...food.slice(target+1)]

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDostate);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      //findeIndex 조건에 만족하는 to do의 인덱스를 찾아줌
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id == id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category != "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category != "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category != "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
