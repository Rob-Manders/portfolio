import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'
import { ProjectInfo } from '../../interfaces'
import ProjectGithubLink from '../elements/ProjectGithubLink'
import ProjectLink from '../elements/ProjectLink'

const ProjectContainer = styled.section`
  padding: 1.5rem;

  .title {
    margin: 0;
  }

  .description {
    margin-bottom: 1.5rem;
  }

  .links {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
  }

  .images {
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(8, 1fr);

    img {
      border-radius: 1rem;
      box-shadow: 0px 10px 12px -6px rgba(0, 0, 0, 0.75);
      height: auto;
      object-fit: cover;
      width: 100%;
    }

    .image1 {
      grid-row: 1 / -1;
      grid-column: 1 / 8;
      aspect-ratio: 4 / 3;
    }

    .image2 {
      grid-row: 3 / -1;
      grid-column: 5 / -1;
      aspect-ratio: 2 / 3;
    }
  }

  .images--mobile {
    display: grid;
    grid-template-rows: repeat(9, 1fr);
    grid-template-columns: repeat(7, 1fr);

    img {
      border-radius: 1rem;
      box-shadow: 0px 10px 12px -6px rgba(0, 0, 0, 0.75);
      height: auto;
      object-fit: cover;
      width: 100%;
    }

    .image1 {
      grid-row: 1 / 9;
      grid-column: 1 / 5;
      aspect-ratio: 2 / 3;
    }

    .image2 {
      grid-row: 3 / -1;
      grid-column: 4 / -1;
      aspect-ratio: 2 / 3;
    }
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-rows: min-content 2fr min-content;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'title 				images'
      'description 	images'
      'links 				images';

    .title,
    .description {
      margin-left: 2rem;
    }

    .title {
      grid-area: title;
    }

    .description {
      grid-area: description;
      margin-bottom: 0;
    }

    .links {
      grid-area: links;
    }

    .images,
    .images--mobile {
      grid-area: images;
      margin-left: 3rem;
      margin-right: 2rem;
    }
  }
`

interface ComponentProps {
  projectInfo: ProjectInfo
  mobile?: boolean
  children: ReactNode
}

export default function Project({
  projectInfo,
  mobile,
  children
}: ComponentProps) {
  const { theme } = useContext(ThemeContext)
  const { projectTitle, projectLink, githubLink, desktopImage, mobileImage } =
    projectInfo

  return (
    <ProjectContainer theme={theme}>
      <h2 className='title'>{projectTitle}</h2>
      <div className='description'>{children}</div>
      <div className={mobile ? 'images--mobile' : 'images'}>
        <img
          className='image1'
          src={desktopImage}
          alt={`${projectTitle} desktop screenshot`}
          width='400'
          height='300'
        />
        <img
          className='image2'
          src={mobileImage}
          alt={`${projectTitle} mobile screenshot`}
          width='200'
          height='300'
        />
      </div>
      <div className='links'>
        <ProjectGithubLink
          githubLink={githubLink}
          projectTitle={projectTitle}
        />
        <ProjectLink projectLink={projectLink} />
      </div>
    </ProjectContainer>
  )
}
