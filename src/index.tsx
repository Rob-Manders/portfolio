import './scss/index.scss'
import { createRoot } from 'react-dom/client'
import React, { createContext } from 'react'
import App from './App'
import Theme from './context/Theme'

const container = document.createElement('div')
container.classList.add('app')

document.body.appendChild(container)

const root = createRoot(container!)
root.render(
  <Theme>
    <App />
  </Theme>
)
