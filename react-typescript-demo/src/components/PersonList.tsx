type Iprops = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: Iprops) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
