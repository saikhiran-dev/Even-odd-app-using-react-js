import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  generateNumber = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const evenOrOdd = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="counter">Count {count}</h1>
          <p className="even-odd">Count is {evenOrOdd}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.generateNumber}
          >
            Increment
          </button>
          <p className="description">
            *Increase By Random Number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
