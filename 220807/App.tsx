import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  // onChange 함수가 InputElement 에 의해서 실핼 될 것을 앎
  const onChange = (evnet: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = evnet;
    // ES6 문법으로 evnet 안 curentTarget의 value값을 기존 이름 그대로 value라는 변수를 만드는 것임
    // 만약  currentTarget안에서 value, tagName, width, id 이 4개를 가져오고 싶다고 하면
    // const value = event.currentTarget.value;
    // const tagName = event.currentTarget.tagName;
    // const width = event.currentTarget.width;
    // const id = event.currentTarget.id;

    // 이거를 이렇게 바꿔 쓰실수 있다.

    // const {
    // currentTarget: {value, tagName, width, id}
    // } = event;

    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        ></input>
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
