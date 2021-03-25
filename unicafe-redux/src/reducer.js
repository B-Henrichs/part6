const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  console.log(state)
  const test = {...state, good: +1}
  console.log('spread state',test)
  
  console.log('plus 1',test)
  console.log(state)
  switch (action.type) {
    case 'GOOD':
      const incrementGood = {...state, good:state.good +1}
      return incrementGood
    case 'OK':
      const incrementOk = {...state, ok:state.ok +1}
      return incrementOk
    case 'BAD':
      const incrementBad = {...state, bad:state.bad +1}
      return incrementBad
    case 'ZERO':
      return {...initialState}
    default: return state
  }
  
}

export default counterReducer