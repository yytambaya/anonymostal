import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {TouchableOpacity,SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {Avatar} from 'react-native-elements';
import ChatList from '../components/ChatList';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { auth, db } from '../firebase';

const HomeScreen = ({navigation}) => {  
  const [chats, setChats] = useState([]);
  const num = Math.floor((Math.random() * 100));
  
  const genNum = () => {
    const maxNumber = 100;    
    const randomNumber = Math.floor((Math.random() * maxNumber) * i);
    console.log(randomNumber);
    return randomNumber;
  }
  useLayoutEffect(() => {
		navigation.setOptions({
			title: "Anonymost++",
			headerStyle: { backgroundColor: "white" },
			headerTitleStyle: { color: "black" },
			headerTintColor: "black",
			headerLeft: () => (
				<View style={{ marginLeft: 20 }}>
					<TouchableOpacity activeOpacity={0.5} >
						<Avatar rounded source="https://source.unsplash.com/random?sig=1" />
					</TouchableOpacity>
				</View>
			),
			headerRight: () => (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: 80,
						marginRight: 20,
					}}
				>
					<TouchableOpacity activeOpacity={0.5} onPress={() =>signOut()}>
						<AntDesign name="logout" size={24} color="black" />
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() => navigation.navigate("AddChat")}
					>
						<AntDesign name="addusergroup" size={24} color="black" />
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

  useEffect(() => {
		const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
			setChats(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
		return unsubscribe;
	}, []);

  const signOut = () => {
		auth.signOut().then(() => navigation.replace("Login"));
	};

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", { id, chatName});
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {chats.map(({ id, data: { chatName } }) => (
					<ChatList
						key={id}
						id={id}
						chatname={chatName}
						enterChat={enterChat}
            url={"https://robohash.org/" + {num}}           
            /> 
          ))}
      </ScrollView>
      <StatusBar style="auto" />
     </SafeAreaView> 
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100%',
  },

});

export default HomeScreen;