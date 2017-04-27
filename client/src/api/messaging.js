import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://localhost:3001')
// const socket = io.connect('http://10.68.0.188:3001')

export function saveName(name) {
	store.dispatch({
		type: 'SAVE_USERNAME',
		username: name
	})
}

export function addMessage(message) {
  socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
	store.dispatch({
    type: 'ADD_MESSAGE',
    message
  })
})