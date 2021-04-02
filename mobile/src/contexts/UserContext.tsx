import React, { createContext, useReducer } from "react";
import { User } from "../api/models/interfaces/User";
import { initialState, UserReducer } from "../reducers/UserReducer";

export const UserContext = createContext<{
    state: typeof initialState,
    dispatch: React.Dispatch<any>
}>({ state: initialState, dispatch: () => null});

export const UserProvider: React.FC =  ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}