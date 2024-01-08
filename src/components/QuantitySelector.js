import React, { Component } from 'react'

export class QuantitySelector extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  decrement(){
    this.setState({
      count: this.state.count-1
    },
    () => {
      console.log('Callback value',this.state.count)
    })
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    },
      () => {
      console.log('Callback value', this.state.count)
    })
  }

  render() {
    return (
      <>
      <div className='QuantitySelector'>
        <button onClick={() => this.decrement()} >-</button>
        <p>{this.state.count}</p>
          <button onClick={() => this.increment()} >+</button>
      </div>
      </>
    )
  }
}

export default QuantitySelector