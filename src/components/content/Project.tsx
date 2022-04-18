
import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'
import { ProjectInfo } from '../../interfaces'

const ProjectContainer = styled.section`
	padding: 2rem;
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
			<div className='links'>

			</div>
			<div className='images'>
				<img src={desktopImage} alt={`${projectTitle} desktop screenshot`} />
				<img src={mobileImage} alt={`${projectTitle} mobile screenshot`} />
			</div>
		</ProjectContainer>
	)
}