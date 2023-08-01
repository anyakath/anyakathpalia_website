import React from 'react';
import { Colors, SingleSkill, SkillGrid, SkillSpace, Space2, Space4, Text2, Text4 } from '../ss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJava, faJs, faPython, faHtml5, faFigma, faCss3Alt, faPhp, faNpm} from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react';
import Grid from './Grid';

export default function Skills() {
  return (
    <>
    <Grid/>

    <>
    <Text2 size= '35px'>
        Technical Skills
    </Text2>

  <hr style={{
            color: Colors.grey3,
            backgroundColor: Colors.grey3,
            height: 1,
            width:600
        }}/>
  <br/>
  <SkillSpace>

  <SingleSkill>
  <FontAwesomeIcon icon={faReact} color = {Colors.grey2} size="3x" />
  <Text4>react</Text4>
  </SingleSkill>

  <SingleSkill>
  <FontAwesomeIcon icon={faJava} color = {Colors.grey2} size="3x" />
  <Text4>java</Text4>
  </SingleSkill>

  <SingleSkill>
  <FontAwesomeIcon icon={faJs} color = {Colors.grey2} size="3x" />
  <Text4>javascript</Text4>
  </SingleSkill>

  <SingleSkill>
  <FontAwesomeIcon icon={faPython} color = {Colors.grey2} size="3x" />
  <Text4>python</Text4>
  </SingleSkill>

  <SingleSkill>
  <FontAwesomeIcon icon={faHtml5} color = {Colors.grey2} size="3x" />
  <Text4>html</Text4>
  </SingleSkill>

  </SkillSpace>



  <SkillSpace>
    <SingleSkill>
    <FontAwesomeIcon icon={faCss3Alt} color = {Colors.grey2} size="3x" />
    <Text4>css</Text4>
    </SingleSkill>

    <SingleSkill>
    <FontAwesomeIcon icon={faPhp} color = {Colors.grey2} size="3x" />
    <Text4>php</Text4>
    </SingleSkill>

    

    <SingleSkill>
    <FontAwesomeIcon icon={faNpm} color = {Colors.grey2} size="3x" />
    <Text4>npm</Text4>
    </SingleSkill>

    <SingleSkill>
    <Icon icon="ph:file-sql-duotone" width="58" color =  {Colors.grey2}/>
    <Text4>sql</Text4>
    </SingleSkill>

  </SkillSpace>



  <SkillSpace>

    <SingleSkill>
    <Icon icon="teenyicons:firebase-outline" width="58" color =  {Colors.grey2}/>
    <Text4>firebase</Text4>
    </SingleSkill>


    <SingleSkill>
    <Icon icon="file-icons:expo" width="55" color =  {Colors.grey2}/>    
    <Text4>expo</Text4>
    </SingleSkill>

    <SingleSkill>
    <Icon icon="simple-icons:styledcomponents" width="58" color =  {Colors.grey2}/>
    <Text4>styled-components</Text4>
    </SingleSkill>


    <SingleSkill>
    <FontAwesomeIcon icon={faFigma} color = {Colors.grey2} size="3x" />
    <Text4>figma</Text4>
    </SingleSkill>

    <SingleSkill>
    <Icon icon="simple-icons:pandas" width="58" color =  {Colors.grey2} />    
    <Text4>pandas</Text4>
    </SingleSkill>
    
  </SkillSpace>
  
  </>


  </>
  )
}
