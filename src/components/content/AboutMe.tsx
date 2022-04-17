
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'

const AboutMeContainer = styled.article`
	display: flex;
	flex-direction: column;
	background-color: ${props => props.theme.backgroundSecondary};
	margin: 1rem 0;
	padding: 2rem;
	border-radius: 2rem;

	.heading {
		text-align: center;
		margin: 2rem 0  0 2rem;
	}

	.mugshot {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem 2rem;
		max-height: fit-content;

		img {
			--dimensions: clamp(200px, 90%, 500px);
			max-width: var(--dimensions);
			max-height: var(--dimensions);
			border-radius: 50%;
			box-shadow: 0px 10px 12px -6px rgba(0,0,0,0.5);
		}
	}

	.aboutMe {
		margin: 0 0 2rem 2rem;
	}

	@media (min-width: 800px) {
		display: grid;
		grid-template-rows: min-content 1fr;
		grid-template-columns: 1fr max-content;
		grid-template-areas:
			'heading mugshot'
			'aboutme mugshot';

		.heading {
			grid-area: heading;
			text-align: left;
		}

		.mugshot {
			grid-area: mugshot;
		}

		.aboutMe {
			grid-area: aboutme;
		}
	}
`

export default function AboutMe() {
	const darkTheme = useContext(ThemeContext)

	return (
		<AboutMeContainer theme={darkTheme}>
			<h2 className='heading'>Hi, I'm Robert!</h2>
			<div className='mugshot'>
				<img src='https://picsum.photos/400' />
			</div>
			<div className='aboutMe'>
				<p>I'm a front-end developer based in Newcastle.</p>
			</div>
		</AboutMeContainer>
	)
}