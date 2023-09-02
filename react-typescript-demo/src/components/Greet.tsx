type Iprops = {
  name: string;
  messageCount?: number;
  isloggedIn: boolean;
};

const Greet = (props: Iprops) => {
  return (
    <div>
      <h2>
        {props.isloggedIn
          ? ` Welcome ${props.name}!, you have ${props.messageCount} unread messages.`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
