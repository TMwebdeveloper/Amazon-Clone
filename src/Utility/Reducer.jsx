import { useReducer } from "react"
import { Type } from "../Utility/ActionType";


export const intialState ={
   basket:[] 
}

export const reducer =(state,action)=>{
switch (action.type) {
    case Type.ADD_TO_BASKET:
        return{
            ...state,
            basket:[...state.basket,action.item]
        }
       

    default:
        return state;
}
}

