
import React from 'react'
import Jumbotron from './components/content/Jumbotron'
import Container from './components/layout/Container'
import PageDivider from './components/elements/PageDivider'
import AboutMe from './components/content/AboutMe'

export default function App() {
	return (
		<Container>
			<Jumbotron />
			
			<main id='content'>
				<AboutMe />
				

			</main>
			<footer>

			</footer>
		</Container>
	)
}