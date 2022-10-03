/*=============================================================================
 |   File Purpose:  PURPOSE OF FILE
 |
 |       Author:  NAME HERE
 |     Language:  NAME OF LANGUAGE IN WHICH THE PROGRAM IS WRITTEN AND THE
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

 import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
 import {StyleSheet, View, Text} from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

 export default function MainScreen({navigation}) {
     
    const pressHandler = () => {
        NavigationContainer.navigate('University')
    }
     return (
         <View>
             <Text>Home Screen</Text>
             <Button title='University' onPress={pressHandler}/>
         </View>
     )
 }