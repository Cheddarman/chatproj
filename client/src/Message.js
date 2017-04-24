import React, { Component } from 'react'

import { addMessage } from './api/messaging'
import {connect} from 'react-redux'
import moment from 'moment'

class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {  
    e.preventDefault()
    addMessage({
      message: this.state.message,
      timestamp: moment(new Date()).format('h:mm:ss a')
    })
    this.setState({
      message:''
    })
  }
 

  render() {

    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="message" placeholder="Send a message..." value={this.state.message} />
          <button type="submit">Send</button>
        </form>
        <div id="messages">
          <ul>
            {this.props.messages.map((message, i)=>(
              <li key={'message' + i}>{message.timestamp + ' - ' + message.message}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(Message)