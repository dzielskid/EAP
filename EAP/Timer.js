/*=============================================================================
 |   File Purpose:  Timer
 |
 |       Author:  Mya
 |     Language:  JavaScript
 |
 +-----------------------------------------------------------------------------
 |
 |  Description:  Stores all functions pertaining to the Timer feature
 |
 |        Input:   |
 |       Output:  
 |
 |    Algorithm:  
 |
 |   Required Features Not Included: 
 |
 |   Known Bugs: 
 |
 *===========================================================================*/


import React, {} from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';
  
  /*------------------------------------------------- Timer -----
         |  Function Timer
         |
         |  Purpose:  uses the package 'moment', a very popular Javascript package for counting time to create a timer that counts hours, minutes and seconds
         |
         |  Parameters:
         |      interval (IN) - 
         |
         |  Returns:  text of timer current hours:minutes:seconds in styles.timer
         *-------------------------------------------------------------------*/

         function Timer({interval}){
            const pad = (n) => n < 10 ? '0' + n : n
            const duration = moment.duration(interval)
            return (
            <View style = {styles.timerContainer}>
                <Text style={style}>{pad(duration.hours())}:</Text>
                <Text style={style}>{pad(duration.minutes())}:</Text>
                <Text style={style}>{pad(duration.seconds())}:</Text>
            </View>
            //<Text style={styles.timer}>
            //  {duration.hours()}:{duration.minutes()}:{duration.seconds()}
            //</Text>
            )
          }
        
          /*------------------------------------------------- TimerButton -----
                 |  Function TimerButton
                 |
                 |  Purpose: Create a button with the standard for timer buttons (i.e. Start, Stop, Stamp)
                 |
                 |  Parameters:
                 |      title (IN) - What the button will say
                 |      color (IN) - text color for title        
                 |      background (IN) - background color of button        |
                 |  Returns:  a view with the button
                 *-------------------------------------------------------------------*/
        
          function TimerButton({ title, color, background, onPress, disabled }){
            return(
              <TouchableOpacity 
                onPress={() => !disabled && onPress()}
                style={[ styles.button,{backgroundColor: background} ]}
                activeOpacity={disabled ? 1.0 : 0.7}  //if disabled, don't want to change opacity on click, otherwise dim opacity on click
              >
                  <Text style={{ color }}>{title}</Text>
              </TouchableOpacity>
            )
          }
        
          /*------------------------------------------------- ButtonRow -----
                 |  Function ButtonRow
                 |
                 |  Purpose:  Puts buttons into an even horizontal row
                 |
                 |  Parameters:
                 |      children - buttons that you wish to put into a row horizontally
                 |
                 |  Returns:  view with children buttons in a row
                 *-------------------------------------------------------------------*/
        
          function ButtonsRow({ children }){
            return (
              <View style = {styles.butonsRow}>{children}</View>
            )
          }
        
          function Stamp({ interval }){
            return(
             <View style={styles.lap}>
               <Text style={styles.lapTimer}>{interval} : Sample text</Text>
               <Timer style={styles.lapTimer} interval={interval}/>
              </View>
            )
          }
        
          function LapsTable({ laps }){
            return(
              <ScrollView style={styles.ScrollView}>
                {laps.map((lap, index) => (
                  <Stamp number={index} key={index} interval = {lap}/>
                ))}
              </ScrollView>
        
            )
          }