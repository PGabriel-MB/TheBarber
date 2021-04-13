export const initialState = {
    favorites: [],
    appointments: []
}

export const UserReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'setUser':
            return {...state, user: action.payload.user }
            break;
        default:
            return state;
    }
}