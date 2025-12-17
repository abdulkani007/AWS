import axios from "axios";

const URL = "http://localhost:5000/api/students";

export const getallStudents = () => axios.get(URL);
export const addStudent = (data) => axios.post(URL, data);
export const deleteStudent = (id) => axios.delete(`${URL}/${id}`);
export const updateStudent = (id, data) => axios.put(`${URL}/${id}`, data);
