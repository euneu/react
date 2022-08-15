import { useForm } from "react-hook-form";

interface Ifrom {
  ToDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<Ifrom>();
  const onSubmit = (data: Ifrom) => {
    console.log("add to do", data.ToDo);
    setValue("ToDo", "");
    //submit 하고 나서 input 비워줌
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("ToDo", { required: "Plese Write to do" })}
          placeholder="Wirte a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
