type Iprops = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: Iprops) => {
  return <div>{props.name.first} {props.name.last}</div>;
};
