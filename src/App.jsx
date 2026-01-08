import { useState } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );
  const [showRegister, setShowRegister] = useState(false);

  if (!loggedIn) {
    return showRegister ? (
      <Register
        goToLogin={() => setShowRegister(false)}
      />
    ) : (
      <Login
        onLogin={() => setLoggedIn(true)}
        goToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl mb-6">🚀 MERN CRUD (JWT)</h1>

      <button
        className="btn-red mb-4"
        onClick={() => {
          localStorage.removeItem("token");
          setLoggedIn(false);
        }}
      >
        Logout
      </button>

      <AddUser refresh={() => window.location.reload()} />
      <UserList />
    </div>
  );
}

export default App;
