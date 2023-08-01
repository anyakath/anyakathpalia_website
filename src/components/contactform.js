import React , {useState} from 'react'
import { Formik } from "formik"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { BigText, contactButton, Text2, Space2, SmallCarte, Text4, Colors, Space4, LinkStyle} from "../ss"
import Grid from './Grid';
import {Link} from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';


function Contactform() {
  return (
    <>
    
    <Space4>
        <BigText size = '40px'> <br/> Find me interesting? </BigText>
        <Text2 size = '30px'>
          contact me
        </Text2> 

    <Space2 flexDirection='row'>
    <SmallCarte >
  
    <LinkStyle href = "mailto:anyakath@gmail.com">
    <Text4 color = {Colors.beige}>
    {/* <FontAwesomeIcon icon={faEnvelope} color = {Colors.grey2} size="1x" /> */}
      Email
    </Text4>
    </LinkStyle>
  
    </SmallCarte>

    <SmallCarte >
    <LinkStyle href = "https://www.linkedin.com/in/anya-kathpalia/" target = "_blank"> 
    <Text4 color = {Colors.beige}>
      LinkedIn
    </Text4>
    </LinkStyle>
    </SmallCarte>

    </Space2>
    </Space4>

</>

  )
}

export default Contactform;