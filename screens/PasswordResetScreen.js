import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const PasswordResetScreen = () => {  
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const resetPassword = (password1, password2) => {
    //alert("pass1: " + password1 + "; pass2: " + password2)
  }  
  return (
    <View style={styles.container}>
      <Text style={styles.appname}>Anonymostal++ </Text>
      <View style={styles.passwordresetSection}>
        <Text style={styles.passwordresetSectionText}>Reset Password</Text>
        <TextInput style={styles.loginInput} type="password" placeholder="New password" onChangeText={(value) => setPassword1(value)} />
        <TextInput style={styles.loginInput} type="password" placeholder="Reapeat password" onChangeText={(value) => setPassword2(value)} />
        <TouchableOpacity style={styles.passwordreset} onPress={resetPassword(password1, password2)} activeOpacity={0.5}>
          <Text style={styles.passwordresetText}>Reset</Text>
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

  passwordresetSection:{
    marginTop: 100
  },
  passwordresetSectionText:{
    alignItems: 'center',
    marginBottom: 30,
    color: 'lightgrey',
    fontSize: 20,
    fontWeight: 'bold'
  },
  loginInput:{
    flex: 1,
    color: 'white',
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    marginBottom: 20,
  },
  passwordreset:{
    alignItems: 'center',
    backgroundColor: 'darkblue',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
  },
  passwordresetText:{
    color: 'white',
  },

});

export default PasswordResetScreen;