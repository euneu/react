import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDostate } from "../atmos";

interface Ifrom {
  ToDo: string;
}

//option의 카테고리에 맞게 바로 todo가 저장됨
// doing에 두고 추가하면 doing으로 바로 저장되는
function CreateToDo() {
  const setToDos = useSetRecoilState(toDostate);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<Ifrom>();
  const onSubmit = ({ ToDo }: Ifrom) => {
    setToDos((oldToDos) => [
      { text: ToDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("ToDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("ToDo", { required: "Plese Write to do" })}
        placeholder="Wirte a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
