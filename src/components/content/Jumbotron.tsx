
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'
import Icon_Github from '../icons/Icon_Github'
import Icon_LinkedIn from '../icons/Icon_LinkedIn'
import SkipLink from '../elements/SkipLink'
import ThemeToggle from '../elements/ThemeToggle'
import ScrollIndicator from '../elements/ScrollIndicator'

const JumbotronContainer = styled.header`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100vh;

	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 2;

		h1,
		p {
			margin: 0;
		}

		h1 {
			font-family: 'Square Peg', cursive;
			font-size: clamp(4rem, 15vw, 9rem);
		}

		p {
			font-size: clamp(1.2rem, 3.55vw, 2rem);
			color: ${props => props.theme.accent};
		}
	}

	.social-links {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		
		a + a {
			margin-left: 1.5rem;
		}

		svg {
			--icon-dimensions: 2.5rem;
			height: var(--icon-dimensions);
			width: var(--icon-dimensions);
			fill: ${props => props.theme.primary};
			opacity: 0.25;
			transition: 150ms ease-in-out;
		}

		a:hover,
		a:focus {
			svg {
				fill: ${props => props.theme.accent};
				opacity: 1;
			}
		}
	}
`

export default function Jumbotron() {
	const darkTheme = useContext(ThemeContext)

	return (
		<JumbotronContainer theme={darkTheme}>
			<SkipLink />
			<ThemeToggle />
			<div className='title'>
				<h1>Robert Manders</h1>
				<p>Front-End Developer</p>
			</div>
			<div className='social-links'>
				<a href='https://github.com/Rob-Manders'><Icon_Github /></a>
				<a href='https://www.linkedin.com/in/robert-manders-925b88202/'><Icon_LinkedIn /></a>
			</div>
			<ScrollIndicator />
		</JumbotronContainer>
	)
}