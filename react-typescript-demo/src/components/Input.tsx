type Iprops = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: Iprops)  => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange}/>
    </div>
  )
}

export default Input
