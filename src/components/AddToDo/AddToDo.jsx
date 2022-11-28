import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
//import * as dayjs from './dayjs';
import "./AddToDo.css";

export function AddToDo() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        date,
        file,
        completed: false,
      });
      setTitle("");
    };
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Enter todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="file" 
          value={file}
          onChange={(e) => setFile(e.target.value)}
          />
          <input type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className="btn_container">
          <button>Add</button>
        </div>
      </form>
    </>
  );
}
