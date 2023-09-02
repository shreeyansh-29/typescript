import { useState } from "react";

type Iprops = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<Iprops>({} as Iprops);
  const handleLogin = () => {
    setUser({ name: "Shreeyansh", email: "email@gmail.com" });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email id {user.email}</div>
    </div>
  );
};

export default User;
