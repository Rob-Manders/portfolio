
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'
import Icon_Github from '../icons/Icon_Github'

const GithubButton = styled.div`
	display: flex;
	align-items: center;
	margin-right: 1rem;
	
	.clickableLink {
		svg {
			--dimensions: 2.5rem;
			width: var(--dimensions);
			height: var(--dimensions);
			fill: ${props => props.theme.primary};
			opacity: 0.75;
			transition: 150ms ease-in-out;
		}
	
		&:hover,
		&:focus {
			svg {
				fill: ${props => props.theme.accent};
				opacity: 1;
			}
	
			&::before {
				opacity: 1;
			}
		}
	}

	.tooltip {
		cursor: default;
		text-decoration: none;
		margin: 0;
		margin-right: 1rem;
		opacity: 0;
		transition: opacity 150ms ease-in-out;
	}

	.hovered {
		opacity: 0.75;
	}
`

interface ComponentProps {
	projectTitle: string
	githubLink: string
}

export default function ProjectGithubLink({ githubLink, projectTitle }: ComponentProps) {
	const theme = useContext(ThemeContext)
	const [hover, setHover] = useState<boolean>(false)

	return (
		<GithubButton theme={theme} >
			<p className={`tooltip ${hover && 'hovered'}`}>Go to GitHub</p>
			<a className='clickableLink' href={githubLink} target='_blank' aria-label={`go to ${projectTitle} project github`}onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
				<Icon_Github  />
			</a>
		</GithubButton>
	)
}
