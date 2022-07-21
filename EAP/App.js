/*=============================================================================
 |   File Purpose:  Starts app as whole, Main Screen
 |
 |       Author:  
 |     Language:  JavaScript
 |                      NAME OF THE COMPILER USED TO COMPILE IT WHEN IT
 |                      WAS TESTED
 |   To Compile:  in terminal run 'npm start' command
 |
 +-----------------------------------------------------------------------------
 |
 |  Description:  DESCRIBE THE PROBLEM THAT WAS WRITTEN TO
 |      SOLVE.
 |
 |        Input:  NONE
 |
 |       Output:  DESCRIBE THE OUTPUT PRODUCED.
 |
 |    Algorithm:  
 |
 |   Required Features Not Included:
 |
 |   Known Bugs:  
 |
 *===========================================================================*/

 
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './routes/homeStack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Navigator/>
    /*
    <NavigationContainer>
      <Drawer.Navigator 
        drawerType="front"
        initialRouteName="Profile"
        drawerContentOption={{
          activeTintColor: '#e91e63',
          itemStyle:{marginVertical: 10},
        }}
      >
      </Drawer.Navigator>
    </NavigationContainer>
    */
    /*
    <View style={styles.container}>
      <Text>One small step for man...</Text>
      <StatusBar style="auto" />
    </View>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
