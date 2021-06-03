import React, { createContext, useContext, useReducer } from "react";
import { User } from "../api/models/interfaces/User";
import { initialState, UserReducer } from "../reducers/UserReducer";

export const UserContext = createContext<{
    state: typeof initialState,
    dispatch: React.Dispatch<any>
}>({ state: initialState, dispatch: () => null});

const UserProvider: React.FC =  ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

function useUser() {
    const context = useContext(UserContext);

    if(context === undefined) {
        throw new Error('useUser must be within a UserProvider');
    }

    return context;
}

export { UserProvider, useUser };