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
      
        function ButtonsRow({ children }){
          return (
            <View style = {styles.butonsRow}>{children}</View>
          )
        }

        function TimerButton({ title, color, background, onPress, disabled  }) {
            return (
                <TouchableOpacity
                    onPress={() => !disabled && onPress()}
                    style={[styles.button, { backgroundColor: background }]}
                    activeOpacity={disabled ? 1.0 : 0.7}
                >
                    <View style={styles.TimerButton}>
                        <Text style={[styles.buttonTitle, { color }]}>{title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
 
        function Stamp({ interval }){
          return(
            <View style={styles.stamp}>
                  <Text> curTime ( </Text>
                  <Timer style={styles.stampTimer} interval={interval} />
                  <Text> ) - Sample Text</Text>
           </View>
          )
        }
      
function StampsTable({ stamps }) {
            const curTime = moment().format('MM/DD hh:mm:ss')
          return(
            <ScrollView style={styles.ScrollView}>
              {stamps.map((stamp, index) => (
                <Stamp number={index} key={index} interval = {stamp}/>
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
      stamps: [ ],
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
      stamps: [0],
    })
    this.timer = setInterval(() =>{
      this.setState({ now: new Date().getTime()})
    }, 1000)
  }

    start = () => {
        const now = new Date().getTime()
        this.setState({
            start: now,
            now,
            stamps: [0],
        })
        this.timer = setInterval(() => {
            this.setState({ now: new Date().getTime() })
        }, 1000)
    }

    stamp = () => {
        const timestamp = new Date().getTime()
        const { stamps, now, start } = this.state
        const [firstStamp, ...other] = stamps
        this.setState({
            stamps: [0, firstStamp + now - start, ...other],
            start: timestamp,
            now: timestamp,
        })
    }

    stop = () => {
        clearInterval(this.timer)
        const { stamps, now, start } = this.state
        const [firstStamp, ...other] = stamps
        this.setState({
            stamps: [firstStamp + now - start, ...other],
            start: 0,
            now: 0,
        })
    }

    reset = () => {
        this.setState({
            stamps: [],
            start: 0,
            now: 0,
        })
    }

    resume = () => {
        const now = new Date().getTime()
        this.setState({
            start: now,
            now,
        })
        this.timer = setInterval(() => {
            thisthis.setState({ now: new Date().getTime()})
        }, 1000)
    }

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
    //justifyContent: 'center', //aligns along center vertically
    paddingTop: 130,
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
    width:110,
  },
  button: {
    width: 160,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
      alignItems: 'center',
    },
  buttonTitle: {
    fontSize: 35,
  },
  butonsRow: {
    flexDirection: 'row',
    alignSlef: 'stretch',
    justifyContent: 'space-between',
    marginTop: 20,
      marginBottom: 30,
  },
  stampText: {
      color: '#000000',
      fontSize: 18,
  },
  stamp:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    paddingVertical: 5,
    },
    stampTimer: {

    },
  ScrollView:{
      alignSelf: 'center',
      width: '80%',
  },
  timerContainer:{
    flexDirection: 'row',
  },
});
