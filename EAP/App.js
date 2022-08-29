/*=============================================================================
 |   File Purpose:  Starts app as whole
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
 |   Required Features Not Included:  Start on Main Screen
 |
 |   Known Bugs:  
 |
 *===========================================================================*/

import React, {useState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import moment from 'moment';

  /*------------------------------------------------- Timer -----
         |  Function Timer
         |
         |  Purpose:  uses the package 'moment', a very popular Javascript package for counting time to create a timer that counts hours, minutes and seconds
         |
         |  Parameters:
         |      interval (IN) - 
         |
         |  Returns:  view of timer current hours:minutes:seconds in styles.timer
         *-------------------------------------------------------------------*/

         function Timer({interval, style}){
          const pad = (n) => n < 10 ? '0' + n : n
          const duration = moment.duration(interval)
          return (
            <View style={styles.timerContainer}>
              <Text style={style}>{pad(duration.hours())}:</Text>
              <Text style={style}>{pad(duration.minutes())}:</Text>
              <Text style={style}>{pad(duration.seconds())}</Text>
            </View>
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
              <Text style={styles.lapTimer}>Event at {interval}: </Text>
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

export default class App extends Component {
  //const [searchTerm, setTerm] = useState('');
  //To use this ^^^ use {searchTerm}

  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0, //start-now=timer duration
      laps: [ ],
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  start = () => {
    const now = new Date().getTime
    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() =>{
      this.setState({ now: new Date().getTime()})
    }, 100)
  }

  render(){
    const { now, start, laps } = this.state
    const timer = now - start
    return (
      <View style={styles.container}>
        <Timer interval={timer} style={styles.timer}/>
        <ButtonsRow>
          <TimerButton 
            title='Start' 
            color='#FFFFFF' 
            background='#3ADB21'
            onPress={this.start}
          />
          <TimerButton title='Stamp' color='#FFFFFF' background='#2159DB'/>
        </ButtonsRow>
        <LapsTable laps={laps}/>
        <TextInput 
          style={styles.input}
          placeholder='Search Institutions...'
          onChangeText={(val) => setName(val)}  //Sets searchTerm to whatever is typed in search textbox at any moment
        />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center', //aligns along center vertically
    paddingTop: 150,
    paddingHorizontal: 20,
  },
  input:{
    borderWidth:1,
    borderColor: '#777',
    padding:8,
    margin: 10,
    width: 200,
  },
  timer:{
    fontSize:76,
    fontWeight: '200',
  },
  button: {
    width: 160,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 50,
  },
  butonsRow: {
    flexDirection: 'row',
    alignSlef: 'stretch',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  lapText: {
    color: '#000000'
  },
  lapTimer:{
    width:30,
  },
  lap:{
    flexirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  ScrollView:{
    alignSelf: 'stretch',
  },
  timerContainer:{
    flexDirection: 'row',
  },
});
