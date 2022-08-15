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

interface IFormData {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  email: string;
  password1: string;
  password2: string;
  username: string;
  extraError?: string;
}

//setError 수동으로 오류 설정
//shouldFocus : true 커서가 옮겨짐
// validate : 특정한 값을 포함하면 통과하지 못 하도록 할 수 있음 메세지를 반환할 수도 있음
function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onVaild = (data: IFormData) => {
    if (data.password1 !== data.password2) {
      setError(
        "password2",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    //setError("extraError", { message: "server offline" });
  };
  console.log(errors);
  console.log(watch());
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onVaild)}
      >
        <input
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver주소만 가능합니다",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: true,
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noEunji: (value) =>
                value.includes("eunji") ? "no eunji allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>

        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>

        <input
          {...register("username", {
            required: true,
            minLength: { value: 10, message: "username이 너무 짧습니다" },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>

        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 10, message: "너무 짧습니다" },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <input
          {...register("password2", {
            required: "Password is required",
            minLength: { value: 10, message: "너무 짧습니다" },
          })}
          placeholder="Password2"
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
