import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainForm from './components/MainForm/MainForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainForm />, document.getElementById('root'));
registerServiceWorker();
