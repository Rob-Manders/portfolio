
import './scss/index.scss'
import ReactDOM from 'react-dom'
import React, { createContext } from 'react'
import App from './App'
import { darkTheme } from './themes/darkTheme'

// TODO: Set up proper context and theme switching to replace this janky mess.
export const ThemeContext = createContext(undefined)

ReactDOM.render(
	<ThemeContext.Provider value={{ theme: darkTheme }}>
		<App />
	</ThemeContext.Provider>,
	document.getElementById('root')
)