import { User } from "../api/interfaces/User";

export const initialState = {
    favorites: [],
    appointments: [],
    user: null
}

export type Action = { type: 'setUser', payload: User  } | { type: 'clearUser' };

export const UserReducer = (state: any, action: Action) => {
    switch(action.type) {
        case 'setUser':
            return {...state, user: action.payload }
            break;
        default:
            return state;
    }
}