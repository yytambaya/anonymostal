import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';
import Loader from '../components/Loader';
import { setUserLogHandler } from '@firebase/logger';
const LoginScreen = ({ navigation }) => {  
  const [username, setUsername] =  useState("")
  const [password, setPassword] = useState("");
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("Home");
			}
		});
		return unsubscribe;
	}, []);


  const login = (username, password) => {
    setLoader(true);
    auth.signInWithEmailAndPassword(username, password)
			.catch((error) => {
        setLoader(false);
        alert(error)
      });
  }  
  const registerNavigation = () => {
    navigation.navigate('Signup');
  }
  const forgotpassNavigation = () => {
    navigation.navigate('ForgotPassword');
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.appname}>Anonymostal++ </Text>
      <View style={styles.loginSection}>
        <Text style={styles.signupSectionText}>Login Now</Text>
        <TextInput style={styles.loginInput} placeholder="username" onChangeText={(value) => setUsername(value)} />
        <TextInput style={styles.loginInput} placeholder="password" onChangeText={(value) => setPassword(value)} secureTextEntry />
        <Loader isLoading={isLoading}/>
        <TouchableOpacity style={styles.login} onPress={ () => login(username, password)} activeOpacity={0.5}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotpassword} activeOpacity={0.5} onPress={forgotpassNavigation}>
          <Text style={styles.forgotpasswordText}>Forgot password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={registerNavigation} style={styles.register} activeOpacity={0.5}>
          <Text style={styles.registerText}>New Account</Text>
        </TouchableOpacity>
           
      </View>
      <StatusBar style={"auto"} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  appname:{
    marginTop: '15px',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
  },

  loginSection:{
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
  login:{
    alignItems: 'center',
    backgroundColor: 'darkblue',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 3,
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

export default LoginScreen;