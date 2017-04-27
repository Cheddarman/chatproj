import React, {Component} from 'react'
import { saveName } from './api/messaging'


class UserName extends Component {
  constructor() {
    super()
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
    e.preventDefault()
    saveName(this.state.username)
    this.props.history.push('/Message')
  }

  render() {
    return (
      <div className='login'>
	      <form onSubmit={this.handleSubmit}>
	        <input onChange={this.handleChange} placeholder='Enter UserName' name='username' value={this.state.username} />
	      </form>
      </div>
    )
  }
}

export default UserName

// io.on('connection', function(socket) {
// socket.on('send-nickname', function(nickname) {
//     socket.nickname = nickname;
//     users.push(socket.nickname);
//     console.log(users);
// });