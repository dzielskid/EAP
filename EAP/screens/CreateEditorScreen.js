import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,button,Pressable } from 'react-native';

function CreateEditorScreen({ navigation }) {
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
      
               
export { CreateEditorScreen };