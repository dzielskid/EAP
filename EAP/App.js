import React, { Component } from 'react'
import {
  StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert
  } from 'react-native'
import moment from 'moment'

function Timer({ interval, style }) {
  const pad = (n) => n < 10 ? '0' + n : n //So that timer units have two digits
  const duration = moment.duration(interval)
  return (
    <View style={styles.timerContainer}>
      <Text style={style}>{pad(duration.hours())}:</Text>
      <Text style={style}>{pad(duration.minutes())}:</Text>
      <Text style={style}>{pad(duration.seconds())}</Text>
    </View>
  )
}

function TimerButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={() => !disabled && onPress()}
      style={[ styles.button, { backgroundColor: background }]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}
function Stamp({ curTime, number, interval}) {
  const lapStyle = [
    styles.stampText,
  ]
  return (
    <View style={styles.stamp}>
      <Text style={lapStyle}>.{number}</Text>
      <Timer style={[lapStyle, styles.stampTimer]} interval={interval}/>
    </View>
  )
}

function StampsTable({ laps, timer }) {
  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Stamp
          curTime={moment().format('HH:mm:ss'.toString())}
          number={laps.length - index}
          key={laps.length - index}
          interval={index === 0 ? timer + lap : lap}
        />
      ))}
    </ScrollView>
  )
}

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [ ],
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  start = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
      laps: [0],
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
  }
  
  lap = () => {
    const timestamp = new Date().getTime()
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start,
      now: timestamp,
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100)
    Alert.alert('', 'Description:',[
      {text: 'Submit', onPress: () => console.log('New event entered.')}
    ])
  }

  stop = () => {
    clearInterval(this.timer)
    const { laps, now, start } = this.state
    const [firstLap, ...other] = laps
    console.log('line 111')
    console.log(start)
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    })
    console.log(start)
    Alert.alert('', 'Name Incident: ', [
      {text: 'Submit', onPress: () => console.log('New Incident entered.')}
    ])
  }
  reset = () => {
    this.setState({
      laps: [],
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
      this.setState({ now: new Date().getTime()})
    }, 100)
  }
  render() {
    const { now, start, laps } = this.state
    const timer = now - start
    console.log('line 144')
    console.log(start)
    return (
      <View style={styles.container}>
        <Timer
          interval={laps.reduce((total, curr) => total + curr, 0) + timer}
          style={styles.timer}
        />
        {laps.length === 0 && (
          <ButtonsRow>
          <TimerButton
              title='Start'
              color='#FFFFFF'
              background='#3ADB21'
              onPress={this.start}
            />
            <TimerButton
              title='Stamp'
              color='#FFFFFF'
              background='#151515'
              disabled
            />
          </ButtonsRow>
        )}
        {start > 0 && (
          <ButtonsRow>
            <TimerButton
              title='Stop'
              color='#FFFFFF'
              background='#F10F0F'
              onPress={this.stop}
            />
            <TimerButton
              title='Stamp'
              color='#FFFFFF'
              background='#2159DB'
              onPress={this.lap}
            />
          </ButtonsRow>
        )}
        {laps.length > 0 && start === 0 && (
          <ButtonsRow>
            <TimerButton
              title='Start'
              color='#FFFFFF'
              background='#3ADB21'
              onPress={this.resume}
            />
            <TimerButton
              title='Reset'
              color='#FFFFFF'
              background='#3D3D3D'
              onPress={this.reset}
            />
          </ButtonsRow>
        )}
        <StampsTable laps={laps} timer={timer}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 20,
  },
  header: {
    flex:1,
    backgroundColor: '#FFFFFF',
    paddingTop: 130,
    algSelf: 'stretch',
  },
  timer: {
    color: '#000000',
    fontSize: 76,
    fontWeight: '300',
    width: 110,
  },
  button: {
    width: 160,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 165,
    height: 55,
    borderRadius: 38,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 30,
  },
  stampText: {
    color: '#000000',
    fontSize: 18,
  },
  stampTimer: {
    width: 30,
  },
  stamp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  timerContainer: {
    flexDirection: 'row',
  }
})