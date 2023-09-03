import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type Iprops = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: Iprops) => {
  if (isLoggedIn) return <Component name="Shreeyansh" />;
  else return <Login />;
};
