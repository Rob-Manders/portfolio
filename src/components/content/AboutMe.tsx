import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/Theme'
import { mugshot } from '../../assets/images'

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundSecondary};
  margin: 1rem 0 2rem;
  padding: 1.5rem;
  border-radius: 2rem;

  .heading {
    text-align: center;
    margin: 1rem 0 1rem 0;
  }

  .mugshot {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    max-height: fit-content;

    img {
      --dimensions: clamp(200px, 100%, 300px);
      width: var(--dimensions);
      height: var(--dimensions);

      aspect-ratio: 1 / 1;
      border-radius: 50%;
      box-shadow: 0px 10px 12px -6px rgba(0, 0, 0, 0.5);
      object-fit: cover;
    }
  }

  .aboutMe {
    margin: 1rem 0 0 0;
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
      margin: 2rem 0 1rem 2rem;
    }

    .mugshot {
      grid-area: mugshot;
    }

    .aboutMe {
      grid-area: aboutme;
      margin: 0 2rem 2rem 2rem;
    }
  }
`

export default function AboutMe() {
  const { theme } = useContext(ThemeContext)

  return (
    <AboutMeContainer theme={theme} aria-label='about me'>
      <h2 className='heading'>Hi, I'm Robert!</h2>
      <div className='mugshot'>
        <img src={mugshot} width='300' height='300' alt='a picture of me' />
      </div>
      <div className='aboutMe'>
        <p>I'm a front-end developer based in Newcastle.</p>
        <p>
          I build web experiences in React using HTML, CSS, SASS, Javascript and
          Typescript.
        </p>
        <p>
          You can see some of my work below and all of the code is available to
          review on my <a href='https://github.com/Rob-Manders'>GitHub</a>.
        </p>
        <p>
          If you'd like to speak to me you can contact me via my{' '}
          <a href='https://www.linkedin.com/in/robert-manders-925b88202/'>
            LinkedIn
          </a>{' '}
          page.
        </p>
      </div>
    </AboutMeContainer>
  )
}
