type Iprops = {
  children: React.ReactNode
}

const Oscar = (props: Iprops) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Oscar
