import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://localhost:3001')

export function saveName(name) {
	socket.emit('saveName', name)
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
socket.on('newUser', function(name){
	store.dispatch({
		type: 'SAVE_USERNAME',
		username: name
	})
})