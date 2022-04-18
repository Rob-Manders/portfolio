
import React from 'react'
import Jumbotron from './components/content/Jumbotron'
import Container from './components/layout/Container'
import PageDivider from './components/elements/PageDivider'
import AboutMe from './components/content/AboutMe'
import Project from './components/content/Project'

export default function App() {
	return (
		<Container>
			<Jumbotron />
			
			<main id='content'>
				<AboutMe />
				<Project projectInfo={{
					projectTitle: 'Newcastle Go Club',
					projectLink: 'https://newcastlego.co.uk/',
					githubLink: 'https://github.com/Rob-Manders/newcastle-go-club',
					desktopImage: '#',
					mobileImage: '#'
				}}>
					<p>A website for the Newcastle Go Club.</p>
				</Project>

			</main>
			<footer>

			</footer>
		</Container>
	)
}