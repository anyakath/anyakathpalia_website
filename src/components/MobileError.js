import React from 'react'
import {Text2, Colors, MobileSpace, ErrorIcon } from '../ss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from '@fortawesome/free-solid-svg-icons';
export default function MobileError() {
  return (
    <MobileSpace>
        <br/> 
        <ErrorIcon>
          <FontAwesomeIcon icon={faCode} color = {Colors.grey2} size="5x" />
          </ErrorIcon>
        <Text2>
            <br/>
            Hi there! <br/> The mobile version of this website is unavailable at the moment. 
            Please access the portfolio through your desktop.
        </Text2>
    </MobileSpace>

  )
}
