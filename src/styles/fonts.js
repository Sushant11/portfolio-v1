import { css } from 'styled-components'

import RobotoLightTTF from '../assets/fonts/Roboto-Light.ttf';
import RobotoLightItalicTTF from '../assets/fonts/Roboto-LightItalic.ttf';
import RobotoRegularTTF from '../assets/fonts/Roboto-Regular.ttf';
import RobotoMediumTTF from '../assets/fonts/Roboto-Medium.ttf';
import RobotoMediumItalicTTF from '../assets/fonts/Roboto-MediumItalic.ttf';
import RobotoBoldTTF from '../assets/fonts/Roboto-RobotBoldItalicTTF.ttf';
import RobotBoldItalicTTF from '../assets/fonts/Roboto-BoldItalic.ttf';
import RobotoBlackTTF from '../assets/fonts/Roboto-Black.ttf';
import RobotoBlackItalicTTF from '../assets/fonts/Roboto-BlackItalic.ttf';

const FontFaces = css`
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotoLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  } 
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotoLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotoBoldTTF}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotBoldItalicTTF}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotoBlackTTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src:url(${RobotoBlackItalicTTF}) format('truetype');
    font-weight: 900;
    font-style: italic;
  }
`;

export default FontFaces