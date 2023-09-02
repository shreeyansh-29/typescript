type Iprops = {
  status: "loading" | "success" | "error";
};

const Status = (props: Iprops) => {
  let message;
  if (props.status === "loading") message = "Loading...";
  else if (props.status === "success") message = "Data fetched successfully";
  else message = "Error fetching data";
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Status;
