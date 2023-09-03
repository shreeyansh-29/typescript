export type ProfileProps = {
  name: string;
};

function Profile({ name }: ProfileProps) {
  return <div>Private Profile Component, name is {name}</div>;
}

export default Profile;
