
import './scss/index.scss'
import ReactDOM from 'react-dom'
import React, { createContext } from 'react'
import App from './App'
import Theme from './context/Theme'

ReactDOM.render(
	<Theme>
		<App />
	</Theme>,
	document.getElementById('root')
)