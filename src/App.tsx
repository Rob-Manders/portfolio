import React from 'react'
import Jumbotron from './components/content/Jumbotron'
import Container from './components/layout/Container'
import PageDivider from './components/elements/PageDivider'
import AboutMe from './components/content/AboutMe'
import Project from './components/content/Project'
import Footer from './components/content/Footer'
import {
  newcastleGoClubDesktop,
  newcastleGoClubMobile,
  socialMediaDashboardDesktop,
  socialMediaDaskboardMobile,
  spaceXLaunchScheduleDesktop,
  spaceXLaunchScheduleMobile,
  stylestageSpectrumDesktop,
  stylestageSpectrumMobile
} from './assets/images'

export default function App() {
  return (
    <Container>
      <Jumbotron />

      <main id='content'>
        <AboutMe />
        <Project
          projectInfo={{
            projectTitle: 'Newcastle Go Club',
            projectLink: 'https://newcastlego.co.uk/',
            githubLink: 'https://github.com/Rob-Manders/newcastle-go-club',
            desktopImage: newcastleGoClubDesktop,
            mobileImage: newcastleGoClubMobile
          }}
        >
          <p>
            A website for the Newcastle Go Club, built to increase our online
            presence as we look to grow the club.
          </p>
          <p>Built in React using Typescript.</p>
        </Project>

        <PageDivider />

        <Project
          projectInfo={{
            projectTitle: 'Social Media Dashboard',
            projectLink: 'https://inquisitive-capybara-8f7d58.netlify.app/',
            githubLink: 'https://github.com/Rob-Manders/social-media-dashboard',
            desktopImage: socialMediaDashboardDesktop,
            mobileImage: socialMediaDaskboardMobile
          }}
        >
          <p>
            This is a{' '}
            <a href='https://www.frontendmentor.io/' target='_blank'>
              Frontent Mentor
            </a>{' '}
            project built in React.
          </p>
          <p>
            This project features light/dark theme switching, with the overall
            theme state being handled within it's own global context.
          </p>
        </Project>

        <PageDivider />

        <Project
          projectInfo={{
            projectTitle: 'SpaceX Launch Schedule',
            projectLink: 'https://spacex-launch-schedule.netlify.app/',
            githubLink: 'https://github.com/Rob-Manders/SpaceX-Launch-Schedule',
            desktopImage: spaceXLaunchScheduleDesktop,
            mobileImage: spaceXLaunchScheduleMobile
          }}
        >
          <p>One of my early React projects.</p>
          <p>
            This is a simple launch schedule which pulls data from the{' '}
            <a href='https://github.com/r-spacex/SpaceX-API' target='_blank'>
              SpaceX API
            </a>{' '}
            and displays information about each launch in it's own card.
          </p>
        </Project>

        <PageDivider />

        <Project
          projectInfo={{
            projectTitle: 'Spectrum Theme for Stylestage',
            projectLink: 'https://stylestage.dev/styles/spectrum/',
            githubLink: 'https://github.com/Rob-Manders/Style-Stage-Spectrum',
            desktopImage: stylestageSpectrumDesktop,
            mobileImage: stylestageSpectrumMobile
          }}
        >
          <p>
            One of my very earliest projects, a theme for{' '}
            <a href='https://stylestage.dev/'>Stylestage</a> built using SASS to
            test my CSS and SASS skills.
          </p>
          <p>
            <a href='https://stylestage.dev/'>Stylestage</a> is a project
            designed to showcase what is possible with modern CSS and is open to
            submissions from anyone.
          </p>
        </Project>

        <PageDivider />
      </main>

      <Footer />
    </Container>
  )
}
