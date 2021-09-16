import { StatusBar } from 'expo-status-bar';
import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { db } from '../firebase';
import Loader from '../components/Loader';

const AddChatScreen = ({ navigation }) => {  
  const [chatname, setChatName] =  useState("")
  const [isLoading, setLoader] = useState(false);
  useLayoutEffect( () => {
      navigation.setOptions({
          title: "New Chat",
          headerBackTitle: "chats"        
      })

  })

    const addChat = async (chatname) => {

        if(chatname != ""){
            setLoader(true);
            await db.collection("chats")
            .add({
                chatName: chatname,
            })
            .then((name) => {
                setLoader(false);
                //alert(name);
                navigation.goBack();
            })
            .catch((error) => {
                setLoader(false);
                alert(error);
            });
        }else{
            alert("chat name is empty");
        }
    };
  
  
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.appname}> Create new chat </Text>
      <View style={styles.loginSection}>
        <TextInput style={styles.loginInput} keyboardType="email-address" placeholder="chat name" onChangeText={(value) => setChatName(value)} />
        <Loader isLoading={isLoading}/>
        <TouchableOpacity style={styles.login} onPress={ () => addChat(chatname)} activeOpacity={0.5}>
          <Text style={styles.loginText}>create</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  appname:{
    marginTop: '15px',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
  },

  loginSection:{
    marginTop: 50
  },
  loginInput:{
    flex: 1,
    color: 'black',
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    marginBottom: 20,
  },
  login:{
    alignItems: 'center',
    backgroundColor: 'darkblue',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
  },
  loginText:{
    color: 'white',
  },
  register:{
    backgroundColor: 'lightgrey',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  forgotpassword:{
    alignItems: 'center',

  },
  forgotpasswordText:{
    coolor: 'blue',
    textDecorationLine: 'underline',
    fontSize: 17,
    marginTop: 15,
  }
  

});

export default AddChatScreen;