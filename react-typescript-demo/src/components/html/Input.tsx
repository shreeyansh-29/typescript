type Iprops = React.ComponentProps<"input">;

export const CustomInput = (props: Iprops) => {
  return <input {...props} />;
};
