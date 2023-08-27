import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { data } from '../../../data';

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_LIST:
      return { ...state, people: [] };

    case RESET_LIST:
      return { ...state, people: data };

    case REMOVE_ITEM:
      let newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      );
      return { ...state, people: newPeople };

    default:
      throw new Error(`${action.type} is an invalid action`);
  }
};
