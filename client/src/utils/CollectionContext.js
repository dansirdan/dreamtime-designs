import React from 'react';

const CollectionContext = React.createContext({
    collection: "",
    collectionData: [],
    handleChangeCollection: () => {}
});

export default CollectionContext;