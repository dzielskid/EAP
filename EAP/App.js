import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,button,Pressable } from 'react-native';

export default function App(props) {
  const [Editor, setEditorName] = useState('');
  const [Editoremail, setEditorEmail] = useState('13555 Peabody st');
  const [Organization, setOrganizationName]=useState('Morgantown');
  
  const {onPress,title = 'Invite'}=props;


  return (
    <View style={styles.container}>

      <Text>Editor Name:</Text>
      <TextInput 
        placeholder='' 
        style={styles.input}
        onChangeText={(value) => setEditorName(value)} />

      <Text>Editor Email:</Text>
      <TextInput 
        placeholder='' 
        style={styles.input}
        onChangeText={(value) => setEditorEmail(value)} />

<Text>Organization Name:</Text>
      <TextInput 
        placeholder='' 
        style={styles.input}
        onChangeText={(value) => setOrganizationName(value)} />


<Pressable style={styles.button} onPress={onPress}>
  <Text style={styles.text}>{title}</Text>
</Pressable>

      <Text style={styles.result}>name: {EditorName}, Email: {Editoremail}, Organization: {OrganizationName}</Text>
      
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  button:{
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  }
});