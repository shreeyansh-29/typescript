import  { Component } from 'react'

type Iprops = {
    message: string
}

type CounterState = {
    count: number
}


export class Counter extends Component<Iprops, CounterState> {
    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}

export default Counter
