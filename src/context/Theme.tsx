
import React, { useState, createContext, ReactNode } from 'react'
import { darkTheme } from '../themes/darkTheme'

export const ThemeContext = createContext(darkTheme)

export default function Theme({ children }: { children: ReactNode }) {
		return (
		<ThemeContext.Provider value={darkTheme}>
			{children}
		</ThemeContext.Provider>
	)
}