import React from 'react'
// import styled from 'styled-components'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted'

const Home = () => {
  return (
    <>
      <HeroSection name="Ecommerce Home" />
      <Services />
      <Trusted />
    </>
  );
}


export default Home