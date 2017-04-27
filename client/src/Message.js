import React, { Component } from 'react'
import { addMessage } from './api/messaging'
import {connect} from 'react-redux'
import moment from 'moment'

class Message extends Component {
  constructor() {
    super()
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
      username: this.props.username,
      message: this.state.message,
      timestamp: moment(new Date()).format('h:mm:ss a')
    })
    this.setState({
      message:''
    })
    this.refs.messages.scrollTop = 0
  }

  componentWillMount(){
    console.log(this.props)
    if (!this.props.username) {
      this.props.history.push('/')
    }
  }
  // componentDidUpdate(){
  //   var node = this.getDOMNode()
  //   node.scrollTop = node.scrollHeight
  // }

  render() {
    return (
      <div className='chatBit'>
        <form className='typingBit' onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="message" placeholder="Send a message..." value={this.state.message} />
        </form>
        <div className='mContainer' ref="messages">
          <div className="messages">
            <ul>
              {this.props.messages.map((message, i)=>(
                <li key={'message' + i}>{message.username + ': ' + message.timestamp + ' - ' + message.message}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    username: appState.username,
    messages: appState.messages
  }
}

export default connect(mapStateToProps)(Message)