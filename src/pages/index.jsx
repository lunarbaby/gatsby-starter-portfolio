import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'


const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Selina Beasley.
        </BigTitle>
        <Subtitle>I'm a entry-level web developer and this is my portfolio website.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Portfolio</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Dilbert"
            link="https://lunarbaby.github.io/fictional-charater-website/"
            bg="linear-gradient(to right, #b71c1c 0%, #FBB03B 100%)"
          >
            This was my first assignment in code bootcamp.
          </ProjectCard>
          <ProjectCard
            title="Harry Potter"
            link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
          <ProjectCard
            title="Tomb Raider"
            link="https://www.behance.net/gallery/43907099/Tomb-Raider"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
          <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <AboutSub>
            Steve Jobs: <blockquote>"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma-which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition."</blockquote>            
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am a career transitioner. I started by career as a research technician. I attended a twelve week web development bootcamp to learn how to create websites. I enjoy learning about Javascript and React. In my spare time I play video game (RPG and strategy) and reading books on my iPad.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:lunarbaby21@hotmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.twitter.com/moonstar167">Twitter</a> &{' '}
            <a href="https://www.instagram.com/lunarbaby21/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Selina Beasley.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a> and Selina Beasley.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
