const initialState = {
    messages: [],
    username: ''
}

export default function messageReducer(state=initialState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
          return {...state, messages: [...state.messages, action.message]}
        case 'SAVE_USERNAME':
        	return {...state, username: action.username}
        default:
          return state
    }
}