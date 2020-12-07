import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './styles/base.css';
import './styles/utilities.css';
import App from './components/App/App';
library.add(fas);

/* npx generate-react-cli component [ComponentName]  */
ReactDOM.render(<App />, document.getElementById('root'));
