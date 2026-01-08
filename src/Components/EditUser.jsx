import axios from "axios";
import { useState } from "react";

const EditUser = ({ user, refresh }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user.name);

  const update = async () => {
    await axios.put(
      `http://localhost:5000/api/users/${user._id}`,
      { ...user, name }
    );
    setOpen(false);
    refresh();
  };

  if (!open) {
    return (
      <button
        className="btn-outline"
        onClick={() => setOpen(true)}
      >
        Edit
      </button>
    );
  }

  return (
    <div className="flex gap-2">
      <input
        className="input w-32"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" onClick={update}>
        Save
      </button>
    </div>
  );
};

export default EditUser; // ✅ VERY IMPORTANT
