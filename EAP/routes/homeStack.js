/*=============================================================================
 |   File Purpose:  Where we configure our stack navigator
 |
 |       Author:  NAME HERE
 |     Language:  JavaScript
 |                      NAME OF THE COMPILER USED TO COMPILE IT WHEN IT
 |                      WAS TESTED
 |   To Compile:  EXPLAIN HOW TO COMPILE THIS PROGRAM
 |
 +-----------------------------------------------------------------------------
 |
 |  Description:  DESCRIBE THE PROBLEM THAT WAS WRITTEN TO
 |      SOLVE.
 |
 |        Input:  DESCRIBE THE INPUT REQUIRED.
 |
 |       Output:  DESCRIBE THE OUTPUT PRODUCED.
 |
 |    Algorithm:  OUTLINE THE APPROACH USED BY THE PROGRAM TO SOLVE THE
 |      PROBLEM.
 |
 |   Required Features Not Included:  DESCRIBE HERE ANY REQUIREMENTS OF
 |      THAT ARE NOT ATTEMPTED TO SOLVE.
 |
 |   Known Bugs:  IF DOES NOT FUNCTION CORRECTLY IN SOME
 |      SITUATIONS, DESCRIBE THE SITUATIONS AND PROBLEMS HERE.
 |
 *===========================================================================*/


 //MYA Note: Didn't include /all/ screens right now since some will be using drawer navigation and thus their own stack needed (see The Net Ninja videos included in collaborated youtube playlist for more details)
 import {createStackNavigator} from 'react-navigation-stack';
 import {createAppContainer} from 'react-navigation';
 import EAPDisplay from '../screens/EAPDisplayScreen';
 import IncidentReports from '../screens/IncidentReportsScreen';
 import IncidentResponseDisplay from '../screens/IncidentResponseDisplayScreen';
 import Main from '../screens/MainScreen';
 import University from '../screens/UniversityScreen';
 import UploadEAP from '../screens/UploadEAPScreen';

 //The first item of this will be the screen shown as default, hence why main is at top instead of abc order
const screens = {
    Main:{
        screen: Main
    },
    EAPDisplay:{
        screen: EAPDisplay
    },
    IncidentReports:{
        screen: IncidentReports
    },
    IncidentResponseDisplay:{
        screen: IncidentResponseDisplay
    },
    University:{
        screen: University
    },
    UploadEAP:{
        screen: UploadEAP
    }

}

 const HomeStack = createStackNavigator(screens);

 export default createAppContainer(HomeStack); //creates app container that returns a container that we can now render