
import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'

const ProjectLinkButton = styled.a`
	display: grid;
	place-items: center;
	text-decoration: none;
	font-weight: 700;
	color: ${props => props.theme.background};
	background-color: ${props => props.theme.accent};
	border-radius: 100vw;
	width: 7rem;
	height: 2.75rem;

	&:hover,
	&:focus {
		color: ${props => props.theme.background};
		background-color: ${props => props.theme.primary};
	}
`

export default function ProjectLink({ projectLink }: { projectLink: string }) {
	const { theme } = useContext(ThemeContext)
	return (
		<ProjectLinkButton theme={theme} href={projectLink} target='_blank'>
			Visit Site
		</ProjectLinkButton>
	)
}