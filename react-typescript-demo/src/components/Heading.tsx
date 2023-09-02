type Iprops = {
  children: string
}

const Heading = (props: Iprops) => {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  )
}

export default Heading
