type Iprops<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};
type TextProps<E extends React.ElementType> = Iprops<E> &
  Omit<React.ComponentProps<E>, keyof Iprops<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with=${size}-${color}`}>{children}</Component>
  );
};
