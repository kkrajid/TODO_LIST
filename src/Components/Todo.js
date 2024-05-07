import React, { useState } from "react";
import "./Todo.css";
function Todo() {
  const [input, setinput] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const addTodo = () => {
    if(input.length !==0){
        setTodoArray([
            ...todoArray,
            { title: input, id: Date.now(), status: false },
          ]);
          setinput("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const deletVal = (id) => {
    setTodoArray(todoArray.filter((item) => item.id !== id));
  };
  const markbutton = (id) => {
    const updatedTodoArray = todoArray.map((item) =>
      item.id === id ? { ...item, status: true } : item
    );

    setTodoArray(updatedTodoArray);
  };


  return (
    <div className="container">
      <h2>TODO APP</h2>
      <form action="" className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter Your Todo"
          className="form-control"
          onChange={(e) => setinput(e.target.value)}
        />
        <button onClick={addTodo}>ADD</button>
      </form>
      <input style={{backgroundColor:"green"}} onClick={() =>setTodoArray([])}  type="button" value="✓" />
      <div className="list">
        <ul>
          {todoArray.map((obj) => (
            <li className="form-control" key={obj.id}>
              {obj.status ? (
                <p>
                  <s>{obj.title}</s>
                </p>
              ) : (
                <p>{obj.title}</p>
              )}
              {/* -----------------------deletetion button---------------------------------------- */}
              <input style={{backgroundColor:"red"}} onClick={() => deletVal(obj.id)} type="button" value="X" />
              {/* -----------------------deletetion button---------------------------------------- */}
              
              {/* -------------------------completetd---------------------------------------------- */}
              <input style={{backgroundColor:"green"}} onClick={() => markbutton(obj.id)}  type="button" value="✓" />
              {/* -------------------------completetd---------------------------------------------- */}
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
