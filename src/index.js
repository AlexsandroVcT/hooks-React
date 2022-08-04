import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './views/App'

// Forma certa de implementar o ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);