import { useEffect } from "react";
import Head from "next/head";
import styled from 'styled-components';
import { CONTAINER,  HeroH1, LinkGrid, H2 } from "../globalstyle";
import { device } from "../device";

const Header = styled.h1`
  color: blue;
`;

const Headshot = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;

  @media ${device.tablet} {
      margin: 1em auto 1.2em auto;
      width: 200px;
      height: 200px;
    }
    @media ${device.laptopL} {
      width: 200px;
      height: 200px;
    }
`;

export default function Home() {

  useEffect(() => {
    fetch('https://recipe-registry.herokuapp.com', { mode: 'no-cors' })
    fetch('https://blooming-wave-03926.herokuapp.com/', { mode: 'no-cors' })
    fetch('https://learning-redux.herokuapp.com/', { mode: 'no-cors' })
  }, [])

  return (
    <>
      <Head>
        <title>Hi, I&apos;m Sam</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <CONTAINER>
      
      
        
      
      </ CONTAINER>

    </>
  );
}