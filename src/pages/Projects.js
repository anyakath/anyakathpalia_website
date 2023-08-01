import React from 'react';
import { Colors, MainSpace, ProjectSpace, Text5, WavyGrid } from '../ss';
import { Space3, Carte, SmallCarte, LinkStyle, Text3, Text1} from '../ss'
import {Text2, Text4} from '../ss'
import {Link} from "react-router-dom";
import {ProjectItem, Image} from '../ss'
import { Icon } from '@iconify/react';
import Grid from '../components/Grid';

function Projects() {
  return (
    <ProjectSpace>
      <Text1> projects || experience </Text1>
     <Space3 color= {Colors.black} flexDirection = 'row'>
      
      <Carte>
        <Icon icon="ph:plant" width="40" color =  {Colors.grey2}/>
        <Text4 color = {Colors.beige}>
          The Grant Park Project
        </Text4>
        <hr style={{ marginTop: '100px', position: 'absolute', color: Colors.grey3, backgroundColor: Colors.grey3, width:200 }}/>
       
        <Text5 color = {Colors.grey2}>
          <br/> 
          Conducting and managing the development of a guided walking tour app for historic Grant Park to help visitors explore and 
          appreciate the park and its unique offerings.
        </Text5>
      </Carte>

      
      <Carte>
        <Icon icon="material-symbols:developer-mode-tv-outline" width="35" color = {Colors.grey2}/>
        <Text4 color = {Colors.beige}>
          Full Stack Dev: not just another productivity app
        </Text4>
        <hr style={{ marginTop: '100px', position: 'absolute', color: Colors.grey3, backgroundColor: Colors.grey3, width:200 }}/>
        
        <Text5 color = {Colors.grey2}>
        Developing a productivity app with diverse functionality which ties the features of several productivity apps.
        Utilizing Firebase to implement the back-end and React Native, JavaScript for the front-end.
        </Text5>
        <LinkStyle size = '14px' href = "https://github.com/anyakath/my-success-bits_react-native" target = '_blank'>
        github repository
        </LinkStyle>
      </Carte>

      <Carte>
      <Icon icon="ph:code-bold" width="40" color = {Colors.grey2}/>
        <Text4 color = {Colors.beige}>
          Web Dev and 3D design
        </Text4>
        <hr style={{  marginTop: '100px', position: 'absolute', color: Colors.grey3, backgroundColor: Colors.grey3, width:200 }}/>
        <Text5 color = {Colors.grey2}>
          <br/> Developed this website using React js. Used the Spline tool to 
          integrate a 3D environment and make physics based animations. 
        </Text5>
        <LinkStyle size = '14px' href = "https://github.com/anyakath/anyakathpalia_website" target = '_blank'>
        github repository
        </LinkStyle>
      </Carte>
      </Space3>


      <Space3 color= {Colors.black} flexDirection = 'row'>
      <Carte>
      <Icon icon="ic:baseline-checklist" width="40" color = {Colors.grey2}/>
        <Text4 color = {Colors.beige}>
          Project management and PACE strategising
        </Text4>
        <hr style={{  marginTop: '105px', position: 'absolute', color: Colors.grey3, backgroundColor: Colors.grey3, width:200 }}/>
        <Text5 color = {Colors.grey2}>
          Familiar with the PACE framework. Experienced in drafting executive summaries, project planning and project leading.
        </Text5>
      </Carte>

      
      <Carte>
      <Icon icon="majesticons:data-line" width="40" color = {Colors.grey2}/>
        <Text4 color = {Colors.beige}>
          Data Analysis
        </Text4>
        <hr style={{  marginTop: '105px', position: 'absolute', color: Colors.grey3, backgroundColor: Colors.grey3, width: 200 }}/>
        <Text5 color = {Colors.grey2}>
          <br/> Conducted EDA, data sampling, computed confidence intervals, built regression models and more as part of the 
          Google Advanced Data Analytics Certificate Program.
        </Text5>
      </Carte>

      <Carte>
      <Icon icon="fluent:brain-circuit-24-regular" width="40" color = {Colors.grey2}/>
        <Text4 color = {Colors.beige}>
          A/B Testing 
        </Text4>
        <hr style={{  marginTop: '105px', position: 'absolute', color: Colors.grey3, backgroundColor: Colors.grey3, width:200 }}/>
        <Text5 color = {Colors.grey2}>
          <br/> Computed descriptive statistics and conducted a hypothesis tests (A/B tests) with Python, Pandas and Scipy
        </Text5>
      </Carte>


      </Space3>

      {/* <SmallCarte >
      <Text3>
        <LinkStyle href = "/">
        my resume
        </LinkStyle>
      </Text3>
      </SmallCarte> */}

      <WavyGrid></WavyGrid>
 
</ProjectSpace>
     
  )
}

export default Projects