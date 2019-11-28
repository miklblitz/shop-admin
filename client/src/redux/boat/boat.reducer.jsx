const INITIAL_STATE= {
  boats: [],
  editBoat: {}
}

const boatRuducer = (state=INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_BOAT':
      return {
        ...state,
        boats: action.payload
      }
    case 'EDIT_BOAT':
      return {
        ...state,
        editBoat: action.payload
      }
    case 'RESET':
      return {
        ...state,
        editBoat: {}
      }
    default:
      return state;
  }
}

export default boatRuducer;