import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import './index.css'

import eruda from 'eruda'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)






if (window) {
	let el = document.createElement('div')
	document.body.appendChild(el)

	eruda.init({
		container: el,
		tool: ['console', 'elements', 'network', 'resources']
	})
}
