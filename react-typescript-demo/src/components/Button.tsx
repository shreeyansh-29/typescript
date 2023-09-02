type Iprops = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button = (props: Iprops) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};

export default Button;
