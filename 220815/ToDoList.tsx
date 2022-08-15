import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Wirte a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onVaild = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  console.log(watch());
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onVaild)}
      >
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", {
            required: true,
            minLength: { value: 10, message: "username이 너무 짧습니다" },
          })}
          placeholder="Username"
        />
        <input
          {...register("password", {
            required: "Password is required",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
