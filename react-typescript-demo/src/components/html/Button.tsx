type Iprops = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, children }: Iprops) => {
  return <button className={`class-with-${variant}`}>{children}</button>;
};
