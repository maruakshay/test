import { createGlobalStyle } from "styled-components";
import Bold from '../../assets/fonts/Poppins-Bold.ttf';
import Light from '../../assets/fonts/Poppins-Light.ttf';
import Medium from '../../assets/fonts/Poppins-Medium.ttf';
import Regular from '../../assets/fonts/Poppins-Regular.ttf';
import ExtraLight from '../../assets/fonts/Poppins-ExtraLight.ttf';
import SemiBold from '../../assets/fonts/Poppins-SemiBold.ttf';

export interface ScreenSizes {
	mediaXS: number;
	mediaS: number;
	mediaM: number;
	mediaL: number;
	mediaXL: number;
	mediaXXL: number;
	mediaLX: number;
	mediaLXX: number;
}
export const screenSizes: ScreenSizes = {
	mediaXS: 380,
	mediaS: 640,
	mediaM: 800,
	mediaL: 1024,
	mediaXL: 1280,
	mediaXXL: 1480,
	mediaLX: 1800,
	mediaLXX: 2000,
};
export const GlobalStyles = createGlobalStyle
`
body {
}
@font-face {
    font-family: Bold;
    src: url(${Bold});
  }
  @font-face {
    font-family: Light; 
    src: url(${Light});
  }
  @font-face {
    font-family: Medium;
    src: url(${Medium});
  }
  @font-face {
    font-family: Regular;
    src: url(${Regular});
  }
  @font-face {
    font-family: ExtraLight;
    src: url(${ExtraLight});
  }
  @font-face {
    font-family: SemiBold;
    src: url(${SemiBold});
  }
`