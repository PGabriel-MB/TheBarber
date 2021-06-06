export const initialState = {
    favorites: [],
    appointments: [],
    user: null
}

type Action = { type: 'setUser' } | { type: 'clearUser' };

export const UserReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'setUser':
            return {...state, user: action.payload }
            break;
        default:
            return state;
    }
}