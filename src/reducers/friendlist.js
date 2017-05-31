import * as types from '../constants/ActionTypes';
import { merge } from 'lodash'

const initialState = {
  newFriend: {
    name: '',
    gender: 'female'
  },
  friendsById: [
    {
      id: 1496217011637,
      name: 'Theodore Roosevelt',
      starred: true
    },
    {
      id: 1496217029152,
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      id: 1496217043338,
      name: 'George Washington',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_NAME:
      return Object.assign(
        {},
        state,
        merge(state, { newFriend: { name: action.name} })
      )
    case types.CHANGE_GENDER:
      return Object.assign(
        {},
        state,
        merge(state, { newFriend: { gender: action.gender} })
      )
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            id: Date.now(),
            name: action.name,
            gender: action.gender
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => item.id !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => item.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
