import defaultState from '../utils/json/defaultState.json'
import { newCards, addCard, resetCards, setResultList, setRotated, setResultOrdered } from './functions'

export const Reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_QUANTITY':
      return { ...state, quantity: action.value, cards: newCards(state, action.value) }
    case 'CHANGE_VISUAL':
      return { ...state, visual: action.value }
    case 'ADD_CARD':
      return { ...state, cards: addCard(state, action.position, action.card) }
    case 'CHANGE_PIVOT':
      return { ...state, pivot: action.card }
    case 'RESET_CARDS':
      return resetCards(state)
    case 'SET_DECK':
      return { ...state, deck: action.deck }
    case 'SET_RESULT_LIST':
      return setResultList(state, action.list)
    case 'SET_RESULT_ORDERED':
      return setResultOrdered(state, action.ordered)
    case 'SET_RESULT_FULLHOUSES':
      return state
    case 'SET_ROTATED':
      return setRotated(state, action.rotated)
    default:
      return state
  }
}

export default Reducers
