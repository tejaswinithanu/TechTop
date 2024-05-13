import {Component} from 'react'

import './index.css'

class TestPage extends Component {
  state = {questionsList: []}

  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
  }

  render() {
    return (
      <div className="test-container-bg">
        <div className="question-container">
          <h1>Question 1</h1>
          <p>What is this?</p>
        </div>
      </div>
    )
  }
}

export default TestPage
