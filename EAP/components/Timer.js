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

        this.eventName = ""

        this.isActionDialogVisible = false;
        this.isEndDialogVisible = false;

        this.lapArr = [];

        this.interval = null;
    };

    showActionDialog(isShow) {
        this.isActionDialogVisible = isShow
    }

    showEndDialog(isShow) {
        this.isEndDialogVisible = isShow
    }


    handleToggle = () => {
        this.setState(
            {
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };

    handleLap = (hr, min, sec, curTime, inputText) => {
        this.lapArr = [
            ...this.lapArr,
            { hr, min, sec, curTime, inputText }
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
        this.eventName = ""
    };


    render() {
        return (
            <View>

                <View style={styles.parent}>
                    <Text style={styles.child}>{'' + padToTwo(this.state.hr) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec)}</Text>
                </View>

                <View style={styles.buttonParent}>

                    <TouchableOpacity
                        style={!this.state.start ? styles.startButton : styles.stopButton}
                        onPress={!this.state.start ? this.handleToggle : this.handleReset}
                    >
                        <Text style={styles.buttonText}>{!this.state.start ? 'Start' : 'Stop'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={!this.state.start ? styles.disabledButton : styles.stampButton}
                        disabled={!this.state.start}
                        onPress={() => {
                            this.showActionDialog(true)
                        }}
                    >
                        <Text style={styles.buttonText}>Stamp</Text>
                    </TouchableOpacity>

                    <DialogInput
                        isDialogVisible={this.isActionDialogVisible}
                        title={"Description"}
                        hintInput={"ENTER TEXT"}
                        submitInput={(inputText) => { this.handleLap(this.state.hr, this.state.min, this.state.sec, moment().format("HH:mm:ss"), inputText); this.showActionDialog(false)}}
                        closeDialog={() => { this.showActionDialog(false) }}>
                    </DialogInput>

                    <DialogInput
                        isDialogVisible={this.isEndDialogVisible}
                        title={"Name Incident"}
                        hintInput={"ENTER TEXT"}
                        submitInput={(inputText) => { this.handleReset; this.showEndDialog(false) }}
                        closeDialog={() => { this.showEndDialog(false) }}>
                    </DialogInput>

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
        alignSelf: "center",
        paddingTop: ".5%",
        //paddingBottom: ".5%",
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

    startButton: {
        backgroundColor: "#3adb21",
        paddingVertical: 15,
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#2eaf1a",
        height: 60,
        width: 150,
    },

    stampButton: {
        backgroundColor: "#2159db",
        paddingVertical: 15,
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#173e99",
        height: 60,
        width: 150,
    },

    stopButton: {
        backgroundColor: "#f02d2d",
        paddingVertical: 15,
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#a90b0b",
        height: 60,
        width: 150,
    },

    disabledButton: {
        backgroundColor: "#c2c2c2",
        paddingVertical: 15,
        paddingLeft: "5%",
        paddingRight: "5%",
        display: "flex",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#afafaf",
        height: 60,
        width: 150,
    },

    buttonText: {
        color: "#f3f5fb",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default TimerContainer;