import React from 'react';

import '../../styles/includes.css';

const Pill = ({ text }) => {
    return <div className="rounded-md bg-primary-light p-1 mr-1">{text}</div>;
};

export default Pill;
