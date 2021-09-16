import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { auth } from '../firebase';
import Loader from '../components/Loader';

const ForgotPasswordScreen = ({navigation}) => {  
  const [email, setEmail] =  useState("")
  const [isLoading, setLoader] = useState(false);

  const forgotPassword = (email) => {
    setLoader(true);
    auth.sendPasswordResetEmail(email)
    .then( () => {
      setLoader(false);
      navigation.replace("Status");
      //alert('Please check your email...')

    }).catch( (e) => {
      setLoader(false);
      alert(e)
    });
  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.appname}>Anonymostal++ </Text>
      <View style={styles.forgotpasswordSection}>
        <Text style={styles.forgotpasswordSectionText}>Forgot Password</Text>
        <TextInput style={styles.loginInput} placeholder="email" onChangeText={(value) => setEmail(value)} />
        <Loader isLoading={isLoading}/>
        <TouchableOpacity style={styles.forgotpassword} onPress={ () => forgotPassword(email)} activeOpacity={0.5}>
          <Text style={styles.forgotpasswordText}>submit</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
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

  forgotpasswordSection:{
    marginTop: 100
  },
  forgotpasswordSectionText:{
    alignItems: 'center',
    marginBottom: 30,
    color: 'lightgrey',
    fontSize: 20,
    fontWeight: 'bold'
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
  forgotpassword:{
    alignItems: 'center',
    backgroundColor: 'darkblue',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  forgotpasswordText:{
    color: 'white',
  },
  

});

export default ForgotPasswordScreen;