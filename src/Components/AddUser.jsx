import axios from "axios";
import { useState } from "react";

const AddUser = ({ refresh }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const submit = async () => {
    await axios.post("http://localhost:5000/api/users", user);
    setUser({ name: "", email: "", age: "" });
    refresh();
  };

  return (
    <div className="card mb-6">
      <h2 className="text-xl mb-4">➕ Add User</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          className="input"
          placeholder="Name"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
        />
        <input
          className="input"
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />
        <input
          className="input"
          placeholder="Age"
          value={user.age}
          onChange={(e) =>
            setUser({ ...user, age: e.target.value })
          }
        />
      </div>

      <button onClick={submit} className="btn mt-4">
        Add
      </button>
    </div>
  );
};

export default AddUser;
