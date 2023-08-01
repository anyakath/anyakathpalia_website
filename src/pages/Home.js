import React from 'react'
import { testext , Space, Space3, Image, TextSpace, TextBanner, Text1, Text2, Text3, Text4, Colors, Card, FrontCard, SmallCarte, BigText, MainSpace, ReelSpace, Box, Text5, Space2, LinkStyle} from '../ss'
import Collapsible from 'react-collapsible';
import {Link} from "react-router-dom";

import Profile from "../assets/profile.jpg";
import ReactRoundedImage from "react-rounded-image";

import { TypeAnimation } from 'react-type-animation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeadSideBrain} from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';

import Skills from "../components/Skills";
import Contactform from '../components/contactform';
import Grid from '../components/Grid';






const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  
  return (
  <MainSpace>
  <Space color={Colors.black} flex-direction = {"row"}>
    <br/><br/>
  <ReactRoundedImage image={Profile} 
  roundedColor= {Colors.black}
  imageWidth="150"
  imageHeight="150"
  roundedSize="15"
  borderRadius="70"
  />


    <TextSpace >
    <TypeAnimation
    sequence={[
      'I develop ',
      1000, 
      'I develop websites.', 
      1000, 
      'I develop UI/UX.', 
      1000, 
      'I develop apps.', 
      1000
    ]}
    wrapper="span"
    speed={70}
    style={{ fontSize: '2.5em', display: 'inline-block', color: Colors.grey1, fontFamily: 'Helvetica', paddingTop: 60}}
    repeat={1}

    
    /> 
   </TextSpace>

    <TextSpace  flexDirection= 'row'>
    
         <Text2 color= {Colors.grey1}>
        Hey there! I am Anya Kathpalia, a sophomore Computer Science major at Georgia Institute of Technology. 
        I have a concentration in Intelligence and Media. Here are some areas I have worked in.
        </Text2>
        
        </TextSpace>
  </Space>

  <ReelSpace>
    <Box>
      <Text4>
        Technical consulting
        <hr></hr>
        <Text5>
          Working for the Grant Park Conservancy Atlanta and more 
        </Text5>
      </Text4>
    </Box>

    <Box>
    <Text4>
        Native Development
        <hr></hr>
        <Text5>
          Specialising in projects using the React framework and Firebase 
        </Text5>
      </Text4>
    </Box>

    <Box>
    <Text4>
        Data Analytics Focus
        <hr></hr>
        <Text5>
          Google Advanced Data Analytics Certificate program and more 
        </Text5>
      </Text4>
    </Box>

    <Box> 
    <Text4>
        Web Development
        <hr></hr>
        <Text5>
          GT WebDev and this website! 
        </Text5>
      </Text4>
    </Box>
    
  </ReelSpace>

  <Space2 flexDirection='row'>
  <SmallCarte >
      <Link to = "/projects" onClick={scrollToTop}> 
        <Text4 color = {Colors.beige}>
          Projects
        </Text4>
        </Link>
  </SmallCarte>

  <SmallCarte >
  <Link to = "/techforgood" onClick={scrollToTop}> 
        <Text4 color = {Colors.beige}>
          Tech For Good
        </Text4>
        </Link>
  </SmallCarte>

  </Space2>

  
  <Skills>
  </Skills>

  <Contactform></Contactform>

</MainSpace>

  
  )
}

export default Home