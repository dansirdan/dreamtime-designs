import React from 'react';

const DetailContext = React.createContext({
    title: "",
    medium: "",
    size: "",
    description: "",
    path: "",
    detailIndex: 0,
    handleChangeDetail: () => {}
});

export default DetailContext;