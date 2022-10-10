import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,button,Pressable } from 'react-native';

export default function App(props) {
  const [AdminName, setAdminName] = useState('');
  const [Adminemail, setAdminEmail] = useState('');
  const [OrganizationName, setOrganizationName]=useState('');
  
  const {onPress,title = 'Invite'}=props;


  return (
    <View style={styles.container}>

      <Text>Admin Name:</Text>
      <TextInput 
        placeholder='' 
        style={styles.input}
        onChangeText={(value) => setAdminName(value)} />

      <Text>Admin Email:</Text>
      <TextInput 
        placeholder='' 
        style={styles.input}
        onChangeText={(value) => setAdminEmail(value)} />

<Text>Organization Name:</Text>
      <TextInput 
        placeholder='' 
        style={styles.input}
        onChangeText={(value) => setOrganizationName(value)} />


<Pressable style={styles.button} onPress={onPress}>
  <Text style={styles.text}>{title}</Text>
</Pressable>

      <Text style={styles.result}>{AdminName} {Adminemail} {OrganizationName}</Text>
      
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