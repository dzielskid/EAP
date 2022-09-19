import React, { useState, Component } from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';

export default function App(){
    const [name, OrganizationName] = useState('WVU medicial');
    const [address, OrganizationAddress] = useState('1357 Domain st ');
    const [city, City] = useState('West Virginia');
    const [zip, ZipCode] = useState('26505');
    const [Adminname, AdminName] = useState('Dale');
    const [Adminemail, AdminEmail] = useState('ssno0@mix.wvu.edu');

    return(
        <View style={styles.container}>
            <Text>orgnization name:</Text>
            <TextInput
                multiline
                style={styles.input}
                placeholder='e.g. Bk'
                onChangeText={(val)=>OrganizationName(val)} />

                <Text> orgnization address:</Text>
                <TextInput
   
  
                style={styles.input}
                placeholder='e.g. 1357'
                onChangeText={(val)=>OrganizationAddress(val)} />   

                <Text> name: {OrganizationName}, address:{OrganizationAddress}, city: {City}, zip:{ZipCode},Adminname: {AdminName}, Adminemail: {AdminEmail} </Text>

          
        </View>
    );

    
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    input: {
        borderWidth:1,
        borderColor:'#777',
        padding: 8,
        margin: 10,
        width: 150,

    }
});
