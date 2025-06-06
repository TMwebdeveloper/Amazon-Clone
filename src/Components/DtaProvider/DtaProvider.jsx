

import React, {createContext, useReducer} from "react"
import { initialState } from "../../Utility/Reducer";
import { reducer } from "../../Utility/Reducer"
 export const DataContext = createContext()

export const DataProvider =({children})=>{
    return (
      <DataContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </DataContext.Provider>
    );
}

