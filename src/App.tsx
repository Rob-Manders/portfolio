
import React from 'react'
import Jumbotron from './components/content/Jumbotron'

export default function App() {
	return (
		<div className='container'>
			<Jumbotron />
			
			<main id='content'>
				<h2>Hello!</h2>
				<p>Here is some content.</p>

			</main>
			<footer>

			</footer>
		</div>
	)
}