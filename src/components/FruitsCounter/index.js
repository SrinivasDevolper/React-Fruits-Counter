import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count1: 0, count2: 0}
  onIncrement2 = () => {
    this.setState(prevState => {
      return {count1: prevState.count1 + 1, count2: prevState.count2}
    })
  }
  onIncrement1 = () => {
    this.setState(prevState => {
      return {count2: prevState.count2 + 1, count1: prevState.count1}
    })
  }
  render() {
    const {count1} = this.state
    const {count2} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>
          <div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" onClick={this.onIncrement2}>
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" onClick={this.onIncrement1}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
