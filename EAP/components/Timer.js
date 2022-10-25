import React, { Component, UseState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ListComponent from "./TimerList.js";
import DialogInput from "react-native-dialog-input";

import moment from "moment";

let padToTwo = (number) => (number <= 9 ? `0${number}` : number)



class TimerContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hr: 0,
            min: 0,
            sec: 0
        }

        this.lapArr = [];

        this.interval = null;
    };


    handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };

    handleLap = (hr, min, sec, curTime) => {
        this.lapArr = [
            ...this.lapArr,
            { hr, min, sec, curTime }
        ]

    };

    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.sec !== 59) {
                    this.setState({
                        sec: this.state.sec + 1
                    });
                } else if (this.state.min !== 59) {
                    this.setState({
                        sec: 0,
                        min: ++this.state.min
                    });
                } else {
                    this.setState({
                        sec: 0,
                        min: 0,
                        hr: ++this.state.hr
                    });
                }
            }, 1000);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            hr: 0,
            min: 0,
            sec: 0,

            start: false
        });

        clearInterval(this.interval);

        this.lapArr = [];
    };


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.parent}>
                    <Text style={styles.child}>{'  ' + padToTwo(this.state.hr) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec)}</Text>
                </View>

                <View style={styles.buttonParent}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={!this.state.start ? this.handleToggle : this.handleReset}
                    >
                        <Text style={styles.buttonText}>{!this.state.start ? 'Start' : 'Stop'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        disabled={!this.state.start}
                        onPress={() => {
                            this.handleLap(this.state.hr, this.state.min, this.state.sec, moment().format("HH:mm:ss"))
                        }}
                    >
                        <Text style={styles.buttonText}>Stamp</Text>
                    </TouchableOpacity>

                </View>

                <ListComponent lap={ this.lapArr } timelap={ this.timeArr }/>

            </View>
        );
    }


}

const styles = StyleSheet.create({

    parent: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: "6%",
        paddingRight: "6%",
        paddingTop: ".5%",
        paddingBottom: ".5%",
        maxWidth: "63%"
    },

    child: {
        fontSize: 50,
        color: "#000000",
    },

    buttonParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "5%",
        marginBottom: "5%"
    },

    button: {
        backgroundColor: "#FFFFFF",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#000000",
        height: 60,
    },

    buttonText: {
        color: "#000000",
        fontSize: 20,
        alignSelf: "center"
    }
});

export default TimerContainer;