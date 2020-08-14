import React , { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";

import {
    UPDATE_ART,
    SET_CURRENT_DETAIL,
    SET_CURRENT_COLLECTION,
    LOADING,
    UPDATE_COLLECTION,
  } from "../utils/actions";

const Collection = () => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
 
      }, []);

console.log(state)
    return (
        <div>
            COLLECTION
            {state.currentCollection}
    {state.collection.map(art => <p>{art.title}</p>)}
        </div>
    )
}

export default Collection;