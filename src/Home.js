import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Heading>Home</Heading>
  );
}

const Heading = styled.section`
    background-color: ${({theme}) => theme.color};
    width: 100vw;
    height: 200px;
    text-align: center;
`

export default Home