import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
const PageStatus = ({page,msg}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.SectionText}>{"Forgot Password"}</Text>
            <Text>{"A reset password link is sent to your email"}</Text>
        </View>
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
    SectionText:{
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 30,
      color: 'darkblue',
      fontSize: 20,
      fontWeight: 'bold'
    },
  
  });

export default PageStatus;