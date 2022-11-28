import React,{useState} from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import './ToDo.css'

export function Todo({ todo, toggleComplete, handleDelete, handleEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newFile, setNewFile] = useState(todo.file);
  const [newDate, setNewDate] = useState(todo.date);

  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
      />
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="file"
        value={todo.file === "" ? newFile : todo.file}
        onChange={handleChange}
      />
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="date"
        value={todo.date === "" ? newDate : todo.date}
        onChange={handleChange}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
