import React from 'react'
import FeaturedProducts from './components/FeaturedProducts';
// import styled from 'styled-components'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted'

const Home = () => {
  return (
    <>
      <HeroSection name="Ecommerce Home" />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  );
}


export default Home