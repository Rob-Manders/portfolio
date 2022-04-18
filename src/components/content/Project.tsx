
import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'
import { ProjectInfo } from '../../interfaces'
import ProjectGithubLink from '../elements/ProjectGithubLink'
import ProjectLink from '../elements/ProjectLink'


const ProjectContainer = styled.section`
	padding: 2rem;

	.links {
		display: flex;
		justify-content: flex-end;
		margin: 2rem 0;
	}
`

interface ComponentProps {
	projectInfo: ProjectInfo
	children: ReactNode
}

export default function Project({ projectInfo, children }: ComponentProps) {
	const theme = useContext(ThemeContext)
	const {
		projectTitle,
		projectLink,
		githubLink,
		desktopImage,
		mobileImage
	} = projectInfo

	return (
		<ProjectContainer theme={theme}>
			<h2 className='title'>{projectTitle}</h2>
			<div className='description'>
				{children}
			</div>
			<div className='images'>
				<img src={desktopImage} alt={`${projectTitle} desktop screenshot`} />
				<img src={mobileImage} alt={`${projectTitle} mobile screenshot`} />
			</div>
			<div className='links'>
				<ProjectGithubLink githubLink={githubLink} projectTitle={projectTitle} />
				<ProjectLink projectLink={projectLink} />
			</div>
		</ProjectContainer>
	)
}