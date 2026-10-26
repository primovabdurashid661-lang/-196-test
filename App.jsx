import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function Header() {
  const { name } = useContext(UserContext);
  return <h2 className="mb-5 rounded bg-gray-200 p-3 text-xl">Header: {name}</h2>;
}

function Profile() {
  const { name, setName } = useContext(UserContext);
  return (
    <div className="rounded border p-4">
      <h2 className="mb-3 text-xl">Profile: {name}</h2>
      <button
        onClick={() => setName("Vali")}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Ismni o'zgartirish
      </button>
    </div>
  );
}

export default function App() {
  const [name, setName] = useState("Ali");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <div className="mx-auto my-12 max-w-xl p-5">
        <h1 className="mb-5 text-3xl font-bold">UserContext vazifasi</h1>
        <Header />
        <Profile />
      </div>
    </UserContext.Provider>
  );
}
