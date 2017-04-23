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
    e.preventDefault()
    saveName({
    
    })
    this.setState({
      message:''
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} placeholder='Enter UserName' name='username' value={this.state.name} />
      </div>
    )
  }
}

const mapStateToProps = function(appState) {
  return {
    names: appState.names
  }
}

export default connect(mapStateToProps)(UserName)