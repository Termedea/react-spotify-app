import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../styles/includes.css';

const IconListItem = ({ icon, text }) => {
    return (
        <li>
            <FontAwesomeIcon icon={icon} />
            <span className="ml-3">{text}</span>
        </li>
    );
};

export default IconListItem;
