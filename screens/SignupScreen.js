import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { KeyboardAvoidingView } from 'react-native';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Tooltip} from 'react-native';
import { auth } from '../firebase';
import Loader from '../components/Loader';

const SignupScreen = ({navigation}) => {  
  const [email, setEmail] =  useState("")
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLoading, setLoader] = useState(false);
  const signup = (email, password1, password2) => {
    //alert("email: " + email + "; pass1: " + password1 + "; pass2: " + password2)
    if(password1 == password2){
      setLoader(true);
      auth.createUserWithEmailAndPassword(email, password1)
        .then((authUser) => {
          authUser.user.updateProfile({
            photoURL:
              "setProfilePic://https://source.unsplash.com/random",
          })
        })
        .catch((error) => {
          setLoader(false);
          alert(error.message)
        });
    }else{
      alert("Passwords are not thesame");
    }
  }  
  return (
    <KeyboardAvoidingView style={styles.container} enabled behavior='padding'>
      <Text style={styles.appname}>Anonymostal++ </Text>
      <View style={styles.signupSection}>
        <Text style={styles.signupSectionText}>Signup Now</Text>
        <TextInput style={styles.loginInput} placeholder="email" onChangeText={(value) => setEmail(value)} />
        <TextInput style={styles.loginInput} placeholder="New password" onChangeText={(value) => setPassword1(value)} secureTextEntry />
        <TextInput style={styles.loginInput} placeholder="Reapeat password" onChangeText={(value) => setPassword2(value)} secureTextEntry />
        <Loader isLoading={isLoading}/>
        <TouchableOpacity style={styles.signup} onPress={ () => signup(email, password1, password2)} activeOpacity={0.5}>
          <Text style={styles.signupText}>signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login} activeOpacity={0.5} onPress={ () => navigation.navigate("Login")} >
          <Text style={styles.loginText}>Login</Text>
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

  signupSection:{
    marginTop: 100
  },
  signupSectionText:{
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
  signup:{
    alignItems: 'center',
    backgroundColor: 'darkblue',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  signupText:{
    color: 'white',
  },
  login:{
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

});

export default SignupScreen;