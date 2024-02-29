import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TagManager from 'react-gtm-module'
import './index.css'

const tagManagerArgs = {
  gtmId: 'GTM-NP7N542V'
}
TagManager.initialize(tagManagerArgs)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
