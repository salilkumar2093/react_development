import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LIComponent from './LIComponent';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

module.export = {
    LIComponent,
    App,
}
