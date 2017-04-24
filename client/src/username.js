import React from 'react'
import { saveName } from './api/messaging'
import {connect} from 'react-redux'

class UserName extends React.Component {
  constructor(props) {
    super(props)
  	this.state = {
  		username: ''
  	}
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	handleSubmit = (e) => {
		console.log(this.state.username)
    e.preventDefault()
    saveName(this.state.username)
    this.props.history.push('/Message')
    this.setState({
      username:''
    })
  }

  render() {
    return (
      <div>
      	<div>{this.props.username}</div>
	      <form onSubmit={this.handleSubmit}>
	        <input onChange={this.handleChange} placeholder='Enter UserName' name='username' value={this.state.username} />
	      </form>
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    username: appState.username
  }
}

export default connect(mapStateToProps)(UserName)

// io.on('connection', function(socket) {
// socket.on('send-nickname', function(nickname) {
//     socket.nickname = nickname;
//     users.push(socket.nickname);
//     console.log(users);
// });