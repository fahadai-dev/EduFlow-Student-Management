import { useState } from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Tanvir Ahmed", roll: "101", course: "React" },
  ]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  const addStudent = (e) => {
    e.preventDefault();
    if (!name || !roll) return alert("Fill all fields");
    setStudents([
      ...students,
      { id: Date.now(), name, roll, course: "Web Dev" },
    ]);
    setName("");
    setRoll("");
  };

  return (
    <div className={styles.mainContent}>
      <div className={styles.card}>
        <p style={{ margin: 0, color: "#64748b" }}>Total Students</p>
        <h2 style={{ margin: 0 }}>{students.length}</h2>
      </div>

      <div className={styles.formContainer}>
        <h4>Add New Student</h4>
        <form onSubmit={addStudent}>
          <input
            className={styles.input}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Roll"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
          <button className={styles.btn} type="submit">
            Add Student
          </button>
        </form>
      </div>

      <table className={styles.table}>
        <thead>
          <tr style={{ backgroundColor: "#f1f5f9" }}>
            <th>Name</th>
            <th>Roll</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.course}</td>
              <td>
                <button
                  onClick={() =>
                    setStudents(students.filter((x) => x.id !== s.id))
                  }
                  style={{
                    color: "red",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Dashboard;
