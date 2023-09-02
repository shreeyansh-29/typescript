import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Shreeyansh",
      email: "email@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  
  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
      <div>User name is {userContext?.user?.name}</div>
    </div>
  );
};

export default User;
