const initialState = {
    messages: [],
    names: []
}

export default function messageReducer(state=initialState, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {...state, messages: [...state.messages, action.message]}
    case 'SAVE_USERNAME':
    	return {...state, names: [...state.names, action.name]}
      default:
          return state
  }
}