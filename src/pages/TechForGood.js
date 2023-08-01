import React from 'react';
import { Colors, ProjectSpace, Space2, Text2, Text4, TfgSpace2, Number, GoodSpace, GoodPara, GoodHeading, InnerGood, MainSpace} from '../ss';
import { Space, ProjectItem, TfgSpace, SmallCarte, Text3, LinkStyle} from '../ss';


import Spline from '@splinetool/react-spline';





function TechForGood() {

 
  return (
    <MainSpace>
      <TfgSpace>
          <Spline scene="https://prod.spline.design/ZYjSFYWeU5Ql0UYF/scene.splinecode" />
      </TfgSpace> 

      <TfgSpace2>

        <GoodSpace>
          <Number>
          1
          </Number>
          <InnerGood>
            <GoodHeading>
            her success bits
            </GoodHeading>
            <GoodPara>
            Her Success Bits serves to connect similar minded women across the globe where they can share their success stories. 
            It is an effort to bring the voices of diverse women into limelight and inspire the viewers by sharing stories of their struggle and success.
            <br/>
            The website has been commended by the United Nations and the National e Governance Division, 
            Government of India.
            </GoodPara>
            <SmallCarte >
              <Text3>
                <LinkStyle href = "https://www.hersuccessbits.com/" target = "_blank">
                know more
                </LinkStyle>
              </Text3>
            </SmallCarte>
          </InnerGood>
        </GoodSpace>

        <GoodSpace>
          <InnerGood>
            <GoodHeading>
            project jagriti
            </GoodHeading>
            <GoodPara>
            During Covid times, I raised funds and undertook a massive initiative: Project Jagriti in which 
            I traveled to a network of remote villages in Rajasthan, India. I gave digital literacy sesssions 
            to more than 200 women from the marginalised community and distributed smart phones to some.  
            <br/>
            Project Jagriti has been commended by Canon EMEA and the United Nations.
            </GoodPara>
            <SmallCarte >
            <Text3>
            <LinkStyle href = "https://www.hersuccessbits.com/jagriti" target = "_blank">
            know more
            </LinkStyle>
            </Text3>
            </SmallCarte>
          </InnerGood>
          <Number>
          2
          </Number>
        </GoodSpace>



        
        <GoodSpace>
          <Number>
          3
          </Number>
          <InnerGood>
            <GoodHeading>
            imaging for good 
            </GoodHeading>
            <GoodPara>
            I have also been significantly working for the cause of “Imaging for Good” and
             have four years of experience in content creation and video editing. 
            <br/>
            My digital content on project Jagriti was featured by Canon UK and Ireland in the United Nations week to #Act4SDGs 2021.
            </GoodPara>
            <SmallCarte >
              <Text3>
                <LinkStyle href = "https://twitter.com/canonukandie/status/1440601995824427008?s=24" target = "_blank">
                know more
                </LinkStyle>
              </Text3>
            </SmallCarte>
          </InnerGood>
        </GoodSpace>
        
        
        
        
        </TfgSpace2> 

        
      


</MainSpace>

  )

}

export default TechForGood

