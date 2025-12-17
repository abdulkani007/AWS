import { useState } from "react";
import { addStudent } from "../api";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent({ name, email });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button>Add</button>
    </form>
  );
}

export default AddStudent;
