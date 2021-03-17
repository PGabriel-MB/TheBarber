import React, { createContext, useReducer } from "react";

export const UserContext = createContext(null);

// export const UserProvider: React.FC =  ({ children: any }) => {
//     return (
//         <UserContext.Provider>
//             {children}
//         </UserContext.Provider>
//     );
// }