import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface Ifrom {
  ToDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDostate = atom<IToDo[]>({
  key: "ToDos",
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDostate);
  // const value = useRecoilValue(toDostate);
  // const modFn = useSetRecoilState(toDostate);
  // 하나로 사용 가능
  const { register, handleSubmit, setValue } = useForm<Ifrom>();
  const onSubmit = ({ ToDo }: Ifrom) => {
    setToDos((oldToDos) => [
      { text: ToDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("ToDo", "");
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("ToDo", { required: "Plese Write to do" })}
          placeholder="Wirte a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

//recoil 사용하여 todo 저장하고 출력함
// todo는 내용, id, 카테고리를 가짐
// useRecoilState는 useRecoilValue(값을 불러옴) useSetRecoilState(값을 변경하는 함수)를 한번에 사용가능함

export default ToDoList;
