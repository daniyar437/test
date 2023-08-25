import React from 'react';
import { useSelector } from 'react-redux';
import { MainContainer } from "../../styledComponents/BaseStyleComponents"
import { AboutContainer } from '../../styledComponents/AboutStyle';
import { FavoriteIcon, WatchedIcon } from '../../styledComponents/Icons';

function About() {
  const {theme} = useSelector(state => state)

  return <MainContainer>
    <AboutContainer theme={theme}>
      <h1>Welcome to Movie App</h1>
    </AboutContainer>
  </MainContainer>;
}

export default About;
