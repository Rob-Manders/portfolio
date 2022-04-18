
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
					desktopImage: 'https://picsum.photos/400/300',
					mobileImage: 'https://picsum.photos/200/300'
				}}>
					<p>A website for the Newcastle Go Club, built to increase our online presence as we look to grow the club.</p>
					<p>Built in Next.js, this website features a simple back end and admin pages to set up, store and serve the meeting schedule.</p>
				</Project>
				<PageDivider />
				<Project projectInfo={{
					projectTitle: 'Social Media Dashboard',
					projectLink: 'https://newcastlego.co.uk/',
					githubLink: 'https://github.com/Rob-Manders/newcastle-go-club',
					desktopImage: 'https://picsum.photos/400/300',
					mobileImage: 'https://picsum.photos/200/300'
				}}>
					<p>A website for the Newcastle Go Club.</p>
				</Project>

			</main>
			<footer>

			</footer>
		</Container>
	)
}