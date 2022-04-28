
import React, { useState, createContext, ReactNode } from 'react'
import { Theme } from '../interfaces'
import { darkTheme } from '../themes/darkTheme'
import { lightTheme } from '../themes/lightTheme'

export const ThemeContext = createContext(null)

export default function Theme({ children }: { children: ReactNode }) {
	const [ theme, setTheme ] = useState<Theme>(darkTheme)

	function switchTheme() {
		if (theme.themeName === 'dark') {
			setTheme(lightTheme)
		} else {
			setTheme(darkTheme)
		}
	}

	return (
		<ThemeContext.Provider value={{ theme, switchTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}