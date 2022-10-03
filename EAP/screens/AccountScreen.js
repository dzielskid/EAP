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

 import * as React from 'react';
import { View, Text } from "react-native";

export default function ProfileScreen() {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>Account Options Screen</Text>
</View>
   );
 }