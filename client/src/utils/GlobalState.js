import React, { createContext, useReducer, useContext } from "react";
import {
    UPDATE_ART,
    SET_CURRENT_DETAIL,
    SET_CURRENT_COLLECTION,
    LOADING,
    UPDATE_COLLECTION
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_DETAIL:
          return {
            ...state,
            currentDetail: action.detail,
            loading: false
          };
      
        case SET_CURRENT_COLLECTION:
          return {
            ...state,
            currentCollection: action.collection,
            loading: false
          };
      
        case UPDATE_ART:
          return {
            ...state,
            art: [...action.art],
            loading: false
          };
      
        case UPDATE_COLLECTION:
          return {
            ...state,
            collection: [...action.data],
            loading: false
          };
      
        case LOADING:
          return {
            ...state,
            loading: true
          };
      
        default:
          return state;
        }
}

const StoreProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
        art: [],
        currentDetail: {
            _id: 0,
            title: "",
            size: "",
            description: "",
            path: "",
            date: ""
        },
        currentCollection: "",
        collection: [],
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props}/>;
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext};