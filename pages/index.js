// import { useEffect } from "react";
import Head from "next/head";
import styled from 'styled-components';
import { CONTAINER, HeroH1, LinkGrid, H2, ProjectsCardWrapper } from "../globalstyle";
import { device } from "../device";


function Home(props) {

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
       
      </ CONTAINER>

    </>
  );

}




export default Home;