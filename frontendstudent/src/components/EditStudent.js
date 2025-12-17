import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(res => {
        const s = res.data.find(st => st._id === id);
        setName(s.name);
        setEmail(s.email);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/students/${id}`, { name, email });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Student</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button>Update</button>
    </form>
  );
}

export default EditStudent;
