import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar} from 'react-native-elements';

const ChatList = ({ id, chatname, enterChat, url}) => {  
  const [chatMessages, setChatMessages] = useState([]);
  //const num =+ 1;
  const genNum = () => {
    const maxNumber = 100;    
    const randomNumber = Math.floor((Math.random() * maxNumber) * i);
    return randomNumber;
  }
  return (
    <ListItem key={id} style={styles.container} onPress={() => enterChat(id, chatname)}>
      <Avatar rounded source={{ uri: url}}/>
      <ListItem.Content>
        <ListItem.Title>
          {chatname}
         </ListItem.Title>
         <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
           {}
          </ListItem.Subtitle>
      </ListItem.Content>  
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

});

export default ChatList;