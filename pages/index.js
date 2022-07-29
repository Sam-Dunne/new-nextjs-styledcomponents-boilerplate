// import { useEffect } from "react";
import Head from "next/head";
import styled from 'styled-components';
import { CONTAINER, HeroH1, LinkGrid, H2 } from "../globalstyle";
import { device } from "../device";
import ProjectsCardCO from '../components/ProjectsCardCO/ProjectsCardCO';
// import { getStaticProps } from 'next'

const ProjectsSection = styled.section`
    position: relative;
    padding: 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-wrap: wrap;
    
    @media ${device.tablet} {
        padding: 0 10vw;
    }

    @media ${device.laptopL} {
        padding: 0 15vw;
    }
    `;

const projectsList = [
  {
    id: "1",
    imgSrc: "/rtk.jpg",
    imgAlt: "RTK project mobile view",
    imgWidth: "224",
    imgHeight: "400",
    title: "Redux Toolkit",
    textCopy: "Learned foundational concepts of Redux. Styled with Bootstrap and Sass.",
    url: "https://learning-redux.herokuapp.com/"
  },
  {
    id: "2",
    imgSrc: "/shipt_mobile_224x400.png",
    imgAlt: "shipt clone mobile view",
    imgWidth: "224",
    imgHeight: "400",
    title: "`Styled Clone",
    textCopy: "Focused sandbox for applying Styled Components.",
    url: "https://blooming-wave-03926.herokuapp.com/"
  },
  {
    id: "3",
    imgSrc: "/recipe_mobile_224x400.png",
    imgAlt: "recipe registry mobile view",
    imgWidth: "224",
    imgHeight: "400",
    title: "Recipe Registry",
    textCopy: "Full stack React/TS/ Express/MySQL app with RESTful Api and Auth.",
    url: "https://recipe-registry.herokuapp.com/"
  },
  {
    id: "4",
    imgSrc: "/subreddit_mobile_sqooshed1.png",
    imgAlt: "subreddit client",
    imgWidth: "350",
    imgHeight: "625",
    title: "Subreddit Client",
    textCopy: "Fetches and paginates data from Subreddit API. Built in NextJS. Styled with Tailwind.",
    url: "https://sub-reddit-samd.vercel.app"
  }
]

function Home(props) {

  // useEffect(() => {
  //   fetch('https://recipe-registry.herokuapp.com', { mode: 'no-cors' })
  //   fetch('https://blooming-wave-03926.herokuapp.com/', { mode: 'no-cors' })
  //   fetch('https://learning-redux.herokuapp.com/', { mode: 'no-cors' })
  // }, [])

  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <CONTAINER>
        <h1>home</h1>
        <ProjectsSection>
          {props.projects.map(p => (
            <ProjectsCardCO key={p.id} {...p} />
          ))};
        </ProjectsSection>
      </ CONTAINER>

    </>
  );
  
}
export async function getStaticProps() {
  return {
    props: {
      projects: projectsList
    }
  }
}


export default Home;