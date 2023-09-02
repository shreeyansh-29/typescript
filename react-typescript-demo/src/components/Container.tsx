type Iprops = {
    styles: React.CSSProperties
}

const Container = (props: Iprops) => {
  return (
    <div style={props.styles}>
      Text content goes here
    </div>
  )
}

export default Container
