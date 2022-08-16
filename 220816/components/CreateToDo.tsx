import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDostate } from "../atmos";

interface Ifrom {
  ToDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDostate);
  const { register, handleSubmit, setValue } = useForm<Ifrom>();
  const onSubmit = ({ ToDo }: Ifrom) => {
    setToDos((oldToDos) => [
      { text: ToDo, id: Date.now(), category: "TO_DO" },
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
